const { Router } = require("express");
const {
  createProduct,
  getProducts,
  getProductsByUserId,
} = require("../controller/product.controller");
const productRouter = Router();
productRouter.post("/", createProduct);
productRouter.get("/", getProducts);
productRouter.get("/user/:userId", getProductsByUserId);

module.exports = productRouter;
