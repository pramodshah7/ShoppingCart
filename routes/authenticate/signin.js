const express = require("express");
const router = express.Router();

router.get("/signin", function (req, res) {
  res.render("signin.hbs", { locals: { title: "Sign In" } });
});

module.exports = router;
