

//Definicion de interface
interface Alumno{
    matricula:number;
    nombre:string;
    email:string;
}

//objeto en ts
const alumno:Alumno={
    nombre:'juan',
    matricula:13252,
    email:"juan@gmail.com"
}

let mascotas=['perro', 'gato', 'perico']

mascotas[1]='shshsh';
mascotas.push('nuevo')

let tem:(number | string )[]=[]
tem.push('Nombre');
tem.push(232);

console.log(alumno)