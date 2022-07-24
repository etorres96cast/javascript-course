/**
 * Uso de this.
 * la palabra reservada this. hace referencia a los valores (propiedades/atributos) que se encuentran dentro de un objeto
 */
const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponibilidad: true,

  //esto es un metodo
  mostrarInfor: function() {
    console.log(`El produco ${this.nombre}`)
  }
};

producto.mostrarInfor();