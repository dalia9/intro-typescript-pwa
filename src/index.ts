interface FG{
    a:number;
    b:number;
    c:number;
    resultado1:number;
}

function FormulaG(a:3,b=-2,c=7){
    let resultado1=(-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return resultado1;
    
}

function FormulaG2(a:3,b=-2,c=7){
    let resultado2=(-b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return resultado2;
}

const resultado1=FormulaG;
console.log(`El resultado es: ${resultado1}`)

const resultado2=FormulaG;
console.log(`El resultado es: ${resultado2}`)
