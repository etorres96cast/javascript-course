/*
 - "prompt()" muestra ventana emergente la cual se le debe pasar un valor
*/
const nombre = prompt("Cual es tu nombre:");

//la informacion que pase el usuario, sera almacenada en la variable "nombre".

/*
 - "document." hace referencia a cualquier pagina cargada en el navegador.
 - "querySelector(parametro)" devuelve el primer elemento que le pasemos como parametro
 Suponiendo que, en nuestro HTML tengamos varios elementos con la misma clase, tomara en cuenta SOLO el primero que se posicione en el documento HTML.
 Ver el documento "index.html".
 - ".innerHTML" es una propiedad que nos permite leer un dato o asignarlo a una etiqueta en HTML.
*/
document.querySelector('.name-user').innerHTML = `Tu nombre es: ${nombre}`;

/*
Selecciono el documento ("document.") la cual a su vez seleccionara la primer etiqueta ("querySelector") que contenga el argumento ('.name-user') y que a su vez nor permitira asignal o leer un dato (".innerHTML")
Toma el nombre y lo muestra en el documento
*/