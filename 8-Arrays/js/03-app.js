/**
 * Recorrer un Array
 */

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

//cuanto mide el arreglo
console.log(meses.length);

//dejarar de ejecutar cuando i sea mayor a meses.length
//NO se usa const debido a que cambia su valor cuando itera
for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
};