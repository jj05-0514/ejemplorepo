const mongoose = require('mongoose');

//************************************************************ */
// esquema de base de datos
const Schema = mongoose.Schema;
const userSchema = new Schema({
  nombre: String,
  correo: String,
  contrasena: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;