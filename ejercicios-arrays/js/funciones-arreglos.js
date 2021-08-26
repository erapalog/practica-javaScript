
const arregloNombres=['Ana','Pedro','Juan','Hugo']

//metodo foEach
arregloNombres.forEach(i=>{
    console.log(i)
})
//metodo map
const numeros=[1,2,5,4,3,4,4]
const agregados= numeros.map(i=> i+2);
console.log(numeros)
console.log(agregados)

//include
console.log(numeros.includes(4));
console.log(numeros.includes(10));

//filter
filtro=numeros.filter(i=>i<4);
console.log(numeros)
console.log(filtro)

//push
var apellidos=['Garcia','Romero','Lopez'];
console.log(apellidos)
apellidos.push('Juarez')
console.log(apellidos)

//sort
console.log(numeros.sort());

//reverse
console.log(numeros.reverse());
var numeros2=[5,15,2,6,8]

numeros2.sort((a,b)=>{
    if(a==b){
        return 0;
    }
    if(a<b){
        return -1;
    }

    return 1
})

console.log(numeros2)

var myArray = [11, 178, 20, 31];

//exprecion lamba
arregloNombres.forEach(i=>{
    console.log(i)
})

//funcion anonima
myArray.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});



