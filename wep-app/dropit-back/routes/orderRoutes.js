const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');



const clerkMiddleware = ClerkExpressRequireAuth({
  apiKey: process.env.CLERK_API_KEY, // Clave pública
  secretKey: process.env.CLERK_SECRET_KEY // Clave secreta
});
const customClerkMiddleware = (req, res, next) => {
  clerkMiddleware(req, res, () => {
      
      console.log("User object after Clerk middleware:", req.auth); // Verifica el objeto de usuario
      next();
  });
};
router.route('/')
    .post(createOrder)
    .get(customClerkMiddleware, getOrders);




module.exports = router;