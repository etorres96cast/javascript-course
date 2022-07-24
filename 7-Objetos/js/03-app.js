/**
 *Agregar o eliminar propiedades de un objeto
 */

 //objeto en su estado inicial
 const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
};
console.log(producto);

//agregar nuevas propiedades a un objeto
producto.imagen = 'imagen.jpg';
console.log(producto);

//eliminar propiedades de un objeto
delete producto.disponibilidad;
console.log(producto);