/**
 * Agregar nuevos valores a un array
 * forma imperativa, esta forma lo que hace es trabajar con la variable original, ya sea sobreescribiendola o agregar nuevos valores, a esto se le conoce forma imperativa
 */
 const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
 console.table(meses);
 
//Eliminar ultimo elemento del arreglo
meses.pop();
console.table(meses);

//Eliminar inicio del arreglo
meses.shift();
console.table(meses);

//Elimnar un elemento en especifico
//Se le deben pasar dos parametros,
//El primero corresponde desde donde se desea eliminar(colocar indice)
//El segundo corresponde a cuantos elementos se eliminaran
meses.splice(3,2);
console.table(meses);