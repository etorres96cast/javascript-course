const productTestA = 'Monitor de 20 pulgadas';

//metodo
//.replace, me permite remplazar una palabra de un String por otra
console.log(productTestA);
console.log(productTestA.replace('Monitor', 'Monitor Curvo'));

//.slice, para cortar, se le debe pasar dos parametros
//si el primer numero es mayor al segundo no hara nada
console.log(productTestA.slice(0, 7));
console.log(productTestA.slice(7, 0));

//Otra alternatica a .slice
//la diferencia es que se puede pasar un numero mayor en la primera posicion
console.log(productTestA.substring(0, 7));
console.log(productTestA.substring(7, 0));

//.charAt, nos devuelve un caracter, dependiendo de la posicion que le pasemos como parametro
console.log(productTestA.charAt(0));
