// EVENTLISTENER ===


var a = document.getElementById('area')
a.addEventListener('click', clicou)
a.addEventListener('mouseenter', entrou)
a.addEventListener('mouseout', saiu)


function clicou(){

    a.innerHTML = 'CLICOU!'
    a.style.background = 'red'

}

function entrou(){
    a.innerHTML = 'ENTROU!'
    a.style.background = 'green'
}

function saiu(){
    a.innerHTML = 'SAIU!'
    a.style.background = 'blue'
}