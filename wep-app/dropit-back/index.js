const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const axios = require('axios'); // Si decides usar axios
const app = express();
const PORT = 3001; // El puerto que desees


// Configura CORS para permitir solicitudes desde 'http://localhost:5173'
app.use(cors({
  origin: 'http://localhost:5173',
}));
// Ruta para obtener sugerencias de búsqueda desde Mapbox
app.get('/api/mapbox-suggestions', async (req, res) => {
  try {
    const searchQuery = req.query.q; // Extrae el valor del parámetro "q"
    const accessToken = 'pk.eyJ1IjoiY3Zhczg4IiwiYSI6ImNsd3dib2t0NTExNmIyam9sengyeWdwcncifQ.fS0NzZmL-920aprwyKoKmA'; // Reemplaza con tu token real
    
    const response = await axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchQuery}&language=en&limit=6&country=co&proximity=-73.990593,40.740121&session_token=010f6c2b-6591-4a11-88fe-d80d22a0ee8c&access_token=${accessToken}`);
                                    
    return res.json(response.data);
  } catch (error) {
    console.error('Error al obtener sugerencias de Mapbox:', error.message);
    res.status(500).json({ error: 'Error al obtener sugerencias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

