const data = require("../data/articles.json");
const showdown = require("showdown");
const converter = new showdown.Converter();
const formatDate = require("../util/formatDate");

// controller for fetching the required data for a given news article
module.exports = slug => {
  // Get the right article
  const article = data.find(element => {
    return element.slug == slug;
  });
  // Get the markdown from the article and convert to html
  article.html = converter.makeHtml(article.content);
  //Convert date
  article.dateDescription = formatDate(article.date);

  return article;
};
