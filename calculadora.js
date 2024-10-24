let num1 = document.querySelector("#num1"); 
let num2 = document.querySelector("#num2"); 
let op = document.querySelector("#op"); 

function somar(a, b) {
    return a + b;
}

let subtrair = (a, b) => a - b;
    
  function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: Divisão por zero";
    }

}
  let multiplicar = function (a, b) {
    return a * b;
}

function calcular(){
    let valor1 = parseInt(num1.value);
    let valor2 = parseInt(num2.value);
    let opSelect = op.value;
    let resultado;


if (opSelect === "+") {
    resultado = somar(valor1, valor2);
} else if (opSelect === "-") {
    resultado = subtrair(valor1, valor2);
} else if (opSelect === "*") {
    resultado = multiplicar(valor1, valor2);
} else if (opSelect === "/") {
    resultado = dividir(valor1, valor2);
}

document.getElementById("result").textContent = "Resultado: " + resultado;
}