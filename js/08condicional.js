let edad = 14;

if (edad >= 18){
    console.log("Puedes entrar en el portal web");
}
else{
    console.log("Acceso denegado.");
}

/*
if (edad < 18){
    console.log("Acceso denegado.");
}*/

/*********************EJERCICIO ***************
 * Crear una variable que almacene un año con sus 
 * cuatro dígitos.
 * Si coincide con 2026 aparecerá ACIERTO y en
 * caso contrario aparecerá INCORRECTO
*/
let anyo;

anyo = 2022;

if (anyo == 2026){
    console.log("ACIERTO");
}
else{
    console.log("INCORRECTO");
}
/******* EJERCICIO2*******************
 * Usar una variable en la que se almacene la edad y otra variable que 
 * almacene S o N (Sí al cine, No al cine)
 * Si es mayor de edad Y (&&) quiere ir al cine "ENTRA"
 * en caso contrario "VETE A TU CASA"
 */
let edad_espectador;
let cine;
edad_espectador = 90;
cine = "N";

if ((edad_espectador>=18) && (cine == "S")){
    console.log("ENTRA");
}
else{
    console.log("VETE A TU CASA, PISHA");
}