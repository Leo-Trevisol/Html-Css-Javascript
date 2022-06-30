var bt = document.getElementById('itens4')

bt.addEventListener('click',verifica)

function verifica(){

var num1 = document.getElementById('inicio')
var value1 = (num1.value)
var num2 = document.getElementById('fim')
var value2 = (num2.value)
var num3 = document.getElementById('passo')
var value3 = (num3.value)
var text = document.getElementById('view')

for(var i = value1; i>value2; i++){

    text.innerHTML = Number(i)

}



}