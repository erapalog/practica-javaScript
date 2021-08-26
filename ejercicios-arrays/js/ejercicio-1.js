var numeros = [];

for (let i = 0; i < 20; i++) {
    numeros[i] = i * 5;
}

console.log( numeros);

for (let i = 0; i < numeros.length; i++) {
    //lograr identificar cuando es una pocision par
    if ((i % 2) == 0) {
        numeros[i] = numeros[i] + 2;
    } else {
        numeros[i] = numeros[i] + 3;
    }
}


console.log(numeros);