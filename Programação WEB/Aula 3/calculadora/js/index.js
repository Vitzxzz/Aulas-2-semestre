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


function somar(){
    let n1res = parseInt(num1.value);
    let n2res = parseInt(num2.value);
    const result = n1res + n2res
    resultado.innerHTML = result
}

function subtrair(){
    let n1res = parseInt(num1.value);
    let n2res = parseInt(num2.value);
    const result = n1res - n2res
    resultado.innerHTML = result
}

function dividir(){
    let n1res = parseInt(num1.value);
    let n2res = parseInt(num2.value);
    const result = n1res / n2res
    resultado.innerHTML = result
}

function multiplicar(){
    let n1res = parseInt(num1.value);
    let n2res = parseInt(num2.value);
    const result = n1res * n2res
    resultado.innerHTML = result
}
function limparres(){
    resultado.innerHTML = "   "
}

btnLimpar.onclick = limparres
soma.onclick = somar
subtrai.onclick = subtrair
divide.onclick = dividir
multiplica.onclick = multiplicar