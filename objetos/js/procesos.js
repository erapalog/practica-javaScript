
var instanciaObjeto=miObjeto;

instanciaObjeto.setNombre('Pedro');
console.log(instanciaObjeto.getNombre());


instanciaObjeto.nombre='Ana'
console.log(instanciaObjeto.nombre)

console.log(instanciaObjeto.calcularEdad(1993))


instanciaObjeto.amigos.forEach(item=>{
    console.log(item)
})

for(let i=0; i<instanciaObjeto.bienes.length; i++){
    console.log('Nombre de la pertencia',instanciaObjeto.bienes[i].nombreBienes )
    console.log('Precio de la pertencia',instanciaObjeto.bienes[i].precioBienes )
}

console.log('----------------------------------------')

for(let item of instanciaObjeto.bienes){
    console.log("Nombre de la pertenencia", item.nombreBienes)
    console.log("Nombre de la pertenencia", item.precioBienes)
}

console.log('----------------------------------------')

for(let index in instanciaObjeto.bienes ){
    console.log(index,instanciaObjeto.bienes[index])
}

console.log('----------------------------------------')
for(let index in instanciaObjeto.bienes ){
    console.log(index,instanciaObjeto.bienes[index].nombreBienes)
}

console.log('----------------------------------------')

instanciaObjeto.bienes.forEach(item=>{
    console.log('Valor',item.nombreBienes)
})

console.log('----------------------------------------')

console.log("Nombre Escuela",instanciaObjeto.informacionEscolar.nombreEscuela)
console.log("Nombre Escuela",instanciaObjeto.informacionEscolar['nombreEscuela'])

console.log('----------------------------------------')
for(let prop in instanciaObjeto.informacionEscolar){
    console.log(prop)
}

console.log(instanciaObjeto.informacionEscolar.maestros)
instanciaObjeto.informacionEscolar.maestros=['Ana','Juan','Pedro'];

console.log(instanciaObjeto.informacionEscolar)


var a=[1,5,3,6,8]

var b=[1,9,5,3,10,15]

var c=[6,8]

