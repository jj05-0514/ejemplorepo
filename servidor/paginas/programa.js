async function conexion() {
    try {
        const respuesta = await axios.get('/saludo/juan');
        document.getElementById('respuesta').innerHTML = respuesta.data;
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}


//************************************************** */
async function llamadaPagina() {
    try {
        const respuesta = await axios.get('/home');
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}

//**************************************** */
// Crear registro nuevo
async function crearRegistro() {
    const nombre = document.getElementById('nombre').value;
    console.log(nombre)
    const correo = document.getElementById('email').value;
    const contrasena = document.getElementById('password').value;
    try {
        const respuesta = await axios.post('/crearUsuario', {
            nombre: nombre,
            email: correo,
            password: contrasena
        })
        document.getElementById('respuesta').innerHTML = respuesta.data;
        if (respuesta.data) {
            window.location.href = '/usuarioCreado';
        }
        console.log(respuesta.data);
    }
    catch (error) {
        console.log(error);
    }
}
document.getElementById('boton').addEventListener('click', crearRegistro);

//********************************* */
//obtener todos los usuarios

async function cargarDatos() {
    try {
        const respuesta = await axios.get('/usuarios')
        if (respuesta.data) {
            const userList = document.getElementById('listaUsuarios');
            userList.innerHTML = '';
            respuesta.data.forEach(user => {
                const option = document.createElement('option');
                option.value = user.id;
                option.textContent = `${user.nombre}`;
                userList.appendChild(option);
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}
cargarDatos();

//*************************** */
// Obtener usuario por nombre






//document.getElementById('boton2').addEventListener('click', cargarDatos);

