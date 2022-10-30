var text = document.getElementById('view')
var imagem1 = document.getElementById('imgcandidato')
var nomecand = document.getElementById('nomecand')
var btdelete = document.getElementById('btdelete')
const listbt = document.querySelectorAll(".bt");
var candidato = document.getElementById('candidato')
var container1 = document.getElementById('container1')
var container2 = document.getElementById('container2')

var candidato1 = '69'
var candidato2 = '55'

var canddigitado = ''

var numero = ''
var horario = ''

var tamanho = new Array()
var lstcandidatos = new Array()

function print(num){

  

if(tamanho.length>1){
    alert('Apenas 2 digitos')
}else{
    tamanho.push(1)
    text.value += num
    canddigitado += '' + num
}

if(canddigitado == candidato1){
    imagem1.style.backgroundImage = 'url(imgs/therock.jpeg)'
    imagem1.style.backgroundRepeat = 'no-repeat'
     imagem1.style.display = 'block'
     candidato.style.display = 'block'
     nomecand.innerHTML = 'The rock baiano'
     numero = candidato1
     horario = 'manha'
}

if(canddigitado == candidato2){
    imagem1.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
    imagem1.style.backgroundRepeat = 'no-repeat'
    imagem1.style.backgroundSize = 'cover'
    imagem1.style.display = 'block'
    candidato.style.display = 'block'
    nomecand.innerHTML = 'Van Desel'
    numero = candidato2
    horario = 'tarde'

}

if(canddigitado.length > 1 && canddigitado != candidato1 && canddigitado != candidato2){
    imagem1.style.backgroundImage = 'url(imgs/nulo.jpeg)'
    imagem1.style.backgroundRepeat = 'no-repeat'
    imagem1.style.backgroundSize = 'cover'
    imagem1.style.backgroundPosition = 'center'
    imagem1.style.display = 'block'
    candidato.style.display = 'block'
    nomecand.innerHTML = 'Voto em branco'
    numero = 1
}


}

function confirmAction() {
    if(canddigitado.length <= 1){
        alert('Numero invalido!')
       
    }else{
    let confirmAction = confirm("Tem certeza do seu voto?");
    if (confirmAction) {
        addVoto(numero, horario)
        alert("Voto gravado com sucesso!");
        deletar()
    } 
}
  }

function deletar(){
    canddigitado = ''
    text.value = ''
    tamanho = new Array()
    candidato.style.display = 'none'
}

function conferir(){

    let confirmAction = confirm("Tem certeza que deseja conferir a votação?");
    if (confirmAction) {
    container1.style.display = 'none'
    container2.style.display = 'block'
    let contagem = 0
    for(let i = 0; i< lstcandidatos.length; i++){
        if(lstcandidatos[i].numerocand == 55){
           contagem++
        }
    }
    alert(contagem)

    }
}

class Voto{
    constructor(numerocand, horavoto){
        this.numerocand = numerocand;
        this.horavoto = horavoto;
    }
}

function addVoto(numero, horario){

    let myCand1 = new Voto(numero, horario);
     lstcandidatos.push(myCand1)

}

