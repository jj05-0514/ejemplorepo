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






app.listen(port, () => {
    console.log(`servidor activo escuchando en el puerto http://localhost:${port}`)

})

