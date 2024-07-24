const express = require('express');
const rutas = express.Router();
const BaseDatos=require('../controladores/controladorBD.js')
const validacion=require('../intermediarias/validaciones');

rutas.get('/usuarios', BaseDatos.obtenerUsuarios);
rutas.post('/usuarios', validacion,BaseDatos.crearUsuario);
rutas.post('/usuarios/nombre', BaseDatos.obtenerUsuarioNombre);
rutas.put('/usuarios/nombre', BaseDatos.actualizarUsuarioNombre);
rutas.delete('/usuarios/nombre', BaseDatos.eliminarUsuarioNombre);

module.exports = rutas;
