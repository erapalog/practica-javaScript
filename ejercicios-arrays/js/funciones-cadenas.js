
var nombre='ana';

var mensajes="Completar nombre, Completar Apellido"


//funciones para convertir mayusculas y minusculas
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());

//replace, es remplazar la primera aparicion un caracter
console.log(nombre.replace('a','O'))
console.log(nombre.replace(/a/g,'O'))

//subString 
console.log(nombre.substring(1));
console.log(nombre.substring(0,1));

//split
var arrayMensajes=mensajes.split(',');
console.log(arrayMensajes);

var mensajeOriginal=arrayMensajes.toString();
console.log(mensajeOriginal)

var mensajeOriginal=arrayMensajes.join(',');
console.log(mensajeOriginal)

//indexOf
console.log(mensajes.indexOf('m'));

//lastIndexOf
console.log(mensajes.lastIndexOf('m'));