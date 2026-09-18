#!/usr/bin/env node
/**
 * Lighthouse batch runner for Core Web Vitals + SEO category
 * Requires Chrome. Runs headless.
 */
import fs from "fs/promises";
import path from "path";
import { createRequire } from "module";
import config from "../config.js";

const require = createRequire(import.meta.url);

async function runLighthouse(url) {
  // Dynamic import because lighthouse is ESM-unfriendly in some setups
  const lighthouse = (await import("lighthouse")).default;
  const chromeLauncher = await import("chrome-launcher");

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });

  const options = {
    logLevel: "error",
    output: "json",
    onlyCategories: ["performance", "accessibility", "seo", "best-practices"],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  const lhr = runnerResult.lhr;
  return {
    url,
    scores: {
      performance: Math.round(lhr.categories.performance.score * 100),
      accessibility: Math.round(lhr.categories.accessibility.score * 100),
      seo: Math.round(lhr.categories.seo.score * 100),
      bestPractices: Math.round(lhr.categories["best-practices"].score * 100),
    },
    audits: {
      lcp: lhr.audits["largest-contentful-paint"]?.displayValue,
      cls: lhr.audits["cumulative-layout-shift"]?.displayValue,
      tbt: lhr.audits["total-blocking-time"]?.displayValue,
      fcp: lhr.audits["first-contentful-paint"]?.displayValue,
      si: lhr.audits["speed-index"]?.displayValue,
    },
    finalUrl: lhr.finalDisplayedUrl,
  };
}

async function main() {
  const { siteUrl, pagesToAudit, reportsDir, thresholds } = config;
  const pages =
    pagesToAudit.length > 0
      ? pagesToAudit.map((p) => new URL(p, siteUrl).href)
      : [siteUrl];

  console.log("\n⚡ Running Lighthouse audits...\n");

  const results = [];
  for (const url of pages.slice(0, 5)) {
    // limit to 5 for speed
    try {
      console.log(`  → ${url}`);
      const res = await runLighthouse(url);
      results.push(res);
      console.log(
        `     Perf ${res.scores.performance} | SEO ${res.scores.seo} | A11y ${res.scores.accessibility}`
      );
    } catch (err) {
      console.error(`     Failed: ${err.message}`);
      results.push({ url, error: err.message });
    }
  }

  await fs.mkdir(reportsDir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const outPath = path.join(reportsDir, `lighthouse-${stamp}.json`);
  await fs.writeFile(outPath, JSON.stringify(results, null, 2));

  console.log(`\nLighthouse results saved → ${outPath}\n`);

  // Fail CI if scores below threshold
  const failed = results.some(
    (r) =>
      r.scores &&
      (r.scores.performance < thresholds.lighthousePerformance ||
        r.scores.seo < thresholds.lighthouseSeo)
  );
  process.exit(failed ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
