const express = require('express');
const rutas = require("./routes/rutas")
const app = express();

const port = 5023;

app.use("/", rutas);

app.listen(port, ()=>{
    console.log (`http://127.0.0.1:${port}`);
});
