const saludar=require('./modulosfuncionales/saludo')
const operaciones=require('./modulosfuncionales/operaciones')
const {multiplicar}=require('/modulosfuncionales/operaciones')


let inicio=100;
let fin=200;
let añosTotales=operaciones.sumar(inicio,fin);
console.log("Estos son los años totales"+añosTotales);
let añosMultiplicados=multiplicar(inicio,fin);
console.log("Estos son los años multiplicados"+añosMultiplicados);
console.log(operaciones.multiplicar(10,35));
console.log(operaciones.numeros);
console.log(saludar('Juan'));
console.table(operaciones.numeros);

// Manejo de archivos


