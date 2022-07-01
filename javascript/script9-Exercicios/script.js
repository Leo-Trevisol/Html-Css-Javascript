var bt = document.getElementById('itens4')

bt.addEventListener('click',verifica)

function verifica(){

   

var num1 = document.getElementById('inicio')
var value1 = Number(num1.value)
var num2 = document.getElementById('fim')
var value2 = Number(num2.value)
var num3 = document.getElementById('passo')
var value3 = Number(num3.value)
var text = document.getElementById('view')

var value4 = text.value

text.innerHTML = ''

if(value1 != '' || value2 != '' || value3 != ''){

for(var i = value1; i<=value2; i+= value3){

 
        text.innerHTML += ` -> ${(i)}, ${value1}, ${value2}, ${value3}`

}

}else{

    text.innerHTML = `Digite em todos os tempos`

}

}