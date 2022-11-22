var lista = new Array()

var bt = document.getElementById('bt')

bt.addEventListener('click', add())



function add(){
    var txt = document.getElementById('text')
    lista.push(txt.value)
    var cont = document.getElementById('list')
    cont.innerHTML = ''
    for (let i =0; i <lista.length; i++){
        cont.innerHTML += lista[i]
    }
}
