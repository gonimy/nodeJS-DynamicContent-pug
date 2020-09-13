const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();
const title = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.render('add-product')
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  title.push(req.body.title);
  res.redirect("/");
});

exports.router = router;
exports.title = title;
