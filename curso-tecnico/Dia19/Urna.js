var text = document.getElementById('view')
var btconfirm = document.getElementById('btconfirm')
var imagem1 = document.getElementById('imgcandidato')

const listbt = document.querySelectorAll(".bt");

var candidato1 = 69
var candidato2 = 55

var tamanho = new Array()



function print(){

    for(let i =0; i<listbt.length;i++){
        listbt[i].addEventListener('click', alert(listbt[i].value))
    }

if(tamanho.length>1){
    alert('Apenas 2 digitos')
}else{
    tamanho.push(1)
    text.value += '1'
   // imagem1.style.display = 'block'
}


}


function confere(){

}