const express = require('express');
const path = require('path');

const router = express.Router();

// Ruta principal (menú)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Ruta calculadora (opcional si quieres accesos bonitos)
router.get("/calculadora", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/calculadora.html"));
});

// Ruta generador QR (opcional si quieres accesos bonitos)
router.get("/qr", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/qr.html"));
});

module.exports = router;