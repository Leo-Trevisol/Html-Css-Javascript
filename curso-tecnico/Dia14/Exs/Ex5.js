var dia = document.getElementById('dia')
var mes = document.getElementById('mes')
var ano = document.getElementById('ano')
var txt = document.getElementById('total')




function somar(){

    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var mesAtual = agora.getMonth() + 1
    var diaAtual = agora.getDate()

    var dia1 = Number(dia.value)
    var mes1 = Number(mes.value)
    var ano1 = Number(ano.value)

    var anoTotal = 0
    var mesTotal = 0
    var diaTotal = 0

    anoTotal = anoAtual - ano1
    
 

    if(mes1>mesAtual){
        anoTotal = anoTotal -1
        mesTotal = 12-(mes1-mesAtual)
    }else{
        mesTotal = mesAtual-mes1
    }

  
    if(dia1 > diaAtual){
        diaTotal = 30 - (dia1 - diaAtual)
        mesTotal = mesTotal-1
    }else{
        diaTotal = diaAtual - dia1
        
    }
   

    txt.innerHTML = `Voce tem aproximadamente: ${anoTotal} anos,  ${mesTotal} meses e ${diaTotal} dias`
    

}