let variable=""

function mostrarNumero(numero){
    variable+=numero;
    document.getElementById("texto1").textContent=variable
  

}
function eliminar (numero){
    document.getElementById("texto1").textContent=""
}

function suma (numero){
    primerNumero=variable;
    variable+=numero;
    document.getElementById("texto1").textContent=variable
    variable=""
}
function igual(){
    document.getElementById("texto1").textContent=Number()
}