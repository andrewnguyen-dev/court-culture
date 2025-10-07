/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL ?? "https://www.courtculture.com.au";

const config = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemap",
  exclude: [
    "/apple-icon.png",
    "/icon0.svg",
    "/icon1.png",
    "/manifest.json",
    "/favicon.ico",
  ],
  alternateRefs: [
    {
      href: "https://www.courtculture.au",
      hreflang: "en-AU",
    },
    {
      href: "https://www.courtculture.com.au",
      hreflang: "x-default",
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: siteUrl,
  },
};

module.exports = config;
