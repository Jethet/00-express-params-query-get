const express = require("express");
const hbs = require("hbs");
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// SET THE TEMPLATE ENGINE
app.set("view engine", "hbs");

app.set("views", __dirname + "/views");

// REGISTER THE PARTIALS FOLDER
hbs.registerPartials(__dirname + "/views/partials");


//MIDDLEWARE
// SET THE FOLDER FOR PUBLIC FILES
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// ROUTES
// localhost:3000/users/ross-u/webdev/barcelona
app.get("/users/:username/webdev/:city", (req, res, next) => {
  res.send(req.params);
  // req.params.username = 'ross-u'
  // req.params.city = 'barcelona'
});

app.get("/books/:bookId", (req, res) => {
  res.send(req.params);
  const bookId = req.params.bookId;
});

app.get("/search", (req, res) => {
  res.send(req.query);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/email", (req, res) => {
//   console.log("req.path ->", req.path);
//   console.log("req.query ->", req.query);
//   console.log("req.params ->", req.params);
//   console.log("req.method ->", req.method);
//   console.log("req.headers ->", req.headers);

  res.send(req.query);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});