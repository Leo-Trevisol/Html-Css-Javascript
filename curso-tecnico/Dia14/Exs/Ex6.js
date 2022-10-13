var dia = document.getElementById('dia')
var mes = document.getElementById('mes')
var ano = document.getElementById('ano')
var total = document.getElementById('total')

function somar(){

    var dia1 = Number(dia.value)
    var mes1 = Number(mes.value)
    var ano1 = Number(ano.value)

    var agora = new Date()
    var anoAtual = agora.getFullYear()

   var validaDia = true
   var validaMes = true
   var validaMes31 = true
   var validaAno = true

   if(ano1 > anoAtual){
    validaAno = false
    total.innerHTML = `Ano invalido`
   }

   if(mes1 == 1 || mes1 == 3 || mes1 == 5 || mes1 == 7|| mes1 == 8 || mes1 == 10 || mes1 ==12  ){
        validaMes31 = true
   }

   if(mes1 == 4 || mes1 == 6 || mes1 == 9 || mes1 ==11){
        validaMes31 = false
   }

   if(dia1 == 31 && !validaMes31){
    total.innerHTML = `Invalido`
   }else{
    total.innerHTML = `Ano ok`
   }

   if(dia1 > 28 && mes1 ==2){
    if(ano1%4 == 0){
        total.innerHTML = `Ano bixesto ok`
    }else{
        total.innerHTML = `Ano invalido`
    }
   }



}