const mongoose = require('mongoose');

/***************************************** */
// conexion a la base de datos
const connectDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/BaseDatos')
        .then(() => console.log('Conexión a MongoDB establecida'))
    }
    catch (err) {
      console.error('Error al conectar a MongoDB:', err);
    }
  }

module.exports = connectDB;