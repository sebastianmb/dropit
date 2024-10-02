const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  name: String,
  label: String
});

const OrderSchema = new mongoose.Schema({
  pickupDateTime: Date, // Fecha y hora de recogida
  pickupLocation: locationSchema, // Origen
  waypoints: [locationSchema], // Lista de ubicaciones intermedias
  deliveryDestination: locationSchema, // Destino
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

