var utils = utilidades;

//ejercicios #2
var a = [1, 2, 3, 4, 10, 11, 12];
var b = [1, 2, 3, 5, 6]
var c = [];

a.forEach(item => {
    if (!utils.buscarCoincidencias(b, item))
        c.push(item)
})

console.log(c)

//Ejercicios #3 determinar si es un palindromo

var palabra = 'oso'

var palabraReverso = utils.verificarPalindromo(palabra)
var resultado = (palabraReverso !== palabra) ? 'No es palindromo' : 'Es Palindromo'

console.log('La palabra => ' + palabra + ' ', resultado)

//ejercicio #4
var arraInteger = [1, 2, 3, 4, 10, 11, 12, 11, 2, 1, 3];

let result = arraInteger.filter((item, index) => {
    return arraInteger.indexOf(item) === index;
})

console.log(result)

