// asignando un valor fijo a un arreglo

var miArreglo = new Array(10);
console.log(miArreglo);

miArreglo[0] = "Ana";
miArreglo[1] = 'Pedro';
miArreglo[2] = 15;

console.log(miArreglo);
console.log('Tamano del arreglo: ', miArreglo.length);
console.log('Acceder a la pocision 1 ', miArreglo[0]);

for (let i = 0; i < miArreglo.length; i++) {
    console.log(miArreglo[i]);
}

//crear arreglos sin un tamano fijo

var miArreglo2 = new Array();

miArreglo2[0] = "Juan";
miArreglo2[1] = "Ana";

console.log(miArreglo2);

for (let i = 0; i < 100; i++) {
    miArreglo2[i] = i + 10;
}

console.log(miArreglo2);

//crear arreglos sin un tamano fijo con []
var miArreglo3 = [];
miArreglo3[0] = 'Ana';

console.log(miArreglo3);

var miArreglo4;
miArreglo4[0] = 15;
console.log(miArreglo4);