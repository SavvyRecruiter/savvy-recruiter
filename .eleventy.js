const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Copy static assets straight through
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");

  // Collection: all newsletters in /newsletters/ (excluding index)
  eleventyConfig.addCollection("newsletter", function(collectionApi) {
    return collectionApi.getFilteredByGlob("newsletters/*.md").sort((a, b) => {
      return a.data.date - b.data.date;
    });
  });

  // Collection: all playbooks in /playbooks/ (excluding index)
  eleventyConfig.addCollection("playbook", function(collectionApi) {
    return collectionApi.getFilteredByGlob("playbooks/*.md").sort((a, b) => {
      return a.data.date - b.data.date;
    });
  });

  // ─── Filters ────────────────────────────────────────────────

  // Date formatter using Luxon (e.g. `date | date: '%d %b %Y'` → 24 Apr 2026)
  eleventyConfig.addFilter("date", (dateObj, format) => {
    if (!dateObj) return '';
    const dt = dateObj instanceof Date
      ? DateTime.fromJSDate(dateObj, { zone: 'Europe/London' })
      : DateTime.fromISO(String(dateObj), { zone: 'Europe/London' });
    // Convert strftime-style format to Luxon tokens
    const fmt = format
      .replace(/%Y/g, 'yyyy')
      .replace(/%m/g, 'MM')
      .replace(/%d/g, 'dd')
      .replace(/%b/g, 'LLL')
      .replace(/%B/g, 'LLLL');
    return dt.toFormat(fmt);
  });

  // Limit filter: `collection | limit(3)` → first 3 items
  eleventyConfig.addFilter("limit", (arr, n) => {
    if (!Array.isArray(arr)) return arr;
    return arr.slice(0, n);
  });

  // Reverse filter (Nunjucks has it, but adding explicitly for safety)
  eleventyConfig.addFilter("reverse", (arr) => {
    if (!Array.isArray(arr)) return arr;
    return [...arr].reverse();
  });

  // Markdown-it configuration — stricter typography, better defaults
  const markdownIt = require("markdown-it");
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true
  });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
