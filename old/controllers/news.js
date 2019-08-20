// Get the blog data
const data = require("../data/articles.json");
const formatDate = require("../util/formatDate");

module.exports = () => {
  // Sort it by date so newest is on top
  const dataSorted = data.sort(compareFunction);

  dataSorted.forEach(item => {
    item.dateFormatted = formatDate(item.date);
  });

  return dataSorted;
};

function compareFunction(a, b) {
  // If first date is bigger then second
  const aDate = Date.parse(a.date);
  const bDate = Date.parse(b.date);
  if (aDate > bDate) {
    return -1;
  } else if (aDate < bDate) {
    return 1;
  } else {
    return 0;
  }
}
