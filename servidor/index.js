const express = require('express')
const app = express()
const port = 3000


//************************************************************ */
//        middleware 
app.use(express.static(__dirname + '/paginas'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());



//******************************************* */
//        middleware de rutas
app.use((req, res, next) => {
  console.log('Middleware de rutas');
  next();
})

const validacionFormulario=(req,res,next)=>{
  const nombre=req.body.nombre;
  const correo=req.body.email;
  const contrasena=req.body.password;
  if(!nombre){
    res.send('falto el nombre');
  }else if(!correo){
    res.send('falto el correo');
  }else if(!contrasena){
    res.send('falto la contraseña');
  }
  else{
    next();
  }
}

//************************************************************ */
//  rutas de api
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
  const nombre=req.body.nombre;
  const correo=req.body.email;
  const contrasena=req.body.password;
  console.log(`Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}`)
  res.send(`Hola ${nombre}! tu correo es ${correo} y tu contraseña es ${contrasena}`);  
})



app.listen (port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})

app.get('/', (req, res)=> {
    res.send('hola mundo!')
})

app.listen(port, () => {
    console.log(`servidor activo escuchando en el puerto http://localhost:${port}`)

})