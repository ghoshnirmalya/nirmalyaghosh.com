module.exports = {
  siteUrl: "https://CO2.Storage",
  generateRobotsTxt: false,
  changefreq: "daily",
  priority: 1,
  transform: async (config, path) => {
    const ignoredPaths = ["/500", "/404"];

    if (ignoredPaths.indexOf(path) > -1) {
      return null;
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
