/**
 * Eleventy configuration
 * ----------------------
 * Static-site generator that turns the component-based templates in /src
 * into fast, SEO-friendly, pre-rendered HTML in /_site.
 */
const siteData = require("./src/_data/site.js");

module.exports = function (eleventyConfig) {
  // Expose the structured content collections as top-level globals so
  // templates can loop over `packages`, `faqs`, etc. directly, while brand
  // and contact details stay namespaced under `site.*`.
  ["packages", "comparison", "extras", "supportPlan", "process", "principles", "journey", "faqs"].forEach(
    (key) => eleventyConfig.addGlobalData(key, siteData[key])
  );

  // Copy static assets straight through to the build output.
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/favicon": "assets/favicon" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Rebuild when the compiled CSS changes (Tailwind writes it separately).
  eleventyConfig.addWatchTarget("./src/css/");

  // --- Filters -------------------------------------------------------------

  // Current year, for the footer.
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Turn a price number into a tidy GBP string, e.g. 1295 -> "£1,295".
  eleventyConfig.addFilter("gbp", (value) => {
    if (value === null || value === undefined || value === "") return "";
    return "£" + Number(value).toLocaleString("en-GB");
  });

  // Slugify helper for anchors / ids.
  eleventyConfig.addFilter("slug", (str) =>
    String(str)
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/[\s_-]+/g, "-")
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
