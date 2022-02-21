const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");
const store = require("store2");

router.get("/cart", function (req, res) {
  let storeProducts = store.get("storeProducts");
  res.render("cart.hbs", {
    locals: { title: "Cart" },
    storeProducts: storeProducts,
  });
});

module.exports = router;
