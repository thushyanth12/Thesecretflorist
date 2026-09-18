#!/usr/bin/env node
/**
 * Main On-page + Technical SEO Auditor for The Secret Florist
 */
import fs from "fs/promises";
import path from "path";
import * as cheerio from "cheerio";
import fetch from "node-fetch";
import chalk from "chalk";
import ora from "ora";
import config from "../config.js";

const { siteUrl, pagesToAudit, thresholds, reportsDir } = config;

const results = {
  timestamp: new Date().toISOString(),
  siteUrl,
  pages: [],
  summary: { errors: 0, warnings: 0, passed: 0 },
  technical: {},
};

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; SEO-Automation/1.0)",
      Accept: "text/html,application/xhtml+xml",
    },
    redirect: "follow",
    timeout: 15000,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const html = await res.text();
  return { html, finalUrl: res.url, status: res.status };
}

function analyzePage(url, html, finalUrl) {
  const $ = cheerio.load(html);
  const issues = [];
  const data = {
    url,
    finalUrl,
    title: $("title").first().text().trim() || null,
    description: $('meta[name="description"]').attr("content")?.trim() || null,
    canonical: $('link[rel="canonical"]').attr("href") || null,
    robots: $('meta[name="robots"]').attr("content") || null,
    ogTitle: $('meta[property="og:title"]').attr("content") || null,
    ogDescription: $('meta[property="og:description"]').attr("content") || null,
    ogImage: $('meta[property="og:image"]').attr("content") || null,
    h1: $("h1").map((_, el) => $(el).text().trim()).get(),
    h2Count: $("h2").length,
    imagesWithoutAlt: $("img:not([alt]), img[alt='']").length,
    jsonLd: [],
    wordCount: $("body").text().replace(/\s+/g, " ").trim().split(" ").length,
  };

  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      data.jsonLd.push(JSON.parse($(el).html()));
    } catch {
      issues.push({ severity: "error", message: "Invalid JSON-LD found" });
    }
  });

  if (!data.title) issues.push({ severity: "error", message: "Missing <title>" });
  else {
    if (data.title.length < thresholds.titleMin) issues.push({ severity: "warning", message: `Title too short (${data.title.length} chars)` });
    if (data.title.length > thresholds.titleMax) issues.push({ severity: "warning", message: `Title too long (${data.title.length} chars)` });
  }

  if (!data.description) issues.push({ severity: "error", message: "Missing meta description" });
  else {
    if (data.description.length < thresholds.descriptionMin) issues.push({ severity: "warning", message: `Description too short (${data.description.length})` });
    if (data.description.length > thresholds.descriptionMax) issues.push({ severity: "warning", message: `Description too long (${data.description.length})` });
  }

  if (!data.canonical) issues.push({ severity: "warning", message: "Missing canonical URL" });
  else if (!data.canonical.startsWith("http")) issues.push({ severity: "error", message: "Canonical is relative (should be absolute)" });

  if (data.h1.length === 0) issues.push({ severity: "error", message: "No H1 found" });
  else if (data.h1.length > 1) issues.push({ severity: "warning", message: `Multiple H1s (${data.h1.length})` });

  if (data.imagesWithoutAlt > 0) issues.push({ severity: "warning", message: `${data.imagesWithoutAlt} image(s) missing alt text` });
  if (data.jsonLd.length === 0) issues.push({ severity: "warning", message: "No JSON-LD structured data found" });
  if (data.wordCount < 300) issues.push({ severity: "warning", message: `Thin content (${data.wordCount} words)` });
  if (!data.ogTitle || !data.ogDescription || !data.ogImage) issues.push({ severity: "warning", message: "Incomplete Open Graph tags" });

  return { data, issues };
}

async function checkTechnical() {
  const tech = {};
  try {
    const robotsRes = await fetch(`${siteUrl}/robots.txt`);
    tech.robotsTxt = { status: robotsRes.status, content: robotsRes.ok ? await robotsRes.text() : null };
    if (!robotsRes.ok) results.summary.errors++;
  } catch (e) {
    tech.robotsTxt = { error: e.message };
    results.summary.errors++;
  }

  try {
    const sitemapRes = await fetch(`${siteUrl}/sitemap.xml`);
    tech.sitemap = { status: sitemapRes.status, exists: sitemapRes.ok };
    if (sitemapRes.ok) {
      const xml = await sitemapRes.text();
      const urlMatches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
      tech.sitemap.urlCount = urlMatches.length;
      tech.sitemap.urls = urlMatches.map((m) => m.replace(/<\/?loc>/g, ""));
    } else results.summary.errors++;
  } catch (e) {
    tech.sitemap = { error: e.message };
    results.summary.errors++;
  }

  try {
    const llmsRes = await fetch(`${siteUrl}/llms.txt`);
    tech.llmsTxt = { exists: llmsRes.ok, status: llmsRes.status };
  } catch {
    tech.llmsTxt = { exists: false };
  }

  results.technical = tech;
  return tech;
}

