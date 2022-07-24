//buenas practicas
const autenticado = true;

if (autenticado === true) {//esto se considera una mala practica
  console.log('Si puedes ver netflix');
} else {
  console.log('No puedes ver')
}

//manera correcta
if (autenticado) {
  console.log('Si puedes ver netflix');
} else {
  console.log('No puedes ver')
}

//operador ternario
console.log( autenticado ? 'Si esta autenticado' : 'No esta autenticado');