const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    // enum: ["벤츠", "현대", "기아"],
    required: true,
  }
});

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  maker: { type: String, required: true },
  category: {
    type: String, required: true
    // type: [CategorySchema],
    // // validate: (v) => Array.isArray(v) && v.length > 0,
    // required: true,
  },
  description: { type: String, required: true }
},
  { timestamps: true, collection: "Product" }
);

module.exports = ProductSchema;


// const Product = mongoose.model("Product", ProductSchema);

// async function main() {
//   await mongoose.connect(process.env.DB_URL);
//   await Product.deleteMany({});
//   await Product.insertMany(sampleProducts);
//   const products = await Product.find({});
//   console.log(products);
// }

// main();