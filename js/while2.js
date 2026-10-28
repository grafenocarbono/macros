/* Visualizar las diez tablas de multiplicar
Pista: Los while se pueden anidar para conseguir lo que se pide en este ejercicio
EJEMPLO DE EJECUCIÓN

TABLA DEL  1
1  *  1  =  1
1  *  2  =  2
1  *  3  =  3
...
TABLA DEL  2  
2  *  1  =  2
2  *  2  =  4
....
 TABLA DEL  10  
10  *  1  =  10
10  *  2  =  20
...*/

let tabla=1;
let contador=1;
while(tabla <= 10){
    console.log("*** Tabla del " + tabla + " ***");
    while(contador<=10){
        console.log(tabla," * ", contador, 
        " = ", tabla*contador);
        contador ++;
    }
    tabla++;
    contador=1;
}