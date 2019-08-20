// Takes a UTC Date string and makes it a nice text version for displaying on the blog
const dateFormat = require("dateformat");

module.exports = dateStr => {
  return dateFormat(new Date(dateStr), "dS mmmm yyyy");
};
