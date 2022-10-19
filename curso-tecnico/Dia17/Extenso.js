var numero = document.getElementById('valor')
var extenso = document.getElementById('ext')

var numero1
var numeroV 




var milharValue = ""


function printar(){

    var extenso1 = ""

    var f = tamanho()

    var x = valores()

   

    if(f == 1){
     extenso1 = unidadeFc(valores()).toString()
    }

    if(f == 2){
        numero1 = numero.value
        numeroV = numero1.split("")

        var deze = dezenaFc(numeroV[0])
        var uni = unidadeFc(numeroV[1])
        if(numeroV[1] == 0 ){
            extenso1 = `${deze}`
        }else{
        extenso1 = `${deze} e ${uni}`
        }
    }


        if(f == 3){
        numero1 = numero.value
        numeroV = numero1.split("")

        var cent = centenaFc(numeroV[0])
        var deze = dezenaFc(numeroV[1])
        var uni = unidadeFc(numeroV[2])

        if(numeroV[1] == 0 && numeroV[2] == 0 ){
            extenso1 = `${cent}`
        }

        if(numeroV[1] == 0 && numeroV[2] != 0){
            extenso1 = `${cent} e ${uni}`
        }

        if(numeroV[1] != 0 && numeroV[2] == 0){
            extenso1 = `${cent} e ${deze}`
        }

        if(numero[1] == 1 ){
            var juntos = `${deze} + ${uni}`
            deze = dezenaFc(juntos)
        }

        alert(deze)

        extenso1 = `${cent} e ${deze} e ${uni}`
        }

    
    alert(extenso1)
   
}


function tamanho(){
     numero1 = numero.value
     numeroV = numero1.split("")
     return numeroV.length
}

function valores(){
    numero1 = numero.value
    return numero1
    
}


function unidadeFc(unidade){

    var unidadeValue = ""

if(unidade == 0){
    unidadeValue = "zero"
}
if(unidade == 1){
unidadeValue = "um"
}
if(unidade == 2){
    unidadeValue = "dois"
}
if(unidade == 3){
    unidadeValue = "tres"
}
if(unidade == 4){
    unidadeValue = "quatro"
}
if(unidade == 5){
    unidadeValue = "cinco"
}
if(unidade == 6){
    unidadeValue = "seis"
}
if(unidade == 7){
    unidadeValue = "sete"
}
if(unidade == 8){
    unidadeValue = "oito"
}
if(unidade == 9){
    unidadeValue = "nove"
}

return unidadeValue

}

function dezenaFc(dezena){

    var dezenaValue = ""

    if(dezena == 10){
        dezenaValue = "dez"
    }
    if(dezena == 11){
        dezenaValue = "onze"
    }
    if(dezena == 12){
        dezenaValue = "doze"
    }
    if(dezena == 13){
        dezenaValue = "treze"
    }
    if(dezena == 14){
        dezenaValue = "quatorze"
    }
    if(dezena == 15){
        dezenaValue = "quinze"
    }
    if(dezena == 16){
        dezenaValue = "desesseis"
    }
    if(dezena == 17){
        dezenaValue = "desessete"
    }
    if(dezena == 18){
        dezenaValue = "dezoito"
    }
    if(dezena ==19){
        dezenaValue = "dezenove"
    }
    if(dezena == 2){
        dezenaValue = "vinte"
    }
    if(dezena == 3){
        dezenaValue = "trinta"
    }
    if(dezena == 4){
        dezenaValue = "quarenta"
    }
    if(dezena == 5){
        dezenaValue = "cinquenta"
    }
    if(dezena == 6){
        dezenaValue = "sessenta"
    }
    if(dezena == 7){
        dezenaValue = "setenta"
    }
    if(dezena == 8){
        dezenaValue = "oitenta"
    }
    if(dezena == 9){
        dezenaValue = "noventa"
    }

    return dezenaValue
    
}

function centenaFc(centena){
    var centenaValue = ""

    if(centena == 1){
        centenaValue = "cem"
    }
    if(centena == 2){
        centenaValue = "duzentos"
    }
    if(centena == 3){
        centenaValue = "trezentos"
    }
    if(centena == 4){
        centenaValue = "quatrocentos"
    }
    if(centena == 5){
        centenaValue = "quinhentos"
    }
    if(centena == 6){
        centenaValue = "seicentos"
    }
    if(centena == 7){
        centenaValue = "setecentos"
    }
    if(centena == 8){
        centenaValue = "oitocentos"
    }
    if(centena == 9){
        centenaValue = "novecentos"
    }

    return centenaValue
   
}