const express = require('express')
const mongoose=require('mongoose')
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



/***************************************** */
// conexion a la base de datos
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





//************************************************************ */
// esquema de base de datos
const Schema = mongoose.Schema;
const userSchema = new Schema({
  nombre: String,
  correo: String,
  contrasena: String
});

const User = mongoose.model('User', userSchema);


/*************************************************** */
// Crear un usuario
app.post('/crearUsuario', validacionFormulario,async (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.email;
  const contrasena = req.body.password;
  const user = new User({ nombre: nombre, correo: correo, contrasena: contrasena });
  await user.save()
  res.send('Usuario creado');
})

//************************************************************ */
// Obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  const users = await User.find();
  res.send(users);
})

//************************************************************ */
// Obtener un usuario por nombre
app.post('/usuario/nombre', async (req, res) => {
  const nomb = req.body.nombre;
  console.log(nomb);
  const user = await User.findOne({nombre:nomb});
  if(!user){
    res.send('Usuario no encontrado');
  }else{
    res.send(user);
    console.log(user);
  }  
})


app.listen (port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})

