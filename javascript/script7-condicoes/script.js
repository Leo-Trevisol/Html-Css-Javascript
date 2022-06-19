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
bt.addEventListener('click', definirhora)
bt.addEventListener('click', clicar)

//FUNCAO QUE ESCREVE O TEXTO ===

function clicar(){
    
    time.innerHTML = `Voce esta no ano ${ano}, no mes ${mes}, no dia ${dia} <br>
     e agora sao ${hora}, ${min} minutos e ${sec} segundos.`

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

    if(hora <= 11){
    for(var i=0; i==hora; i++ ){

        if(hora == 0){
            hora = `Meia noite`
        }
        if(hora == 1){
            hora = `1 da manhã`
        }
        if(hora == 2){
            hora = `2 da manhã`
        }
        if(hora == 3){
            hora = `3 da manhã`
        }
        if(hora == 4){
            hora = `4 da manhã`
        }
        if(hora == 5){
            hora = `5 da manhã`
        }
        if(hora == 6){
            hora = `6 da manhã`
        }
        if(hora == 7){
            hora = `7 da manhã`
        }
        if(hora == 8){
            hora = `8 da manhã`
        }
        if(hora == 9){
            hora = `9 da manhã`
        }
        if(hora == 10){
            hora = `10 da manhã`
        }
        if(hora == 11){
            hora = `11 da manhã`
        }

    }
}

    if(hora >= 12){
        for(var i=0; i==hora; i++ ){

            if(hora == 0){
                hora = `Meio dia`
            }
            if(hora == 1){
                hora = `1 da tarde`
            }
            if(hora == 2){
                hora = `2 da tarde`
            }
            if(hora == 3){
                hora = `3 da tarde`
            }
            if(hora == 4){
                hora = `4 da tarde`
            }
            if(hora == 5){
                hora = `5 da tarde`
            }
            if(hora == 6){
                hora = `6 da tarde`
            }
            if(hora == 7){
                hora = `7 da noite`
            }
            if(hora == 8){
                hora = `8 da noite`
            }
            if(hora == 9){
                hora = `9 da noite`
            }
            if(hora == 10){
                hora = `10 da noite`
            }
            if(hora == 11){
                hora = `11 da noite`
            }

    }
    }
}



