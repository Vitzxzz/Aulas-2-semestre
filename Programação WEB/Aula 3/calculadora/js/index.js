const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const soma = document.getElementById("soma")
const subtrai = document.getElementById("subtrai")
const multiplica = document.getElementById("multiplica")
const divide = document.getElementById("divide")
const limpar = document.getElementById("limpar")
const confirmar = document.getElementById("confirmar")
const resultado = document.getElementById("resultado")
const btnConfirmar = document.getElementById("btnConfirmar")
const btnLimpar = document.getElementById("btnLimpar")
let operacao = " ";

function somar(){
    operacao ="soma";
}

function subtrair(){
    operacao ="subtrair";
}

function dividir(){
    operacao ="dividir";
}

function multiplicar(){
    operacao ="multiplicar";
}

function confirma(){
    let n1res = parseInt(num1.value);
    let n2res = parseInt(num2.value);
    let result = 0;
    if(operacao === "soma"){
        result = n1res + n2res
        resultado.innerHTML= result
    }
    else if(operacao === "subtrair"){
        result = n1res - n2res
        resultado.innerHTML= result
    }
    else if(operacao === "dividir"){
        result = n1res / n2res
        resultado.innerHTML= result
    }
    else if(operacao === "multiplicar"){
        result = n1res * n2res
        resultado.innerHTML= result
    }
}


function limpa_resp(){
    num1.value = ""
    num2.value = ""
    operacao = ""
    resultado.innerHTML = ""
}


btnLimpar.onclick = limpa_resp
btnConfirmar.onclick = confirma
soma.onclick = somar
subtrai.onclick = subtrair
multiplica.onclick = multiplicar
divide.onclick = dividir