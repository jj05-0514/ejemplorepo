const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/paginas'));
app.set('view engine', 'html');


app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname +'/paginas/index.html')
})
app.listen(port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})