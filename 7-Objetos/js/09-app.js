/**
 * Unir objetos
 */

 const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponibilidad: true,
};

const medidas = {
  peso: '1kg',
  medidas: '1cm',
}

//Object.assign(), dicho metodo se le debe pasar como parametros los objetos a unir
const resultado = Object.assign(producto, medidas);

//otra manera de unir
//Spread Operator o Rest Operator
//los "...", hace referencia de que copie todo lo que contenga
const resultado2 = { ...producto, ...medidas};

console.log(resultado, resultado2);

resultado.nombre = 'Laptop';
resultado2.nombre = 'test';

console.log(producto, medidas);
console.log(resultado, resultado2);
//si modificamos el objeto resultado, este afectara el objeto principal que es producto y medidas