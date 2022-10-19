var numero = document.getElementById('valor')
var extenso = document.getElementById('ext')

var numero1
var numeroV 



var centenaValue = ""
var milharValue = ""


function printar(){

    var extenso1 = ""

    var f = tamanho()

    var x = valores()

    if(f == 1){
     extenso1 = unidadeFc(valores()).toString()
    }

    if(f == 2){
        extenso1 = dezenaFc(valores()).toString()
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

function centena(centena){
    if(centena == 1){
        centena = "cem"
    }
    if(centena == 2){
        centena = "duzentos"
    }
    if(centena == 3){
        centena = "trezentos"
    }
    if(centena == 4){
        centena = "quatrocentos"
    }
    if(centena == 5){
        centena = "quinhentos"
    }
    if(centena == 6){
        centena = "seicentos"
    }
    if(centena == 7){
        centena = "setecentos"
    }
    if(centena == 8){
        centena = "oitocentos"
    }
    if(centena == 9){
        centena = "novecentos"
    }
   
}