const express = require('express');
const bodyParser = require('body-parser');
const rutas = require('./routes/routes');
const app = express();

// Archivos estáticos (CSS, imágenes, etc.)
app.use(express.static('public'));

// Middleware para formularios
app.use(bodyParser.urlencoded({ extended: false }));

// Motor de vistas EJS
app.set('view engine', 'ejs');

// Uso de rutas externas
app.use('/', rutas);

// Puerto
const port = 3008;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});
