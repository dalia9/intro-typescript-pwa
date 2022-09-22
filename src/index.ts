
 class valores{
    a:number;
    b:number;
    c:number;
    resultado1:number;

    FormulaG():void{
        let resultado1=0;
        resultado1=(-this.b + Math.sqrt(Math.pow(this.b,2)-(4*this.a*this.c)))/(2*this.a);
        //return resultado1;

        console.log(`El resultado es: ${this.resultado1}`)
    }
 }


 let  total = new valores ();
 total.a=6;
 total.b=-19;
 total.c=7;
total.FormulaG();

/*
function FormulaG2(){
    let resultado2=(-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return resultado2;
}*/

let valor =new valores()
valor.a =3;
valor.b =-4;
valor.c =9;
