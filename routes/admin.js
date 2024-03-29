var express = require('express');
var router = express.Router();
const producthelpers=require('../helper/product-helper')
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render("admin/admin-home",{admin:true});
});

router.get('/view-product',(req,res)=>{
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
  res.render("admin/view-product",{products,admin:true,})
})
router.get('/add-product',(req,res)=>{
  res.render('admin/add-product',{admin:true})
})
router.post('/add-product',(req,res)=>{
  const product=req.body
  const image=req.files.image
  console.log(product,image)
  producthelpers.addProduct(req.body,(result)=>{
    res.render('admin/add-product')
  })
})
module.exports = router;
