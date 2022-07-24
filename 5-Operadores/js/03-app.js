//undefined
let a;
console.log(a);
console.log(typeof a);

//null
let b = null;
console.log(b);
console.log(typeof b);//Object
//devuelve un objeto debido a que ECMA (el que define el estandar del lenguaje) especifica que todo que devuelve null, debe ser un objeto


console.log(a == b);//true
console.log(a === b);//false