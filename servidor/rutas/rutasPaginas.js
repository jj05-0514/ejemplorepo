const express = require('express');
const rutas = express.Router();
const paginas=require('../controladores/controladorPaginas.js')


rutas.get('/', (req, res) => {
    res.send('Hola mundo!')
});

rutas.get('/home',paginas.pagHome);
rutas.get('/contacto',paginas.pagContacto);
rutas.get('/servicios',paginas.pagServicios);
rutas.get('/nosotros',paginas.pagNosotros);
rutas.get('/error',paginas.pagError);
rutas.get('/usuarioCreado',paginas.pagUsuarioCreado);

module.exports = rutas;