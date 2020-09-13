const path = require("path");

const express = require("express");
const adminData = require("./admin");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  let prods = adminData.title;
  console.log(prods)
  res.render("shop", {title:prods ,mainTitle: "My Shop" });
});

module.exports = router;
