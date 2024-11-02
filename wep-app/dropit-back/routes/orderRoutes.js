const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');
const requireAuth = require('../middleware/requireAuth'); // Importa el middleware



// Define las rutas con el middleware de autenticación
router.route('/')
    .post(createOrder) // Solo permite crear si está autenticado
    .get(requireAuth, getOrders);    // Solo permite obtener si está autenticado

// Exporta el enrutador
module.exports = router;
