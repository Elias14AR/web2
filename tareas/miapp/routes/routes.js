const express = require('express');
const path = require('path');

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Ruta para registro
router.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registros.html"));
});

module.exports = router;
