const product = "Monitor de 20 pulgadas";
const price = "20 USD";

//Concatenar, formas

product.concat(price);
product.concat("En descuento");
console.log(product + " con un precio de: " + price);
console.log(product , " con un precio de: " , price);

//mejor manera
console.log(`El producto ${product} tiene un precio de ${price}`);