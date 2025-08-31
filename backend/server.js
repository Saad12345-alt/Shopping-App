const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Product = require('./product')

const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/details");

app.get('/products', async (req, res) => {
  try {
    const search = req.query.search || '';
    const sortorder = req.query.sort || ''; // default: no sorting
    const regex = new RegExp(search, 'i');

    // Build query
    let query = {};
    if (search) {
      query.name = regex;
    }

    // Build sort object
    let sortObj = {};
    if (sortorder === 'low-high') {
      sortObj.price = 1; // ascending
    } else if (sortorder === 'high-low') {
      sortObj.price = -1; // descending
    }
    // If "all", leave sortObj empty — this means no sorting

    const products = await Product.find(query).sort(sortObj);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id; // get id from URL
    const product = await Product.findById(productId); // fetch from MongoDB

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000,()=> console.log("server running on port 5000"))
