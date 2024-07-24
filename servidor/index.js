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
<<<<<<< HEAD
//        middleware para manejo de errores
app.use((req, res) => {
  res.status(404).send('Pagina no encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});
=======
//  rutRas de api
app.get('/', (req, res) => {
  res.send('Hola mundo!')
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/paginas/index.html')
})
app.get('/saludo/:nombre', (req, res) => {
  const nombre=req.params.nombre;
  res.send(`Hola ${nombre}!`);
})

app.post('/formulario',validacionFormulario,(req,res)=>{
  const nom=req.body.nombre;
  const corr=req.body.email;
  const contr=req.body.password;
  cont=cont+1;
  console.log(`Hola ${nom}! tu correo es ${corr} y tu contraseña es ${contr}`)
  const persona1={id:cont,nombre:nom,correo:corr,contransena:contr};
  personas.push(persona1);
  res.send(`Hola ${nom}! tu correo es ${corr} y tu contraseña es ${contr}`);  
})
>>>>>>> 26cc057864e73bc9151e6b929e47b0dcc1725239

//***************************************************** */
//  CRUD para un arreglo
const personas=[{id:1, nombre:"juan",correo:"juan@mail.com",contrasena:"123456"}];
let cont=1;

app.get('/api/personas',(req,res)=>{
  console.log(personas);
  res.json(personas);
});

app.post('/api/personas/usuario',(req,res)=>{
  const id=req.body.id;
  console.log("este es el identificador",id);
  const persona=personas.find((persona)=>persona.id==id);
  if(!persona){
    res.status(404).send('No se encontro la persona');
  }
  else{
  console.log(persona);
  res.json(persona);
  }
});



<<<<<<< HEAD
/*********************************************** */
// conexion a base datos
connectDB();

app.listen(port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})
=======



app.listen(port, () => {
    console.log(`servidor activo escuchando en el puerto http://localhost:${port}`)

})

>>>>>>> 26cc057864e73bc9151e6b929e47b0dcc1725239
