/**
 * Agregar nuevos valores a un array
 * forma imperativa, esta forma lo que hace es trabajar con la variable original, ya sea sobreescribiendola o agregar nuevos valores, a esto se le conoce forma imperativa
 */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
console.table(meses);

//Agregar al final
meses.push('Julio');
console.table(meses);

//agregar al incio
meses.unshift('Diciembre');
console.table(meses);