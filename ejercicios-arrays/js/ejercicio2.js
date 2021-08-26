var matriz1 = [
    [2, 3],
    [4, 5]
]

var matriz2 = [
    [6, 7],
    [8, 9]
]

var matrizSuma = [
    [0, 0],
    [0, 0]
]

//(0,0),(0,1)
//(1,0),(1,1)

for (let i = 0; i < matriz1.length; i++)
    for (let j = 0; j < matriz1.length; j++)
        matrizSuma[i][j] =matriz1[i][j] +matriz2[i] [j]

console.log(matriz1)
console.log(matriz2)
console.log(matrizSuma)

