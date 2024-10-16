const express = require("express");
const dbConnection = require("./config/db");
const userRouter = require("./routes/user.route");
const app = express();

app.use(express.json());

app.use("/",userRouter)

app.listen(8090, () => {
  console.log("listening on http://localhost:8090");
  dbConnection()
});
