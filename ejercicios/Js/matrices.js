var temperaturas_CA = [];

var temperaturaHN = []
temperaturaHN[0] = 10
temperaturaHN[1] = 15
temperaturaHN[2] = 20


var temperaturaES = []
temperaturaES[0] = 20
temperaturaES[1] = 25
temperaturaES[2] = 30


var temperaturaGT = []
temperaturaGT[0] = 12
temperaturaGT[1] = 13
temperaturaGT[2] = 30
temperaturaGT[3] = 45

temperaturas_CA[0] = temperaturaHN;
temperaturas_CA[1] = temperaturaES;
temperaturas_CA[2] = temperaturaGT;

console.log(temperaturas_CA);

console.log('Temperatura ', temperaturas_CA[0][0]);
console.log('Temperatura ', temperaturas_CA[1][2]);
console.log('Temperatura ', temperaturas_CA[2][3]);
console.log('Temperatura ', temperaturas_CA[0][3]);

