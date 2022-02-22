const express = require("express");
const router = express.Router();
const store = require("store2");

router.get("/register", function (req, res) {
  let storeProducts = store.get("storeProducts");
  let totalPrice = store.get("totalPrice");
  res.render("register.hbs", {
    locals: { title: "Register" },
    storeProducts: storeProducts,
    totalPrice: totalPrice,
  });
});

module.exports = router;
