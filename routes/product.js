const { Router } = require('express');
const { Product } = require('../models');
const sampleProducts = require('../data/product.json');
const router = Router();

router.get('/', async (req, res, next) => {
  const product = await Product.insertMany(sampleProducts);
  const 상품 = await Product.find({});
  console.log(상품);
  res.json(상품)
});

module.exports = router;
