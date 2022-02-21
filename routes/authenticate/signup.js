const express = require("express");
const router = express.Router();

router.get("/register", function (req, res) {
  res.render("register.hbs", { locals: { title: "Register" } });
});

module.exports = router;
