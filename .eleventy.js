const markdownIt = require('markdown-it');

module.exports = function(eleventyConfig) {
  // Input a output directories
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/public");

  // Collections
  eleventyConfig.addCollection("concerts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/concerts/*.md");
  });

  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.njk");
  });

  // Filters
  eleventyConfig.addFilter("dateFormat", function(date) {
    if (!date) return "";
    const d = new Date(date);
    const months = ["leden", "únor", "březen", "duben", "květen", "červen", 
                    "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
    return `${d.getDate()}. ${months[d.getMonth()]} ${d.getFullYear()}`;
  });

  eleventyConfig.addFilter("sortByDate", function(array) {
    return array.sort((a, b) => {
      const dateA = new Date(a.data.date || 0);
      const dateB = new Date(b.data.date || 0);
      return dateA - dateB;
    });
  });

  eleventyConfig.addFilter("markdown", function(content) {
    if (!content) return "";
    const md = new markdownIt();
    return md.render(content);
  });

  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addFilter("currentYear", function() {
    return new Date().getFullYear();
  });

  // Markdown configuration
  const md = new markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });

  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

