// server/index.js

const express = require("express");
const app = express();
const cors = require('cors');

const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');










require('dotenv').config();

// Conectar a la base de datos
connectDB();

app.use(cors());
// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);


// Use the lax middleware that returns an empty auth object when unauthenticated
app.get(
  '/panel',
  (req, res, next) => {
    clerkMiddleware({
      // Opciones del middleware
    })(req, res, next); // Asegurando que clerkMiddleware funcione como middleware de Express
  },
  (req, res) => {
    res.json(req.auth); // Respondiendo con el objeto de autenticación
  }
);


app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});