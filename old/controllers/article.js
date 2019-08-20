const data = require("../data/articles.json");
const fs = require("fs");
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

  // Needs to be a markdown file in the data/articles folder for this to work. TODO make async
  const md = fs.readFileSync(`./data/articles/${slug}.md`, "utf8");

  article.html = converter.makeHtml(md);
  //Convert date
  article.dateDescription = formatDate(article.date);

  return article;
};
