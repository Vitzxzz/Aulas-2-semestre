const iptNum1 = document.getElementById("iptNum1");
const iptNum2 = document.getElementById("iptNum2");
const btnenviar = document.getElementById("btnenviar");
const maiorNUM = document.getElementById("maiorNUM");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

function cliquei(){
    console.log(iptNum1.value, iptNum2.value)
    if(iptNum1.value>iptNum2.value){
       maiorNUM.innerHTML = iptNum1.value
       num1.classList.toggle('definecor');
    }
    else{
        maiorNUM.innerHTML = iptNum2.value
        num2.classList.toggle('definecor');
    }
}

btnenviar.onclick = cliquei