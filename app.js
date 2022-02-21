const express = require("express");
const path = require("path");
const { engine } = require("express-handlebars");
const Handlebars = require("handlebars");
const store = require("store2");
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

// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

const products = require("./data/product.json");
const categories = require("./data/category.json");
const banners = require("./data/banner.json");

//home route
app.get("/", function (req, res) {
  let storeProducts = store.get("storeProducts");
  res.render("home.hbs", {
    locals: { title: "Welcome" },
    categories: categories,
    banners: banners,
    storeProducts: storeProducts,
  });
});

//routes
app.use("/", require("./routes/authenticate/signin"));
app.use("/", require("./routes/authenticate/signup"));
app.use("/", require("./routes/product/product"));
app.use("/", require("./routes/cart/cart"));

Handlebars.registerHelper("if_even", function (conditional, options) {
  if (conditional % 2 == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log("Listening on port : " + PORT);
});
