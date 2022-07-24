/**
 * No se puede agregar ni eliminar propiedades
 * Se pueden modificar las existentes
 */

"use strict"; //para esto, se utiliza la siguiente sintaxis y ya luego podremos usar metodos especiales

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponibilidad: true,
};
Object.seal(producto);//Solo se puede modificar las propiedades existentes

producto.nombre = 'Laptop Ryzen';

console.log(producto);
console.log(Object.isSealed(producto));//true
