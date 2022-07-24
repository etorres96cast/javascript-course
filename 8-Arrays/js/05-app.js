/**
 * 
 * forma declarativa, lo que hace es no sobreescribir o trabajar en la variable principal, en este caso es carrito, si no lo que se hace es crear una nueva variable
 */
const carrito = [];

class Producto {
  constructor ({
    name,
    price
  }) {
    this.name = name;
    this.price = price;
  }
};

const product1 = new Producto({
  name: 'Teclado',
  price: 35
});
const product2 = new Producto({
  name: 'Silla',
  price: 560
});
const product3 = new Producto({
  name: 'Mouse',
  price: 23
});

let resultado;
//Spread Operator o Rest Operator
//los "...", hace referencia de que copie todo lo que contenga

//lo que se hace es mantener la variable carrito intacta y se crea otra con la intencion de unir la variablle carrito y la variable creada resultado.

//se modifica la variable resultado, la variable carrito se mantiene
resultado = [product2, ...carrito, product1]

console.table(resultado);

