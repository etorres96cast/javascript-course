const carrito = [//arreglo con objetos
  {nombre: 'Telefono 0', precio: 1230},
  {nombre: 'Telefono 1', precio: 1010},
  {nombre: 'Telefono 2', precio: 200},
  {nombre: 'Telefono 3', precio: 112300},
  {nombre: 'Telefono 4', precio: 1010},
  {nombre: 'Telefono 5', precio: 100},
];

for(let i = 0; i < carrito.length; i++) {
  console.log(`for: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
};

//al igual que el iterador "for"
//forEach se comporta de manera similar, solo que itera de una forma mas sencilla
//Foreach es un metodo la cual se le debe pasar como argumento una funcion, en este ejemplo veremos:
//funcion arrow
carrito.forEach( (producto) => {
  console.log(`forEachArrow: ${producto.nombre} - Precio: ${producto.precio}`);
});

//function
carrito.forEach( function(producto) {
  console.log(`forEachFunction${producto.nombre} - Precio: ${producto.precio}`);
});

//for y forEach se comportan igual