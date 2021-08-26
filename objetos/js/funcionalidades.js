
var miObjeto={

    //propiedades nombre
    nombre:'',
    apellido:'',
    edad:'',
    amigos:['Juan','Andres','Pablo'],        
    bienes:[
        {
            nombreBienes:'Computadora',
            precioBienes:4000
        },
        {
            nombreBienes:'Celulares',
            precioBienes:3000
        },
        {
            nombreBienes:'Cuadernos',
            precioBienes:100
        }
    ],
    informacionEscolar:{
        nombreEscuela:'Escuela CA',
        Direccion:"Las cumbres",
        anioFundacion:1920
    },

    setNombre: function setNombreFn(nombre){
        this.nombre=nombre;
    },

    getNombre: function getNombreFn(){
        return this.nombre;
    },

    calcularEdad:function calcularEdadFn(anio){
        return 2021-anio;
    }

}

