const express = require("express");
const router = express.Router();
const store = require("store2");

router.get("/signin", function (req, res) {
  let storeProducts = store.get("storeProducts");
  res.render("signin.hbs", {
    locals: { title: "Sign In" },
    storeProducts: storeProducts,
  });
});

module.exports = router;
