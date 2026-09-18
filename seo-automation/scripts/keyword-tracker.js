#!/usr/bin/env node
/**
 * Advanced Keyword Tracker
 * Supports Google Search Console + SerpAPI
 */
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import config from "../config.js";

dotenv.config();

const { siteUrl, keywords, reportsDir, gscProperty } = config;

async function getGSCData() {
  if (!process.env.GSC_CREDENTIALS && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    return null;
  }
  try {
    const { google } = await import("googleapis");
    const auth = new google.auth.GoogleAuth({
      keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS || undefined,
      credentials: process.env.GSC_CREDENTIALS ? JSON.parse(process.env.GSC_CREDENTIALS) : undefined,
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });
    const authClient = await auth.getClient();
    const searchconsole = google.searchconsole({ version: "v1", auth: authClient });
    const site = gscProperty || siteUrl;
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - 28);
    const format = (d) => d.toISOString().slice(0, 10);

    const topQueries = await searchconsole.searchanalytics.query({
      siteUrl: site,
      requestBody: {
        startDate: format(startDate),
        endDate: format(endDate),
        dimensions: ["query"],
        rowLimit: 50,
        dataState: "final",
      },
    });

    let tracked = [];
    if (keywords?.length) {
      for (const kw of keywords) {
        try {
          const res = await searchconsole.searchanalytics.query({
            siteUrl: site,
            requestBody: {
              startDate: format(startDate),
              endDate: format(endDate),
              dimensions: ["query"],
              dimensionFilterGroups: [{
                filters: [{ dimension: "query", operator: "equals", expression: kw }],
              }],
              rowLimit: 5,
            },
          });
          if (res.data.rows?.length) {
            tracked.push(...res.data.rows.map((r) => ({
              keyword: r.keys[0],
              clicks: r.clicks,
              impressions: r.impressions,
              ctr: r.ctr,
              position: r.position,
              source: "gsc",
            })));
          } else {
            tracked.push({ keyword: kw, clicks: 0, impressions: 0, position: null, source: "gsc", note: "No data in last 28 days" });
          }
        } catch (e) {
          tracked.push({ keyword: kw, error: e.message, source: "gsc" });
        }
      }
    }

    return {
      topQueries: (topQueries.data.rows || []).map((r) => ({
        keyword: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: +(r.ctr * 100).toFixed(2),
        position: +r.position.toFixed(1),
      })),
      trackedKeywords: tracked,
      period: `${format(startDate)} → ${format(endDate)}`,
    };
  } catch (err) {
    console.error("GSC Error:", err.message);
    return { error: err.message };
  }
}

async function getSerpAPIRanks() {
  const apiKey = process.env.SERPAPI_KEY;
  if (!apiKey || !keywords?.length) return null;
  try {
    const { getJson } = await import("serpapi");
    const results = [];
    for (const keyword of keywords) {
      console.log(`  SerpAPI → "${keyword}"`);
      const json = await getJson({
        engine: "google",
        q: keyword,
        api_key: apiKey,
        num: 20,
      });
      const organic = json.organic_results || [];
      let position = null;
      let matchedUrl = null;
      for (const result of organic) {
        if (result.link && result.link.includes(new URL(siteUrl).hostname)) {
          position = result.position;
          matchedUrl = result.link;
          break;
        }
      }
      results.push({ keyword, position, matchedUrl, source: "serpapi", totalResults: json.search_information?.total_results });
      await new Promise((r) => setTimeout(r, 800));
    }
    return results;
  } catch (err) {
    console.error("SerpAPI Error:", err.message);
    return { error: err.message };
  }
}

async function main() {
  console.log("\n🔑 Keyword Tracking Suite\n");
  const report = { timestamp: new Date().toISOString(), siteUrl, gsc: null, serpapi: null };

  console.log("→ Checking Google Search Console...");
  report.gsc = await getGSCData();
  if (report.gsc && !report.gsc.error) {
    console.log(`   ✅ Got ${report.gsc.topQueries?.length || 0} top queries`);
    console.log(`   ✅ Tracked ${report.gsc.trackedKeywords?.length || 0} configured keywords`);
  } else {
    console.log("   ⚠️  GSC not configured or failed");
  }

  if (process.env.SERPAPI_KEY) {
    console.log("\n→ Checking live rankings via SerpAPI...");
    report.serpapi = await getSerpAPIRanks();
  } else {
    console.log("\n→ SerpAPI skipped (set SERPAPI_KEY to enable)");
  }

  await fs.mkdir(reportsDir, { recursive: true });
  const stamp = new Date().toISOString().slice(0, 10);
  const outPath = path.join(reportsDir, `keywords-${stamp}.json`);
  await fs.writeFile(outPath, JSON.stringify(report, null, 2));

  console.log(`\nFull report → ${outPath}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
