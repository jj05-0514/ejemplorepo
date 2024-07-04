const express = require('express');
const mongoose=require('mongoose')
const app = express()
const port = 3000
const uriBD="mongodb://localhost:27017/BaseDatos";


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
  const nom=req.body.nombre;
  const corr=req.body.email;
  const contr=req.body.password;
  cont=cont+1;
  console.log(`Hola ${nom}! tu correo es ${corr} y tu contraseña es ${contr}`)
  const persona1={id:cont,nombre:nom,correo:corr,contrasena:contr};
  personas.push(persona1);
  res.send(`Hola ${nom}! tu correo es ${corr} y tu contraseña es ${contr}`);  
})



//****************** */
// CRUD para un arreglo
const personas=[{id:1,nombre:"juan",correo:"juan@email.com",contrasena:"123456"}];
let cont=1;

app.get('/api/personas',(req,res)=>
{console.log(personas);
  res.json(personas);
});

app.get('/api/personas/usuario',(req,res)=>
  {const id=req.body.id;
    console.log("este es el identificador",id);
    const persona=persona.find((persona)=>persona.id==id);
    if(!persona){
      res.status(404).send('No hay registro')
    }
    else{console.log(persona);
      res.json(persona);
    }
    
  });

/************************************* */
//conexion a la base de datos

const connectDB = async () => {
  try {
      await mongoose.connect('mongodb://localhost:27017/BaseDatos')
          .then(() => console.log('Conexión a MongoDB establecida'))            
  }
  catch(err) {
      console.error('Error al conectar a MongoDB:', err);
  }
}

connectDB();




//*********************************** */
//esquema de base de datos
const Schema= mongoose.Schema;
const userSchema= new Schema({
  nombre:String,
  correo:String,
  contrasena:String,
});
const User=mongoose.model('User',userSchema);


/************************************ */
//crear un usuario

app.post('/crearUsuario',validacionFormulario,async (req,res)=>{
  const nombre= req.body.nombre;
  const correo=req.body.email;
  const contrasena = req.body.password;
  const user=new User({nombre:nombre, correo: correo, contrasena:contrasena});
  try{
  await user.save()
  res.send('Usuario creado');
  console.log('usuario creado');
  }
  catch(err){
  res.send('Error al crear usuario',err);
  }
})

/************************************* */
//Obtener todos los usuarios

app.get('/usuarios',async (req,res)=>{
 try{ 
  const users= await User.find();
    res.send(users);
    console.log(users);
 }
 catch (err){
  res.send('Error al obtener usuarios',err);
 }
})
/******************************* */
//obtener un usuario por nombre
app.post('/usuario/nombre', async (req,res)=>{
  const nomb=req.body.nombre;
  console.log(nomb);
  try{
  const user =await User.findOne({nombre:nomb});
  if(!user){
    res.send('Usuario no encontrado');
  }else{
    res.send(user);
    console.log(user);
  }}
  catch(err){
  res.send('Error al obtener usuario',err);
  }
})

//********************************** */
//actualizar un usuario por nombre 
app.post('/usuario/actualizacionNombre',async(req,res)=>{
  const nomb=req.body.nombre;
  const nuevonombre=req.body.nuevonombre;
  const nuevocorreo=req.body.nuevoemail;
  const nuevacontrasena=req.body.nuevopassword;
  try{
    const userUpdate=await User.findOneAndUpdate({nombre:nomb},{nombre:nuevonombre,correo:nuevocorreo,contrasena:nuevacontrasena},{new:true,runValidators:true});
    if(!userUpdate){
      res.send('Usuario no actualizado');
    }else{
      res.send(userUpdate);
      console.log('Usuario actualizado');
    }
  }
  catch (err) {
    res.send('Error al actualizar usuario', err);
  }
})
/*********************************** */
//Eliminar un Usuario por nombre
app.post('/usuario/eliminar',async (req,res)=>{
  const nomb=req.body.nombre;
  try{
    const user=awaitUser.findOneAndUpdate({nombre:nomb});
    if(!user){
      res.send('usuariro no encontrado');
    }else {
      res.send('Usuario eliminado');
      console.log('Usuario eliminado');
    }
  }
  catch (err) {
    res.send('Error al eliminar usuario', err);
  }
})
  


//leer lo q imprimimos en el servidor
app.listen(port, () =>{
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
});

