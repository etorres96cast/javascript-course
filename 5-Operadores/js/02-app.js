const a = 20;
const b = "20";
const c = 30;

//verificar igualdad
console.log(a == b);//es un comparador no tan estricto, no verifica si es un String
console.log(a == c);

//verifica solo el valor

//comparador estricto
console.log(a === b);//false
//verifica el tipo de dato y el valor

console.log(a === parseInt(b)); //true

const pass1 = "admin";
const pass2 = "Amin";

//son diferentes? true
console.log(pass1 != pass2);//true
