/**
 * Object Destructuring
 * Se entiende porque estamos sacando un valor en especifico dentro de una estructura
 */

const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
};
console.log(producto.nombre)

//forma antigual de asignar un valor de un objeto a una variable
const nombreProduct = producto.nombre;
console.log(nombreProduct);

//nueva forma
//ecma6
//object destructuring
const { nombre } = producto;
const { precio, disponibilidad } = producto;
console.log(nombre);
console.log(precio);
console.log(disponibilidad);