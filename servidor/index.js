const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
const port = 3000


//************************************************************ */
//        middleware 
app.use(express.static(__dirname + '/paginas'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//******************************************* */
//        middleware de rutas
app.use((req, res, next) => {
  console.log('Middleware de rutas');
  next();
})



//************************************************************ */
//  rutas de api
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}!`);
})

app.post('/formulario', validacionFormulario, (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.email;
  const contrasena = req.body.password;
  console.log(`Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}`)
  res.send(`Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}`);
})





connectDB();










//*************************************** */
//      Ruta para usuario creado



app.listen(port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})

