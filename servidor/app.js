const saludar=require('./modulosfuncionales/saludo')
const sumar=require('./modulosfuncionales/operaciones');
const {multiplicar}= require('./modulosfuncionales/operaciones');
const operaciones = require('./modulosfuncionales/operaciones');
const fs=require('fs?')


let inicio=100;
let fin=200;
let añosTotales=operaciones.sumar(inicio,fin)
console.log("estos son los años totales"+añosTotales);
let añosMultiplicados=multiplicar(inicio,fin);
console.log("estos son los años multiplicados"+añosMultiplicados);
console.log(operaciones.sumar(10,35));
console.log(operaciones.restar(10,35));
console.log(operaciones.multiplicar(10,35));
console.log(operaciones.numeros);
console.log (saludar("juan"))
console.warn("porfavor incluir el nombre").
console.error(new Error("eldivisor no puede ser cero");
console.table(operaciones.numeros);

setTimeout(operaciones.sumar, 2,5,3);
console.log ("antes de septInmediate");
setInmediate(operaciones.sumar,10,3);
console.log("despues de setInmediate");
setInterval(operaciones.sumar,2,1,5); 
console.log("antes de setInterval");   


fs.writeFile('./modulosfuncionales/archivo.txt', 'Hola mundo',
fuction (err);{
    if(err){
        console.log(err);
    }else{
        console.log('El archivo fue creado?);
    ]
    
    

    }
}
)