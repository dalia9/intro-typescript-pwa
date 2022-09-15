//funciones

import { escapeLeadingUnderscores } from "typescript";

function sumar(a,b):void{
    console.log(a+b);
}

const resultado=sumar('Roberto','Cardiel');
console.log(resultado)



function sumar2(n1:number,n2:number):number{ //number indica que tipo de dato va a regresar
    return n1+n2; //indicamos return para que nos regrese un valor
}

console.log(sumar2(6,3))


function multiplicar(n1:number, otronumero:number, base:number=0):number{ //?para marcar que es un nuemero opcional
    let tem=n1*base;

    return tem;
}

console.log(multiplicar(3,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;

}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad+=x; //mascota.edad=mascota.edad+edad
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad(){
        console.log('la edad es:', this.edad);
    },
}

calcular(nuevaMascota,3);