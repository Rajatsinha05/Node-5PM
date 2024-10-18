const express = require("express");
const dbConnection = require("./config/db");
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");
const app = express();

app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(8090, () => {
  console.log("listening on http://localhost:8090");
  dbConnection();
});
