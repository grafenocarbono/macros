const readline = require('readline-sync');


const lee_caracter = (mensaje) => {
 return readline.question(mensaje);
 };

const lee_entero = (mensaje) => {
 return readline.questionInt(mensaje);
 };

 const lee_decimal = (mensaje) => {
    return readline.questionFloat(mensaje);
 }

 module.exports = {
   lee_caracter,
   lee_entero,
   lee_decimal
 };
