function Datos(){
    calle:String;
    pais:String;
    estado:String;
    nombre:String;
    edad:Number;
}

const AlumnoUTL:Datos={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+','+this.direccion.pais';
    }
}

const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);

//Todos los objetos tienen que tener tipado de datos