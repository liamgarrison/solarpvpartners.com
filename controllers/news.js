// Get the blog data
const data = require("../data/articles.json");

module.exports = () => {
  // Sort it by date so newest is on top
  return data.sort(compareFunction);
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
