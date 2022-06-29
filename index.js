const express = require('express');
const connectDB = require("./db");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () =>
  console.log(`Server Connected to port ${port}`)
)