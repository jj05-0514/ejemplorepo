const express = require('express');
const router = express.Router();
const vistas=require('../controladores/controladorPaginas.js')


router.get('/', (req, res) => {
    res.send('Hola mundo!')
});
router.get('/home',vistas.pagHome);
router.get('/contacto',vistas.pagContacto);
router.get('/servicios',vistas.pagServicios);
router.get('/nosotros',vistas.pagNosotros);
router.get('/error',vistas.pagError);
router.get('/usuarioCreado',vistas.pagUsuarioCreado);

module.exports = router;