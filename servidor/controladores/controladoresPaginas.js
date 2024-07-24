/************************************ */
// servir pagina de inicio
const pagHome= (req, res) => {
  res.sendFile(__dirname + '/paginas/index.html')
};

// servir pagina de contacto
const pagContacto= (req, res) => {
  res.sendFile(__dirname + '/paginas/contacto.html')
};

// servir pagina de servicios
const pagServicios= (req, res) => {
  res.sendFile(__dirname + '/paginas/servicios.html')
};

// servir pagina de nosotros
const pagNosotros= (req, res) => {
  res.sendFile(__dirname + '/paginas/nosotros.html')
};

// servir pagina de error
const pagError= (req, res) => {
  res.sendFile(__dirname + '/paginas/error.html')
};

//servir pagina usuario creado
const pagUsuarioCreado= (req, res) => {
  res.sendFile(__dirname + '/paginas/usuarioCreado.html')
};

module.exports={
    pagHome,
    pagContacto,
    pagServicios,
    pagNosotros,
    pagError,
    pagUsuarioCreado
}


