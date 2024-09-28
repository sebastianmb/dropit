const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  pickupDateTime: { type: Date, required: true }, // Fecha y hora de recogida
  pickupLocation: { type: String, required: true }, // Origen
  waypoints: [{ type: String, required: true }], // Lista de ubicaciones intermedias
  deliveryDestination: { type: String, required: true }, // Destino
  recipientName: { type: String, required: true }, // Nombre del destinatario
  recipientPhone: { type: String, required: true }, // Teléfono del destinatario
  recipientEmail: { type: String, required: true }, // Email del destinatario
  courierInstructions: { type: String }, // Instrucciones para el mensajero
  packageSize: { type: String, required: true }, // Tamaño del paquete
  declaredValue: { type: Number, required: true }, // Valor declarado
  packageWeight: { type: Number, required: true }, // Peso del paquete
  user: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } // Fecha de creación
});

module.exports = mongoose.model('Order', OrderSchema);

