var dia = document.getElementById('dia')
var mes = document.getElementById('mes')
var ano = document.getElementById('ano')
var txt = document.getElementById('total')




function somar(){

    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var mesAtual = agora.getMonth()
    var diaAtual = agora.getDate()

    var dia1 = Number(dia.value)
    var mes1 = Number(mes.value)
    var ano1 = Number(ano.value)

    var anoTotal = anoAtual - ano1
    var mesTotal = 0

    if(mes1 < mesAtual){
        mesTotal = mesAtual - mes1
    }else{
        mesTotal = 12 - mes1
    }

    var diaTotal = 0
    
    if(dia1 < diaAtual){
        diaTotal = diaAtual - dia1
    }else{
        diaTotal = 30 - dia1
    }


    txt.innerHTML = `Voce tem: ${anoTotal} e ${mesTotal} e ${diaTotal}`
    

}