const pluginWebc = require("@11ty/eleventy-plugin-webc");
const doMarkdownIt = require("@digitalocean/do-markdownit");

// If you have short codes
//const registerShortCodes = require("./src/short-codes/");

module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    showAllHosts: true
  });
  
  eleventyConfig.addPassthroughCopy({"./src/assets/img/": "img"});
  eleventyConfig.addPassthroughCopy({"./src/assets/fonts/": "fonts"});
  eleventyConfig.addPassthroughCopy({"./client-side-compiled/**/*": "scripts"});
  eleventyConfig.addPassthroughCopy({"./styles-compiled/**/*": "styles"});
  
  //eleventyConfig.addPassthroughCopy({"./src/copy-to-root/*": "."});

  /* If you have any libs being pulled from node_modules you might do it like below */
  //eleventyConfig.addPassthroughCopy({"./node_modules/swiper/*swiper-bundle.min.js": "scripts/libs"});

  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(false);

  eleventyConfig.addPlugin(pluginWebc);
  
  // configure markdown-it
  eleventyConfig.amendLibrary("md", (mdLib) => {
    mdLib.use(doMarkdownIt, {});
  });

  // If you have short codes
  //registerShortCodes(eleventyConfig);
    
  return {
    dir: {
      input: "src/pages",
    }
  }
};