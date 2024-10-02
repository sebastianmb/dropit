// server/index.js

const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');








app.use(express.json()); // Middleware para parsear JSON

require('dotenv').config();

// Conectar a la base de datos
connectDB();

app.use(cors());
// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});