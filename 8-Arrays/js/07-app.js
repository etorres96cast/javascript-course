/**
 * Array Destructuring
 * Se entiende porque estamos sacando un valor en especifico dentro de una estructura
 */

const numeros = [10, 20, 30, 40, 50];

//supongamos que queremos acceder al tecero, para ello hacemos lo siguiente
const [, , tecero] = numeros;//30
console.log(tecero);

//si deseo solo el primer valor
const [primero] = numeros;//10

//si deseo varios
const [a, , c, , d] = numeros;//10, 30, 50

//Ver comportamiento
const [primer, segundo, ...tercero] = numeros;
console.log(tecero);//30, 40, 50