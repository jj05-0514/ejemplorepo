const express = require('express');
const router = express.Router();
const BaseDatos=require('./controladores/controladorBD.js')

router.get('/usuarios', BaseDatos.obtenerUsuarios);
router.post('/usuarios', BaseDatos.crearUsuario);
router.post('/usuarios/nombre', BaseDatos.obtenerUsuarioNombre);
router.put('/usuarios/nombre', BaseDatos.actualizarUsuarioNombre);
router.delete('/usuarios/nombre', BaseDatos.eliminarUsuarioNombre);

