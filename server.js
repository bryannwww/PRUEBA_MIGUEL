const express = require('express');
const app = express();
const PORT = 3000;

// Configurar EJS
app.set('view engine', 'ejs');

// Ruta principal que renderiza la vista
app.get('/', (req, res) => {
  res.render('index', { mensaje: '¡Hola Mundo desde EJS y Node.js!' });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});