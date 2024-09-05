const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    pickupDateTime: { type: Date, required: true },
    pickupLocation: { type: String, required: true },
    waypoints:{type: String, required: true},
    deliveryDestination: { type: String, required: true },
    recipientName: { type: String, required: true },
    recipientPhone: { type: String, required: true },
    recipientEmail: { type: String, required: true },
    courierInstructions: { type: String },
    packageSize: { type: String, required: true },
    declaredValue: { type: Number, required: true },
    packageWeight: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
