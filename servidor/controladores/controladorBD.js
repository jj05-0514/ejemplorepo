const mongoose = require('mongoose');
const Usuario = require('../modelos/modeloBD');

/*************************************************** */
// Crear un usuario
const crearUsuario= async (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.email;
    const contrasena = req.body.password;
    const user = new Usuario({ nombre: nombre, correo: correo, contrasena: contrasena });
    try {
      await user.save()
      res.send('Usuario creado');
      console.log('Usuario creado');
    }
    catch (err) {
      res.send('Error al crear usuario', err);
    }
  };
  
  //************************************************************ */
  // Obtener todos los usuarios
  const obtenerUsuarios = async (req, res) => {
    try {
      const users = await Usuario.find();
      res.send(users);
      console.log(users);
    }
    catch (err) {
      res.send('Error al obtener usuarios', err);
    }
  };
  
  //************************************************************ */
  // Obtener un usuario por nombre
  const obtenerUsuarioNombre= async (req, res) => {
    const nomb = req.body.nombre;
    console.log(nomb);
    try {
      const user = await Usuario.findOne({ nombre: nomb });
      if (!user) {
        res.send('Usuario no encontrado');
      } else {
        res.send(user);
        console.log(user);
      }
    }
    catch (err) {
      res.send('Error al obtener usuario', err);
    }
  };
  
  //************************************************************ */
  // actualizar un usuario por nombre
  const actualizarUsuarioNombre= async (req, res) => {
    const nomb = req.body.nombre;
    const nuevonombre=req.body.nuevonombre;
    const nuevocorreo = req.body.nuevoemail;
    const nuevacontrasena = req.body.nuevopassword;
    try {
      const userUpdate = await Usuario.findOneAndUpdate({ nombre: nomb },{nombre:nuevonombre,correo:nuevocorreo,contrasena:nuevacontrasena},{new:true, runValidators:true});
      if (!userUpdate) {
        res.send('Usuario no actualizado');
      } else {
        res.send('Usuario actualizado');     
        console.log('Usuario actualizado');
      }
    }
    catch (err) {
      res.send('Error al actualizar usuario', err);
    }
  };
  
  /***************************************************** */
  // eliminar un usuario por nombre
  const eliminarUsuarioNombre= async (req, res) => {
    const nomb = req.body.nombre;
    try {
      const user = await Usuario.findOneAndDelete({nombre:nomb});
      if (!user) {
        res.send('Usuario no encontrado');
      } else {
        res.send('Usuario eliminado');
        console.log('Usuario eliminado');
      }
    }
    catch (err) {
      res.send('Error al eliminar usuario', err);
    }
  };

    module.exports = {
        crearUsuario,
        obtenerUsuarios,
        obtenerUsuarioNombre,
        actualizarUsuarioNombre,
        eliminarUsuarioNombre
    }

