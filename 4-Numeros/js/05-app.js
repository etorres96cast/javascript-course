const a = "20";
const b = "20.2";
const c = "Uno";
const d = 20;
const e = 20.2;

//Convertir String hacia numero
console.log(a);
console.log(Number.parseInt(a));
console.log(Number.parseFloat(b));
console.log(Number.parseInt(c));

//revisar si un numero es entero o no
console.log(Number.isInteger(d));//true
console.log(Number.isInteger(e));//false