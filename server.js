const express = require('express');
const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');

// Ruta principal que renderiza la vista
app.get('/', (req, res) => {
  res.render('index', { mensaje: '¡Hola Mundo desde EJS y Node.js!' });
});

// NUEVA RUTA DE ENSAYO: Módulo de prueba para Miguel y Bryan
app.get('/prueba', (req, res) => {
  res.send('<h1>Ruta de prueba funcionando al 100% - Equipo listo para el éxito</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});