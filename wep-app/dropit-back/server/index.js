const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');
require('dotenv').config();

// Conectar a la base de datos
connectDB();

// Middleware para procesar JSON
app.use(express.json()); // Coloca este middleware antes de las rutas
app.use(cors());

// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
