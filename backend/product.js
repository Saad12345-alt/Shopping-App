const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    stock: Number,
    totalnumberofitems: Number,
    price: Number
})

const Product = mongoose.model("Product", productSchema, "productSchema");

module.exports = Product;