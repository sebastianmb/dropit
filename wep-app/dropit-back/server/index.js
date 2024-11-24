const express = require("express");
const { Server } = require('socket.io');
const http = require('http');




const cors = require('cors');
const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Configura los dominios permitidos
    methods: ["GET", "POST"],
  },
});

// Conectar a la base de datos
connectDB();

// Middleware para procesar JSON
app.use(express.json()); // Coloca este middleware antes de las rutas
app.use(cors());

// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// WebSockets
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  // Escuchar eventos personalizados (ejemplo)
  socket.on('nuevoPedido', (data) => {
    console.log('Evento nuevoPedido recibido:', data);

    // Emitir una actualización a todos los clientes
    io.emit('actualizarPedidos', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});



// Inicialización del servidor
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
