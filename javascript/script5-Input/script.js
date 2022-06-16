
//FUNCAO PARA O BOTAO SOMAR === 

var a = document.getElementById('bt')
bt.addEventListener('click', somar)


function somar(){
    var um = document.getElementById('num1')
    var dois = document.getElementById('num2')
    var s = document.getElementById('soma')
    var nu1 = Number(um.value)
    var nu2 = Number(dois.value)
    var sum = nu1 + nu2
    

    s.innerHTML = `a soma de ${nu1} + ${nu2} eh: <strong> ${sum} </strong>`




}