async function getPagesToCrawl() {
  if (pagesToAudit && pagesToAudit.length > 0) {
    return pagesToAudit.map((p) => new URL(p, siteUrl).href);
  }
  try {
    const res = await fetch(`${siteUrl}/sitemap.xml`);
    if (res.ok) {
      const xml = await res.text();
      const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
      return locs.slice(0, 30);
    }
  } catch {}
  return [siteUrl];
}

async function main() {
  console.log(chalk.bold.cyan("\n🔍 Next.js SEO Automation – Full Audit\n"));
  console.log(chalk.gray(`Target: ${siteUrl}\n`));

  const spinner = ora("Checking technical SEO (robots, sitemap, llms.txt)...").start();
  await checkTechnical();
  spinner.succeed("Technical checks complete");

  const pages = await getPagesToCrawl();
  console.log(chalk.gray(`Auditing ${pages.length} page(s)...\n`));

  for (const pageUrl of pages) {
    const pageSpinner = ora(`Auditing ${pageUrl}`).start();
    try {
      const { html, finalUrl, status } = await fetchHtml(pageUrl);
      const { data, issues } = analyzePage(pageUrl, html, finalUrl);

      for (const issue of issues) {
        if (issue.severity === "error") results.summary.errors++;
        else results.summary.warnings++;
      }
      if (issues.length === 0) results.summary.passed++;

      results.pages.push({ ...data, status, issues });
      pageSpinner.succeed(
        `${pageUrl} → ${issues.filter((i) => i.severity === "error").length} errors, ${issues.filter((i) => i.severity === "warning").length} warnings`
      );
    } catch (err) {
      pageSpinner.fail(`${pageUrl} → ${err.message}`);
      results.summary.errors++;
      results.pages.push({ url: pageUrl, error: err.message });
    }
  }

  await fs.mkdir(reportsDir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const jsonPath = path.join(reportsDir, `seo-audit-${stamp}.json`);
  const mdPath = path.join(reportsDir, `seo-audit-${stamp}.md`);

  await fs.writeFile(jsonPath, JSON.stringify(results, null, 2));
  await fs.writeFile(mdPath, generateMarkdown(results));

  console.log(chalk.bold.green("\n✅ Audit complete"));
  console.log(`   Errors  : ${chalk.red(results.summary.errors)}`);
  console.log(`   Warnings: ${chalk.yellow(results.summary.warnings)}`);
  console.log(`   Passed  : ${chalk.green(results.summary.passed)}`);
  console.log(`\nReports saved to:\n  ${jsonPath}\n  ${mdPath}\n`);

  process.exit(results.summary.errors > 0 ? 1 : 0);
}

function generateMarkdown(res) {
  let md = `# SEO Audit Report\n\n**Site:** ${res.siteUrl}  \n**Date:** ${res.timestamp}\n\n## Summary\n\n| Metric | Count |\n|--------|-------|\n| Errors | ${res.summary.errors} |\n| Warnings | ${res.summary.warnings} |\n| Passed pages | ${res.summary.passed} |\n\n## Technical\n\n- robots.txt: ${res.technical.robotsTxt?.status || "error"}\n- sitemap.xml: ${res.technical.sitemap?.exists ? `✅ (${res.technical.sitemap.urlCount} URLs)` : "❌ missing"}\n- llms.txt: ${res.technical.llmsTxt?.exists ? "✅" : "❌"}\n\n## Page Details\n\n`;
  for (const page of res.pages) {
    md += `### ${page.url}\n`;
    if (page.error) {
      md += `❌ ${page.error}\n\n`;
      continue;
    }
    md += `- Title: ${page.title || "❌ missing"}\n`;
    md += `- Description: ${page.description ? page.description.slice(0, 80) + "..." : "❌ missing"}\n`;
    md += `- Canonical: ${page.canonical || "❌"}\n`;
    md += `- H1: ${page.h1?.join(" | ") || "❌"}\n`;
    md += `- JSON-LD blocks: ${page.jsonLd?.length || 0}\n`;
    md += `- Word count: ${page.wordCount}\n`;
    if (page.issues?.length) {
      md += `\n**Issues:**\n`;
      for (const i of page.issues) md += `- [${i.severity.toUpperCase()}] ${i.message}\n`;
    }
    md += `\n`;
  }
  return md;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
