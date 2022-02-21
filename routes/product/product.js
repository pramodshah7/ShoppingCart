const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");

router.get("/product", function (req, res) {
  res.render("product.hbs", {
    locals: { title: "Product" },
    products: products,
    categories: categories,
  });
});

router.get("/product/:category", function (req, res) {
  let category = req.params.category;
  let productCategory = products.filter(function (item) {
    return item.category == category;
  });
  res.render("product.hbs", {
    locals: { title: "Product" },
    products: productCategory,
    categories: categories,
  });
});

module.exports = router;
