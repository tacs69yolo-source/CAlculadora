let variable=""
let segundoNumero= ""
let opCode=""
let resultado=false;



function mostrarNumero(numero){
     if(resultado){
        borrarTodo()
        resultado=false
    }
    variable+=numero;
    document.getElementById("texto1").textContent= variable
}
function borrarTodo(){
    variable = ""
    segundoNumero = ""
    
    document.getElementById("texto1").textContent= 0
    document.getElementById("texto2").textContent= 0

    
}
function borrarArriba(){
    segundoNumero= ""
    variable= variable
    document.getElementById("texto1").textContent= 0
}
function eliminar (){
    variable=variable.slice(0, -1)
    document.getElementById("texto1").textContent= variable;
   
}
hola = prompt
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
    document.getElementById("texto2").textContent = segundoNumero + opCode + variable+ "="
    calculo()
    document.getElementById("texto1").textContent = variable
}
function guaradarNumero(){
    segundoNumero = variable
    variable = ""
}
function calculo(){
   switch (opCode){
    case "+":
        variable = Number (segundoNumero) + Number (variable)
    break;
    case "-":
        variable = segundoNumero - variable
    break;
    case "/":
        variable = dividir (segundoNumero,variable)
    break;
    case "x":
        variable*=segundoNumero 
        // numero = numero * segundoNumero
    break;
    case "+/-":
        if(variable>0){
    variable= "-" +variable
   }else{
    variable=variable.slice(1);
   }
    default:
    
    break;
   }
   document.getElementById("texto1").textContent = variable
   }
   function dividir(segundoNumero , variable){
    if(variable==0){
        return "no se puede dividir por 0"
    }
    return segundoNumero / variable
   }
   function potencia(){
    
   }
