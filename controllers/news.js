// Get the blog data
const data = require("../data/news.json");

module.exports = () => {
  // Sort it by date so newest is on top
  return data.sort(compareFunction);
};

function compareFunction(a, b) {
  // If first date is bigger then second
  if (parseDate(a) > parseDate(b)) {
    return -1;
  } else if (parseDate(a) < parseDate(b)) {
    return 1;
  } else {
    return 0;
  }
}

function parseDate(dateStr) {
  const datum = Date.parse(dateStr);
  return datum / 1000;
}
