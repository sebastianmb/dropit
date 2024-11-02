const Order = require('../models/Order');





// Crear un nuevo pedido
const createOrder = async (req, res) => {
    console.log('Request Body:', req.body);
    const { pickupDateTime, pickupLocation, waypoints, deliveryDestination, recipientName, recipientPhone, recipientEmail, courierInstructions, packageSize, declaredValue, packageWeight,user,precioEnvio,status } = req.body;
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
            user,
            precioEnvio, // Añadido precio de envío
            status // Añadido estado del pedido
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        console.log("User ID:", req.user); // Muestra el ID del usuario autenticado
        const orders = await Order.find({ user: req.user }); // Filtra los pedidos por usuario autenticado
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error al obtener los pedidos' });
    }
};




module.exports = { createOrder,getOrders};