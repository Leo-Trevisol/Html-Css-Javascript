var produto = document.getElementById('produto')
var valor = document.getElementById('valor')

var btInsereInicio = document.getElementById('insereInicio')
var btInsereMeio = document.getElementById('insereMeio')
var btInsereFim = document.getElementById('insereFim')
var btExcluiInicio = document.getElementById('excluiInicio')
var btExcluiMeio = document.getElementById('excluiMeio')
var btExcluiFim = document.getElementById('excluiFim')
var btOrdena = document.getElementById('ordena')
var btOrdenaReverso = document.getElementById('ordenaReverso')
var texto = document.getElementById('area')

//btInsereInicio.addEventListener("click", insereInicioFc());

btInsereInicio.addEventListener("click", function() {
    insereInicioFc();
 });

btInsereMeio.addEventListener('onclick', insereMeioFc())
btInsereFim.addEventListener('onclick', insereFimFc())
btExcluiInicio.addEventListener('onclick', excluiInicioFc())
btExcluiMeio.addEventListener('onclick', excluiMeioFc())
btExcluiFim.addEventListener('onclick', excluiFimFc())
btOrdena.addEventListener('onclick', ordenaFc())
btOrdenaReverso.addEventListener('onclick', ordenaReversoFc())


let vet = new Array()

var produto1
var valor1

function iniciaVar(){
    produto1 = produto.value
    valor1 = Number(valor.value)
}


function insereInicioFc(){
    iniciaVar()
    document.getElementById("area").innerHTML="A<br>\
      B<br>\
      C<br>\
      D<br>";


}

function insereMeioFc(){
    iniciaVar()
}

function insereFimFc(){
    iniciaVar()
}

function excluiInicioFc(){
}

function excluiMeioFc(){
}

function excluiFimFc(){
}

function ordenaFc(){

}

function ordenaReversoFc(){

}

