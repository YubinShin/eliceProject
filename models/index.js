const mongoose = require('mongoose');
const ProductSchema = require('./schema/product');

exports.Product = mongoose.model("Product", ProductSchema);