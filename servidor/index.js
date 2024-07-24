const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
const port = 3000
const rutasPaginas = require('./rutas/rutasPaginas');
const connectDB = require('./conexiones/conexionBD');
const BaseDatos = require('./rutas/rutasBD');



//************************************************************ */
//        middleware 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/*********************************************** */
// enrutamiento para servir paginas
app.use('/', rutasPaginas);

/********************************************* */
// enrutamiento para operaciones con la base de datos
app.use('/bd', BaseDatos);

//************************************************************ */
//        middleware para manejo de errores
app.use((req, res) => {
  res.status(404).send('Pagina no encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});


/*********************************************** */
// conexion a base datos
connectDB();

app.listen(port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})