const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder } = require('../controllers/orderController');


router.route('/')
    .post(createOrder);
    



module.exports = router;