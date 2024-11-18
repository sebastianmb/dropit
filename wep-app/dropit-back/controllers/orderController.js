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

const deleteOrder = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del pedido desde los parámetros de la URL
    try {
        // Busca el pedido por ID y asegura que pertenece al usuario autenticado
        const order = await Order.findOneAndDelete({ _id: id, user: req.user });
        
        if (!order) {
            return res.status(404).json({ message: 'Pedido no encontrado o no autorizado para eliminarlo' });
        }
        
        res.status(200).json({ message: 'Pedido eliminado con éxito', order });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error al eliminar el pedido' });
    }
};




module.exports = { createOrder,getOrders, deleteOrder};