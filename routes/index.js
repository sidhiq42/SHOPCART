var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      productname: "nike",
      category: "shoes",
      quantity: 10,
      prize: 2000,
      description: "this shoes are the most rated shoes ever",
      image: "images/image1.jpg",
    },
  ];
  res.render("index", { products });
});

module.exports = router;
