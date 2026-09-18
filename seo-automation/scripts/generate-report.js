#!/usr/bin/env node
/**
 * Combines the latest audit + lighthouse + keyword reports into one nice Markdown summary.
 */
import fs from "fs/promises";
import path from "path";
import config from "../config.js";

async function findLatest(prefix) {
  const files = await fs.readdir(config.reportsDir).catch(() => []);
  const matching = files
    .filter((f) => f.startsWith(prefix) && f.endsWith(".json"))
    .sort()
    .reverse();
  if (!matching.length) return null;
  const content = await fs.readFile(path.join(config.reportsDir, matching[0]), "utf8");
  return JSON.parse(content);
}

async function main() {
  const audit = await findLatest("seo-audit-");
  const lh = await findLatest("lighthouse-");
  const kw = await findLatest("keywords-");

  let md = `# Combined SEO Report\n\n`;
  md += `Generated: ${new Date().toISOString()}\n\n`;

  if (audit) {
    md += `## On-page & Technical Summary\n\n`;
    md += `- Errors: **${audit.summary.errors}**\n`;
    md += `- Warnings: **${audit.summary.warnings}**\n`;
    md += `- Pages audited: ${audit.pages.length}\n`;
    md += `- Sitemap: ${audit.technical?.sitemap?.exists ? "✅" : "❌"}\n`;
    md += `- robots.txt: ${audit.technical?.robotsTxt?.status || "missing"}\n\n`;
  }

  if (lh) {
    md += `## Lighthouse Scores\n\n`;
    md += `| URL | Performance | SEO | Accessibility |\n`;
    md += `|-----|-------------|-----|---------------|\n`;
    for (const r of lh) {
      if (r.scores) {
        md += `| ${r.url} | ${r.scores.performance} | ${r.scores.seo} | ${r.scores.accessibility} |\n`;
      }
    }
    md += `\n`;
  }

  if (kw) {
    md += `## Tracked Keywords\n\n`;
    for (const k of kw.keywords || []) {
      md += `- **${k.keyword}**: ${k.position ?? "not tracked yet"}\n`;
    }
  }

  const out = path.join(config.reportsDir, "latest-summary.md");
  await fs.writeFile(out, md);
  console.log(`Combined report → ${out}`);
}

main().catch(console.error);
