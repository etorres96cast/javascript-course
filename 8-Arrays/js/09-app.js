/**
 * diferencias entre map y forEach
 */
const carrito = [//arreglo con objetos
  {nombre: 'Telefono 0', precio: 1230},
  {nombre: 'Telefono 1', precio: 1010},
  {nombre: 'Telefono 2', precio: 200},
  {nombre: 'Telefono 3', precio: 112300},
  {nombre: 'Telefono 4', precio: 1010},
  {nombre: 'Telefono 5', precio: 100},
];

const test1 = carrito.forEach( (producto) => {
  return `forEachArrow: ${producto.nombre} - Precio: ${producto.precio}`;
});


//VS

//map
const test2 = carrito.map( (producto) => {
  return `mapArrow: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(test1);//forEach NO crea ningun arreglo
console.log(test2);//map CREA un nuevo arreglo