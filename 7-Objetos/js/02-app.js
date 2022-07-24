/**
 * Acceder a propiedades de un objeto
 */

const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
};

console.log(producto);

//para acceder a un objeto, utilizamos la sintaxis de punto
//primera forma para acceder a un objeto
console.log(producto.nombre);

//segunda forma para acceder a un objeto
console.log(producto['nombre']);