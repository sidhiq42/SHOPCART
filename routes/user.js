var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let products = [
    {
      productname: "Nike",
      category: "Shoes",
      quantity: 10,
      prize: 2000,
      description: "This shoes are the most rated shoes for ever",
      image: "images/nike.jpg",
    },
    {
      productname: "Adidas",
      category: "shoes",
      quantity: 10,
      prize: 2000,
      description: "this shoes are the most rated shoes ever",
      image: "images/adidas.jpg",
    },
    {
      productname: "Puma",
      category: "shoes",
      quantity: 10,
      prize: 2000,
      description: "this shoes are the most rated shoes ever",
      image: "images/puma.jpg",
    },
    {
      productname: "Snikker",
      category: "shoes",
      quantity: 10,
      prize: 2000,
      description: "this shoes are the most rated shoes ever",
      image: "images/snikker.jpg",
    },
  ];
  res.render("index", { products,admin:false });
});

module.exports = router;
