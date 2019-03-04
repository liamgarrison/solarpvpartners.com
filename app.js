// -----------SETUP----------------

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const compression = require("compression");
const pageMeta = require("./data/pageMeta.json");

app.use(compression()); // for gzipping files
app.use(express.static("public"));

// HTML templating using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// -----------ROUTE HANDLERS----------------

// Index
app.get("/", (req, res) => {
  const meta = pageMeta.find(page => page.slug == ""); // get meta for index page (with slug = "")
  res.render("index", { meta });
});

//News (override as data needed)
app.get("/news", (req, res) => {
  const meta = pageMeta.find(page => page.slug == "news");
  const blogItems = require("./controllers/news"); //
  res.render("news", { blogItems, meta });
});

//Pages within news - article data has individual meta data within for head tag
app.get("/news/:article", (req, res) => {
  const getArticleData = require("./controllers/article");
  const meta = getArticleData(req.params.article);
  res.render("article", { meta });
});

//Any other page
app.get("/:page", (req, res) => {
  const meta = pageMeta.find(page => page.slug == req.params.page);
  if (meta) {
    res.render(req.params.page, { meta });
  } else {
    res.status(404).render("404");
  }
});

// -----------LISTEN----------------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listing on port ${port}`);
});
