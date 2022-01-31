const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
app = express();

// view engine setup

app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  engine({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home.hbs", { locals: { title: "Welcome" } });
});

app.get("/signin", function (req, res) {
  res.render("signin.hbs", { locals: { title: "Sign In" } });
});

app.get("/register", function (req, res) {
  res.render("register.hbs", { locals: { title: "Register" } });
});

app.get("/product", function (req, res) {
  res.render("product.hbs", { locals: { title: "Product" } });
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("Listening on port : " + PORT);
});
