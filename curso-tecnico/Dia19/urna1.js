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

const teclaAudio = new Audio('clique.mp3');
const confirmaAudio = new Audio('confirma.mp3')

function print(num){

    teclaAudio.currentTime = 0

if(tamanho.length>1){
    alert('Apenas 2 digitos')
}else{
    tamanho.push(1)
    text.value += num
    canddigitado += '' + num
    teclaAudio.play();

    
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
        confirmaAudio.play();
        addVoto(numero, horario)
        deletar()
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
    container2.style.display = 'flex'
    let contagem1 = 0
    let contagem2 = 0
    let contagem3 = 0

    for(let i = 0; i< lstcandidatos.length; i++){
        if(lstcandidatos[i].numerocand == 69){
           contagem1++
        }else{

            if(lstcandidatos[i].numerocand == 55){
                contagem2++
             }else{
                contagem3++
             }
        }


    }
    definecand(contagem1, contagem2, contagem3)

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

function definecand(cont1, cont2, cont3){

    var foto1 = document.getElementById('fotocand1')
    var nome1 = document.getElementById('nomecand1')
    var porcentagem1 = document.getElementById('porcentagem1')

    var foto2 = document.getElementById('fotocand2')
    var nome2 = document.getElementById('nomecand2')
    var porcentagem2 = document.getElementById('porcentagem2')


    var foto3 = document.getElementById('fotocand3')
    var nome3 = document.getElementById('nomecand3')
    var porcentagem3 = document.getElementById('porcentagem3')


    if(cont1 >= cont2 && cont1 >= cont3){
        foto1.style.backgroundImage = 'url(imgs/therock.jpeg)'
        foto1.style.backgroundSize = 'cover'
        nome1.innerHTML = 'The rock baiano'
        porcentagem1.innerHTML = `Em primeiro lugar com ${cont1} votos`
        if(cont2 >= cont3){
            foto2.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
            foto2.style.backgroundSize = 'cover'
            nome2.innerHTML = 'Van Desel'
            porcentagem2.innerHTML = `Em segundo lugar com ${cont2} votos`
            foto3.style.backgroundImage = 'url(imgs/nulo.jpeg)'
            foto3.style.backgroundSize = 'cover'
            nome3.innerHTML = 'Voto Nulo'
            porcentagem3.innerHTML = `${cont3} votos nulos`

        }else{
            foto2.style.backgroundImage = 'url(imgs/nulo.jpeg)'
            foto2.style.backgroundSize = 'cover'
            nome2.innerHTML = 'Voto nulo'
            porcentagem2.innerHTML = `${cont3} votos nulos`
            foto3.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
            foto3.style.backgroundSize = 'cover'
            nome3.innerHTML = 'Van Desel'
            porcentagem3.innerHTML = `Em segundo lugar com ${cont2} votos`
        }
    }else{
        if(cont2 >= cont1 && cont2 >= cont3){
            foto1.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
            foto1.style.backgroundSize = 'cover'
            nome1.innerHTML = 'Van Desel'
            porcentagem1.innerHTML = `Em primeiro lugar com ${cont2} votos`
            if(cont1 >= cont3){
                foto2.style.backgroundImage = 'url(imgs/therock.jpeg)'
                foto2.style.backgroundSize = 'cover'
                nome2.innerHTML = 'The rock baiano'
                porcentagem2.innerHTML = `Em segundo lugar com ${cont1} votos`
                foto3.style.backgroundImage = 'url(imgs/nulo.jpeg)'
                foto3.style.backgroundSize = 'cover'
                nome3.innerHTML = 'Voto Nulo'
                porcentagem3.innerHTML = `${cont3} votos nulos`
            }else{
                foto2.style.backgroundImage = 'url(imgs/nulo.jpeg)'
                foto2.style.backgroundSize = 'cover'
                nome2.innerHTML = 'Voto nulo'
                porcentagem2.innerHTML = `${cont3} votos nulos`
                foto3.style.backgroundImage = 'url(imgs/therock.jpeg)'
                foto3.style.backgroundSize = 'cover'
                nome3.innerHTML = 'The rock baiano'
                porcentagem3.innerHTML = `Em segundo lugar com ${cont1} votos`
            }
        }else{
            if(cont3 >= cont1 && cont3 >= cont2){
                foto1.style.backgroundImage = 'url(imgs/nulo.jpeg)'
                foto1.style.backgroundSize = 'cover'
                nome1.innerHTML = 'Voto nulo'
                porcentagem1.innerHTML = `${cont3} votos nulos`
                if(cont1 >= cont2){
                    foto2.style.backgroundImage = 'url(imgs/therock.jpeg)'
                    foto2.style.backgroundSize = 'cover'
                    nome2.innerHTML = 'The rock baiano'
                    porcentagem2.innerHTML = `Em primeiro lugar com ${cont1} votos`
                    foto3.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
                    foto3.style.backgroundSize = 'cover'
                    nome3.innerHTML = 'Van Desel'
                    porcentagem3.innerHTML = `Em segundo lugar com ${cont2} votos`

                }else{
                    foto2.style.backgroundImage = 'url(imgs/vindiesel.jpeg)'
                    foto2.style.backgroundSize = 'cover'
                    nome2.innerHTML = 'Van Desel'
                    porcentagem2.innerHTML = `Em primeiro lugar com ${cont2} votos`
                    foto3.style.backgroundImage = 'url(imgs/therock.jpeg)'
                    foto3.style.backgroundSize = 'cover'
                    nome3.innerHTML = 'The rock baiano'
                    porcentagem3.innerHTML = `Em segundo lugar com ${cont1} votos`

                }
        }
    }

    }

}

