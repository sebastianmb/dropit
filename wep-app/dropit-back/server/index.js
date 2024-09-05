// server/index.js

const express = require("express");
const connectDB = require('../config/db');



const app = express();
require('dotenv').config();

// Conectar a la base de datos
connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});