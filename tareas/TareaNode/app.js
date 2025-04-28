const serverHTTP = require('http');

// Definir puerto
const port = 3059;

// Crear el servidor
const server = serverHTTP.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.end('Hola desde un server en node con el modulo de http node');
});

server.listen(port, () => {
    console.log(`Servidor funcional por la url: http://127.0.0.1:${port}`);
});
