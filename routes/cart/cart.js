const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");
const store = require("store2");

router.get("/cart", function (req, res) {
  let storeProducts = store.get("storeProducts");
  let totalPrice = store.get("totalPrice");
  res.render("cart.hbs", {
    locals: { title: "Cart" },
    storeProducts: storeProducts,
    totalPrice: totalPrice,
  });
});

module.exports = router;
