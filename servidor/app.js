const saludar=require('./modulosfuncionales/saludo')
const sumar=require('./modulosfuncionales/operaciones');
const operaciones = require('./modulosfuncionales/operaciones');

let inicio=100;
let fin=200;
let añosTotales=operaciones.sumar(inicio,fin)
console.log("estos son los años totales"+añosTotales);
console.log(operaciones.sumar(10,35));
console.log(operaciones.restar(10,35));
console.log(operaciones.multiplicar(10,35));
console.log(operaciones.numeros);
console.log (saludar("juan"))