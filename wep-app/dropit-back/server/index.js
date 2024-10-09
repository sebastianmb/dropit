// server/index.js

const express = require("express");
const app = express();
const cors = require('cors');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');
const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');








app.use(express.json()); // Middleware para parsear JSON
const clerkMiddleware = ClerkExpressWithAuth({
  secretKey: process.env.VITE_CLERK_PUBLISHABLE_KEY
});

require('dotenv').config();

// Conectar a la base de datos
connectDB();

app.use(cors());
// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);


// Use the lax middleware that returns an empty auth object when unauthenticated
app.get(
  '/panel',
  clerkMiddleware({
    // Add options here
    // See the Middleware options section for more details
  }),
  (req, res) => {
    res.json(req.auth)
  },
)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(401).send('Unauthenticated!')
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});