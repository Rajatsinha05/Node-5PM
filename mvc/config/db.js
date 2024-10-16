const { default: mongoose } = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  await mongoose.connect(process.env.DB_URL);
  console.log("mongodb connection");
};

module.exports = dbConnection;
