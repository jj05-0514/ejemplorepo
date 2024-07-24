/************************************ */
// servir pagina de inicio
const pagHome= (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
};

// servir pagina de contacto
const pagContacto= (req, res) => {
  res.sendFile(__dirname + '/public/contacto.html')
};

// servir pagina de servicios
const pagServicios= (req, res) => {
  res.sendFile(__dirname + '/public/servicios.html')
};

// servir pagina de nosotros
const pagNosotros= (req, res) => {
  res.sendFile(__dirname + '/public/nosotros.html')
};

// servir pagina de error
const pagError= (req, res) => {
  res.sendFile(__dirname + '/public/error.html')
};

//servir pagina usuario creado
const pagUsuarioCreado= (req, res) => {
  res.sendFile(__dirname + '/public/usuarioCreado.html')
};

module.exports={
    pagHome,
    pagContacto,
    pagServicios,
    pagNosotros,
    pagError,
    pagUsuarioCreado
}


