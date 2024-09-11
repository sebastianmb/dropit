const Order = require('../models/Order');

// Crear un nuevo pedido
const createOrder = async (req, res) => {
    const { pickupDateTime, pickupLocation, waypoints, deliveryDestination, recipientName, recipientPhone, recipientEmail, courierInstructions, packageSize, declaredValue, packageWeight } = req.body;
    try {
        const order = new Order({
            pickupDateTime,
            pickupLocation,
            waypoints,
            deliveryDestination,
            recipientName,
            recipientPhone,
            recipientEmail,
            courierInstructions,
            packageSize,
            declaredValue,
            packageWeight,
            user: req.user._id
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





module.exports = { createOrder, getOrders, getOrderById, updateOrder, deleteOrder };