const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");

router.get("/cart", function (req, res) {
  res.render("cart.hbs", {
    locals: { title: "Cart" },
  });
});

module.exports = router;
