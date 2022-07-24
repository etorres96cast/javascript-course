/**
 * Object Destructuring dentro de un Object
 * Se entiende porque estamos sacando un valor en especifico dentro de una estructura
 */

const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
  informacion: {//dentro de un objeto
    medidas: {
      peso: '2kg',
      medida: '45cm',
    },
    fabricacion: {
      pais: 'china',
    }
  },
};
//ejemplos de como se acceden a un objeto dentro de otro objeto

//las unicas variables existentes son, nombre y medidas
const { nombre, informacion: { medidas } } = producto;
console.log(nombre);
console.log(medidas);

//las unicas variables existentes es pais
//se utiliza let por su alcance
let {informacion: { fabricacion: { pais } }} = producto;
console.log(pais);

//puedo cambiar el valor de la variable sin afectar el objeto principal
pais = 'EEUU';
console.log(pais);
console.log(producto);