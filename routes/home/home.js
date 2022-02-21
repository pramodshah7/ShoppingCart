const express = require("express");
const router = express.Router();

const products = require("../../data/product.json");
const categories = require("../../data/category.json");
const banners = require("../../data/banner.json");
router.get("/signin", (req, res) => {
  res.render("signin.hbs");
});

module.exports = router;
