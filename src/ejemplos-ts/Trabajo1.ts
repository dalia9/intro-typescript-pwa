interface Datos{
    nombre:String;
    edad:Number;
    direccion:{
        calle:string;
        pais:string;
        estado:string;
    }
    mostrarDireccion:()=>void;
}

const AlumnoUTL:Datos={
    nombre:'Dalia',
    edad:23,
    direccion:{
        calle:'lolo',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+','+this.direccion.pais;
    }
}

const direccion=AlumnoUTL.mostrarDireccion();
console.log(direccion);

//Todos los objetos tienen que tener tipado de datos