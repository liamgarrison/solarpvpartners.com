// -----------SETUP----------------

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const compression = require("compression");

app.use(compression()); // for gzipping files
app.use(express.static("public"));

// HTML templating using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// -----------ROUTE HANDLERS----------------

// Index
app.get("/", (req, res) => {
  res.render("index");
});

//News (override as data needed)
app.get("/news", (req, res) => {
  const data = require("./controllers/news");
  res.render("news", { data });
});

//Pages within news
app.get("/news/:article", (req, res) => {
  const getArticleData = require("./controllers/article");
  const data = getArticleData(req.params.article);
  res.render("article", { data });
});

//Any other page
app.get("/:page", (req, res) => {
  res.render(req.params.page);
});

// -----------LISTEN----------------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listing on port ${port}`);
});
