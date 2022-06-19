//PEGANDO OS IDs DOS COMPONENTES ===

var bt = document.getElementById('bthora') // ID BOTAO
var time = document.getElementById('tempo')
var timeutc = document.getElementById('utc')

//DEFININDO VARIAVEIS PARA TRABALHAR COM AS DATAS ===

var agora = new Date()
var ano = agora.getFullYear()
var mes = agora.getMonth()
var dia = agora.getDate()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var diasemana = agora.getDay()
var horamundial = agora.getUTCDate()

//EVENTOS DO BOTAO ===

bt.addEventListener('click', definirmes)
bt.addEventListener('click', clicar)

//FUNCAO QUE ESCREVE O TEXTO ===

function clicar(){
    
    time.innerHTML = `Voce esta no ano ${ano}, no mes ${mes}, no dia ${dia} <br>
     e agora sao ${hora} horas, ${min} minutos e ${sec} segundos.`

}


//FUNCAO QUE CONVERTE O NUMERO DO MES PARA O NOME DO MES ===

function definirmes(){

    switch (mes){
        case 0: 
        mes = `Janeiro`
        break
        case 1: 
        mes = `Fevereiro`
        break
        case 2: 
        mes.value = `Marco`
        break
        case 3: 
        mes = `Abril`
        break
        case 4: 
        mes = `Maio`
        break
        case 5: 
        mes = `Junho`
        break
        case 6: 
        mes = `Julho`
        break
        case 7: 
        mes = `Agosto`
        break
        case 8: 
        mes = `Setembro`
        break
        case 9: 
        mes = `Outubro`
        break
        case 10: 
        mes = `Novembro`
        break
        case 11: 
        mes = `Dezembro`
        break
    }
}

function definirhora(){

    switch(hora){
        case 0:
            hora = `Meia noite`
            break
        }
    }



