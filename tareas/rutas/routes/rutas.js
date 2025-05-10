const express = require('express');
const router = express.Router();
const path = require('path');

// Ruta principal
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

// Ruta /id
router.get("/id", (req, res) => {
    res.sendFile(path.join(__dirname, "../id.html"));
});

// Ruta /ruta3
router.get("/ruta3", (req, res) => {
    res.sendFile(path.join(__dirname, "../ruta3.html"));
});

// Ruta /ruta4
router.get("/ruta4", (req, res) => {
    res.sendFile(path.join(__dirname, "../ruta4.html"));
});

module.exports = router;
