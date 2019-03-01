const data = require("../data/news.json");

// controller for fetching the required data for a given news article
module.exports = slug => {
  const article = data.find(element => {
    return element.slug == slug;
  });
  return article;
};
