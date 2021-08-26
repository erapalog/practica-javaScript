//nombres de las funciones o metodos 
//deben tener un nombre accion (verbo)
//camelCase lower camelCase
//llama funciones sin valor de retorno
function mostrarMensaje() {
    console.log('soy una funcion')
}

//funciones con valor de retorno
//las funciones deben tener un unico punto de retorno
function retornarNombre() {
    return 'Felipe';
}

//por 4 partes
/*
    1. Son los parametros de entrada
    2. Las declaraciones de variables u ojbjetos que vamos a utilizar
    3. los procesos que va a realizar
    4. un unico punto de retorno
*/
//mala practic
function retornarNombre() {

    let nombre = "";

    if (nombre == '') {
        return 'Ana'
    } else {
        return 'Juan'
    }

    let apellio = "Garcia"
}

function retornarNombre() {

    let nombre = "";
    let apellio = "Garcia"
    let nombreRetornar = ''

    if (nombre == '') {
        nombreRetornar = "Ana"
    } else {
        nombreRetornar = 'Pedro'
    }
    return nombreRetornar;
}

//tipo funcion con parametros de entrada

var resultado = realizarOperaciones(5, 15, 1);
console.log(resultado)

console.log(realizarOperaciones(10, 50, 3));

function realizarOperaciones(a, b, tipoOperacion) {

    var resultado;
    switch (tipoOperacion) {
        case 1:
            resultado = a + b;
            break;
        case 2:
            resultado = a - b;
            break;
        case 3:
            resultado = a * b;
            break;
        case 4:
            resultado = a / b
            break;
        default:
            resultado = 'Operacion incorrecta';
    }

    return resultado;

}