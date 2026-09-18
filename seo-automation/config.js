/**
 * SEO Automation Configuration – The Secret Florist
 * https://thesecretflorist.in
 */
export default {
  siteUrl: process.env.SITE_URL || "https://thesecretflorist.in",

  pagesToAudit: [
    "/",
    "/bouquet-delivery-pondicherry.html",
    "/birthday-bouquet-pondicherry.html",
    "/anniversary-flowers-pondicherry.html",
    "/rose-bouquet-pondicherry.html",
  ],

  keywords: [
    "bouquet delivery pondicherry",
    "flower delivery pondicherry",
    "online bouquet pondicherry",
    "birthday bouquet pondicherry",
    "anniversary flowers pondicherry",
    "same day flower delivery pondicherry",
    "florist in pondicherry",
    "rose bouquet pondicherry",
    "order flowers online pondicherry",
    "the secret florist pondicherry",
    "flower shop pondicherry",
    "same day bouquet delivery pondicherry"
  ],

  gscProperty: process.env.GSC_PROPERTY || "https://thesecretflorist.in/",

  thresholds: {
    titleMin: 30,
    titleMax: 60,
    descriptionMin: 70,
    descriptionMax: 160,
    lighthousePerformance: 80,
    lighthouseSeo: 90,
    lighthouseAccessibility: 90,
  },

  reportsDir: "./reports",
};
