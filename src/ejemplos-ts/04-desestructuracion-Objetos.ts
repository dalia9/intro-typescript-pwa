//destruccion de Objetos y Arrays

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
        autor:'cepillin',
        year:1978,
    }
}

const{volumen, segundo, cancion, detalles}=reproductor;//Desestructuracion de objetos por medio de const
const{autor}=detalles;
console.log(`El volumen actual es: ${volumen}`);
console.log(`El segundo actual es: ${segundo}`);//
console.log(`La cancion actual es: ${cancion}`);
console.log(`El autor es: ${autor}`);

const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha']; //Desestructuracion de arreglos
const[a,b,c,d]=dbz; //Primero las posiciones y luego el nombre del arreglo
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 1: ${b}`);
console.log(`Personaje 1: ${c}`);
console.log(`Personaje 1: ${d}`);