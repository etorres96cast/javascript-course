const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1 == boolean3);//false
console.log(boolean1 === boolean3);//false

const boolean4 = new Boolean(true);

console.log(typeof boolean4);//dira que es un objeto, es debido a la forma en como se declaro
