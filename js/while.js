//!WHILE Y LOOP NO SON METODOS PUNTUALES O ESPECIFICOS DE UN ARRAY, SON FORMAS PARA REPETIR CIERTA CANTIDAD DE ACCIONES UN NUMERO DE VECES.

const numero= parseInt(prompt(`ingresar el numero que desea ser multiplicado`));

let i =11;
while(i<=10){
    const multiplicacion = i*numero;

    console.log(`resultado de ${i} x ${numero} = ${i*numero}`);
    i++;
}