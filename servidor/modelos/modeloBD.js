const mongoose = require('mongoose');

//************************************************************ */
// esquema de base de datos
const Schema = mongoose.Schema;
const userSchema = new Schema({
  nombre: String,
  correo: String,
  contrasena: String
});

const Usuario = mongoose.model('Usuario', userSchema);

module.exports = Usuario;