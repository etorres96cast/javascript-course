/**
 * Un objeto dentro de un objeto
 */

const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
  informacion: {//dentro de un objeto
    peso: '2kg',
    medida: '45cm',
  },
};

console.log(producto);
console.log(producto.nombre);
console.log(producto.informacion.peso);