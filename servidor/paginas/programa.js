async function conexion(){
    try{
        const respuesta= await axios.get('/saludo/juan');
        document.getElementById('respuesta').innerHTML=respuesta.data;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}


//********************************************** */
async function llamadaPagina(){
    try{
        const respuesta= await axios.get('/home');       
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

//******************************************** */
//  crear registro nuevo
async function crearRegistro(){
    const nomb=document.getElementById('nombre').value;
    console.log(nomb);
    const correo=document.getElementById('email').value;
    const contrasena=document.getElementById('password').value;
    try{
        const respuesta= await axios.post('/crearUsuario',{
            nombre:nomb,
            email:correo,
            password:contrasena })
        document.getElementById('respuesta').innerHTML=respuesta.data;
        if(respuesta.data){
            window.location.href = '/usuarioCreado';
        }
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('boton').addEventListener('click',crearRegistro);

//***************************************** */
// obtener todos los usuarios

async function cargarDatos() {
        try{
            const respuesta= await axios.get('/usuarios')        
        if (respuesta.data) {           
          const userList = document.getElementById('listaUsuarios');
          userList.innerHTML = ''; 
            respuesta.data.forEach(user => {
            const option = document.createElement('option');
            option.value = `${user.nombre}`;
            option.textContent = `${user.nombre}`;
            userList.appendChild(option);
          });
        }
    }
    catch(error){
        console.log(error); 
      }      
  }
  cargarDatos();

//***************************************** */
// obtener un usuario por nombre
async function buscarUsuario(){
    const nomb = document.getElementById('listaUsuarios').value;
    console.log(nomb);
    try{
        const respuesta= await axios.post('/usuario/nombre',{
            nombre:nomb })
        document.getElementById('respuesta').innerHTML=`${respuesta.data.nombre} ${respuesta.data.correo} ${respuesta.data.contrasena}` ;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('boton2').addEventListener('click',buscarUsuario);

//***************************************** */
// obtener un usuario por nombre desde campo
async function buscarUsuario2(){
    const nomb = document.getElementById('busqueda').value;
    console.log(nomb);
    try{
        const respuesta= await axios.post('/usuario/nombre',{
            nombre:nomb })
        document.getElementById('respuesta2').innerHTML=`${respuesta.data.nombre} ${respuesta.data.correo} ${respuesta.data.contrasena}` ;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}
document.getElementById('boton3').addEventListener('click',buscarUsuario2);
  

//**************************************** */
// actualizar datos por nombre
async function cargarDatos2() {
    try{
        const respuesta= await axios.get('/usuarios')        
    if (respuesta.data) {           
      const userList = document.getElementById('listaUsuarios2');
      userList.innerHTML = ''; 
        respuesta.data.forEach(user => {
        const option = document.createElement('option');
        option.value = `${user.nombre}`;
        option.textContent = `${user.nombre}`;
        userList.appendChild(option);
      });
    }
}
catch(error){
    console.log(error); 
  }      
}
cargarDatos2();

async function llenarDatos(){
    const nomb = document.getElementById('listaUsuarios2').value;
    console.log(nomb);
    try{
        const respuesta= await axios.post('/usuario/nombre',{
            nombre:nomb })
        document.getElementById('nuevoNombre').value=`${respuesta.data.nombre}`;
        document.getElementById('nuevoCorreo').value=`${respuesta.data.correo}`;
        document.getElementById('nuevaContrasena').value=`${respuesta.data.contrasena}`;
        console.log(respuesta.data);
    }
    catch(error){
        console.log(error);
    }
}


async function actualizarRegistro(){
    const nomb = document.getElementById('listaUsuarios2').value;
    const nombnuevo=document.getElementById('nuevoNombre').value;
    const corr=document.getElementById('nuevoCorreo').value;
    const contra=document.getElementById('nuevaContrasena').value;
    try{
        const respuesta= await axios.post('/usuario/actualizacionNombre',{
           nombre:nomb,
           nuevonombre:nombnuevo,
           nuevocorreo:corr,
           nuevopassword:contra
        });
        document.getElementById('respuesta3').innerHTML=respuesta.data;
    }
    catch(error){
        console.log(error);
    }
}

document.getElementById('listaUsuarios2').addEventListener('change',llenarDatos);
document.getElementById('boton4').addEventListener('click',actualizarRegistro);