var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var but = document.getElementById('bt')
var soma = document.getElementById('soma')



function somar(){
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var num3 = Number(n3.value)

    var media = (num1 + num2 + num3)/3
     
    soma.innerHTML = `Nota 1 : <strong>${num1}</strong> ----  Nota 2 : <strong>${num2}</strong> ---- Nota 3: <strong>${num3}</strong> ---- E a media eh : <strong>${media}</strong>!!!!`
}