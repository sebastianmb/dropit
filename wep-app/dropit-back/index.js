/*
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3001;

// Ruta para obtener sugerencias de búsqueda desde Mapbox
app.get('/api/mapbox-suggestions', async (req, res) => {
  try {
    const BASE_URL = 'https://api.mapbox.com/search/searchbox/v1/suggest';
    const { searchParams } = new URL(req.url); // Corrige 'request' a 'req'
    const searchText = searchParams.get('q');

    // Corrige la URL de la solicitud
    const response = await axios.get(`${BASE_URL}?q=${searchText}&language=en&limit=6&country=US&access_token=pk.eyJ1IjoiY3Zhczg4IiwiYSI6ImNsd3dib2t0NTExNmIyam9sengyeWdwcncifQ.fS0NzZmL-920aprwyKoKmA`);
    // Reemplaza '...' con tu token real de acceso a Mapbox

    return res.json(response.data); // Devuelve los datos de la respuesta
  } catch (error) {
    console.error('Error al obtener sugerencias de Mapbox:', error.message);
    res.status(500).json({ error: 'Error al obtener sugerencias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
*/

const express = require('express');
const axios = require('axios'); // Si decides usar axios
const app = express();
const PORT = 3001; // El puerto que desees

// Ruta para obtener sugerencias de búsqueda desde Mapbox
app.get('/api/mapbox-suggestions', async (req, res) => {
  try {
    const searchQuery = req.query.q; // Extrae el valor del parámetro "q"
    const accessToken = 'pk.eyJ1IjoiY3Zhczg4IiwiYSI6ImNsd3dib2t0NTExNmIyam9sengyeWdwcncifQ.fS0NzZmL-920aprwyKoKmA'; // Reemplaza con tu token real
    
    const response = await axios.get(`https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchQuery}&language=en&session_token=010f6c2b-6591-4a11-88fe-d80d22a0ee8c&access_token=${accessToken}`);

    return res.json(response.data);
  } catch (error) {
    console.error('Error al obtener sugerencias de Mapbox:', error.message);
    res.status(500).json({ error: 'Error al obtener sugerencias' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

