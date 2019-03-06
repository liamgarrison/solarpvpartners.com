// -----------SETUP----------------

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const compression = require("compression");
const processRequest = require("./util/processRequest");

app.use(compression()); // for gzipping files
app.use(express.static("public"));

// HTML templating using handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// -----------ROUTE HANDLERS----------------

// Index
app.get("/", (req, res) => {
  processRequest(res, "");
});

//News (override as data needed)
app.get("/news", (req, res) => {
  processRequest(res, "news");
});

//Pages within news   - article data has individual meta data within for head tag
app.get("/news/:article", (req, res) => {
  processRequest(res, "news", req.params.article);
});

//Any other page
app.get("/:page", (req, res) => {
  processRequest(res, req.params.page);
});

// -----------LISTEN----------------

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listing on port ${port}`);
});
