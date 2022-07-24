const producto = {
  nombre: 'Monitor 20 pulgadas',
  precio: 300,
  disponibilidad: true,
};

//Object.keys()
//Obtento en array las propiedades de un objeto
console.log(Object.keys(producto)); //['nombre', 'precio', 'disponibilidad']

//Object.values()
//Obtengo un array con los valores de las propuedades de un objeto
console.log(Object.values(producto)); //['Monitor 20 pulgadas', 300, true]

//Object.entries()
//Obtengo en un array tanto las propiedades como los valores de un objeto
console.log(Object.entries(producto));//[Array(2), Array(2), Array(2)]
