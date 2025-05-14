const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

const app = express();
const port = 6372;

// Sirve toda la carpeta public (HTML, CSS, JS, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// Usar rutas definidas 
app.use("/", routes);

// Levantar servidor
app.listen(port, () => {
    console.log(`Servidor en: http://127.0.0.1:${port}`);
});
