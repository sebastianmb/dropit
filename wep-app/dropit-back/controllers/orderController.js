const Order = require('../models/Order');





// Crear un nuevo pedido
const createOrder = async (req, res) => {
    const { pickupDateTime, pickupLocation, waypoints, deliveryDestination, recipientName, recipientPhone, recipientEmail, courierInstructions, packageSize, declaredValue, packageWeight,user } = req.body;
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
            user
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: error.message });
    }
};





module.exports = { createOrder};