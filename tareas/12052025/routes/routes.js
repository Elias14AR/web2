const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión a MySQL (usa los mismos datos de app.js)
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar DB en rutas:', err);
    } else {
        console.log('Conectado desde routes.js');
    }
});

// Ruta principal
router.get('/', (req, res) => {
    const consulta = 'SELECT * FROM users';
    db.query(consulta, (err, results) => {
        if (err) return res.send('Error al recuperar usuarios');
        res.render('index', { users: results });
    });
});

// Agregar usuario
router.post('/add', (req, res) => {
    const { name, email } = req.body;
    const consulta = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(consulta, [name, email], err => {
        if (err) return res.send('Error al agregar');
        res.redirect('/');
    });
});

// Formulario de edición
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'SELECT * FROM users WHERE id = ?';
    db.query(consulta, [id], (err, results) => {
        if (err) return res.send('Error al buscar');
        res.render('edit', { user: results[0] });
    });
});

// Actualizar usuario
router.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const consulta = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(consulta, [name, email, id], err => {
        if (err) return res.send('Error al actualizar');
        res.redirect('/');
    });
});

// Eliminar usuario
router.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const consulta = 'DELETE FROM users WHERE id = ?';
    db.query(consulta, [id], err => {
        if (err) return res.send('Error al eliminar');
        res.redirect('/');
    });
});

module.exports = router;
