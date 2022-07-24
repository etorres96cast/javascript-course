//Object Literal
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponibilidad: true,
};

//Object Constructor

function Producto (
  nombre,
  precio,
) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponibilidad = true;//valor por defecto
};

const producto2 = new Producto('Monitor de 24 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Laptop', 710);
console.log(producto3);
