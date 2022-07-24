const numeros = [10, 20, 30, 40, 50, [10, 20]];
console.log(numeros);
console.table(numeros);

//Acceder a un arreglo conociendo su posicion
numeros[2];
console.log(numeros[2]);//30

//Acceder a un arreglo dentro de otro arreglo
numeros[5][1];
console.log(numeros[5][1]);//20