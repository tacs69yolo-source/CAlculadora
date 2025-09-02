let variable=""
let segundoNumero= ""
let opCode=""


function mostrarNumero(numero){
    variable+=numero;
    document.getElementById("texto1").textContent= variable
  

}
function eliminar (numero){
    document.getElementById("texto1").textContent=""
}

function modo(id){
    segundoNumero=variable;
    variable=""
    opCode=id
    document.getElementById("texto2").textContent= segundoNumero + id
}
function raiz(){
    Math.sqrt(variable)
    document.getElementById("texto1").textContent=  Math.sqrt (variable)
    
    document.getElementById("texto2").textContent= "√"+ variable
    

}
function igual(){
   
    let resultado;
    if(opCode=="+"){
        resultado = Number(segundoNumero) + Number(variable);
    }
    if(opCode=="-"){
        resultado = segundoNumero - variable;
    }
    if(opCode=="*"){
        resultado = segundoNumero * variable;
    }
     if(opCode==""){
        resultado = segundoNumero * variable;
    }
      if(opCode=="/"){
        //si
        if(variable=="0")
            //condicion verdadera
            resultado= "no se puede devidir por 0"
        //si no
        else{
            //condicion falsa
            resultado = segundoNumero / variable;
        }
    }
    document.getElementById("texto1").textContent= resultado

}