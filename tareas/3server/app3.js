// Importar express
const express = require('express');

// Crear una instancia
const app = express();

// Definir el puerto
const port = 7008;

// Configuración de ruta GET para la raíz ('/')
app.get('/', (req, res) => {
    res.send('Hola mundo desde el puerto ' + port);
});

// Iniciar el servidor y escuchar en el puerto
app.listen(port, () => {
    console.log(`Servidor escuchando en http://127.0.0.1:${port}`);
});