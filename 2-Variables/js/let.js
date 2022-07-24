/*
 - Scope: BLOQUE.
 - Re-asignacion: SI.
 - Re-declaracion: NO.
 - Declaracion sin valor inicial: SI.
 - Propiedad del Obj. Global: NO.
 - Hoisting: TDZ.

  let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.a diferencia de la palabra clave var la cual define una variable global o local en una función sin importar el ámbito del bloque

  https://www.youtube.com/watch?v=ojrvxYcKeYg
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let
*/

let producto = 'tablet';

producto = 'Monitor';

producto = 20;

let test;