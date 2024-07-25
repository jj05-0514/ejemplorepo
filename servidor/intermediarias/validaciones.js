/*************************************** */
// validacion para datos de formulario de creacion
const validacionFormulario = (req, res, next) => {
    const nombre = req.body.nombre;  
    const correo = req.body.email;
    const contrasena = req.body.password;
    if (!nombre) {
      res.send('falto el nombre');
    } else if (!correo) {
      res.send('falto el correo');
    } else if (!contrasena) {
      res.send('falto la contraseña');
    }
    else {
      next();
    }
  }

  module.exports = validacionFormulario;