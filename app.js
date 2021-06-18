const express = require('express');

const app = express();

const rutausuario = require('./api/rutas/users');

app.use('/users', rutausuario);

module.exports = app;