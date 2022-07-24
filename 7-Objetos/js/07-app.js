/**
 * Evitar que un objeto sea modificable
 */

"use strict";//para esto, se utiliza la siguiente sintaxis y ya luego podremos usar metodos especiales para evitar la modificacion de nuestros objetos

const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
};
Object.freeze(producto);//de esta manera evitamos cualquier modificacion de nuestro objeto 'producto'

console.log(producto);
console.log(Object.isFrozen(producto));//de esta manera verificamos si nuestro objeto puede ser modificable o no
//nos devuelve true