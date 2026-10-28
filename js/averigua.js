const pide = require('./lib/pide');


const nombre = pide.lee_caracter("Introduzca su nombre: ");
const edad = pide.lee_entero("Introduzca su edad: ");
const salario = pide.lee_decimal("Introduzca su salario: ");

console.log(nombre, " - ", edad, " - ", salario);