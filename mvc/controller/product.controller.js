const Product = require("../model/product.model");

const createProduct = async (req, res) => {
  let data = await Product.create(req.body);
  res.send(data);
};

const getProducts = async (req, res) => {
  let data = await Product.find();
  res.send(data);
};

// find by user id

const getProductsByUserId = async (req, res) => {
  let { userId } = req.params;
  let data = await Product.find({ userId });
  res.send(data);
};

module.exports ={createProduct, getProducts, getProductsByUserId}