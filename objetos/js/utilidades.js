var utilidades = {


    buscarCoincidencias: function buscarCoincidenciasFn(paramArray, item) {
        return paramArray.includes(item);
    },

    verificarPalindromo: function verificarPalindromoFn(cadena) {
        let reversoCadena = cadena.split('').reverse().join('');
        return reversoCadena;

    },


}