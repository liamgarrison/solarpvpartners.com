const pageMeta = require("../data/pageMeta.json");
const getNewsItems = require("../controllers/news");
const getArticleData = require("../controllers/article");

module.exports = function(res, slug, article = "") {
  // Set up the nav items for top menu first

  const navItems = [{}];

  pageMeta.forEach(item => {
    navItems.push({
      title: item.title,
      slug: item.slug,
      active: item.slug == slug ? "active" : "" // set to active if slug matched requested page
    });
  });

  if (slug == "news") {
    // If it's the news page, do something different to normal pages as need news data
    if (article) {
      // if it's an article page, get the individual article data. Don't need individual page meta as contained in the article data file
      const meta = getArticleData(article);
      res.render("article", { meta, navItems });
    } else {
      const meta = pageMeta.find(page => page.slug == slug); // get meta for the page
      const newsItems = getNewsItems();
      res.render("news", { newsItems, meta, navItems });
    }
  } else {
    // if it's not a news page
    const meta = pageMeta.find(page => page.slug == slug); // get meta for the page

    // Check for meta (i.e. does the page exist)
    if (meta) {
      res.render(slug, { meta, navItems });
    } else {
      res.status(404).render("404");
    }
  }
};
