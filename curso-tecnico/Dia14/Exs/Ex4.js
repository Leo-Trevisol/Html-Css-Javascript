var hrComeco = document.getElementById('hrComeco')
var minComeco = document.getElementById('minComeco')
var hrFim = document.getElementById('hrFim')
var minFim = document.getElementById('minFim')






function somar(){
    var hr1 = Number(hrComeco.value)
    var min1 = Number(minComeco.value)
    var hr2 = Number(hrFim.value)
    var min2 = Number(minFim.value)


    var total1 = document.getElementById('total1')
    var total = document.getElementById('total')

    var dia = 24
    var horasTotal = 0;

    if(hr2> hr1){
         horasTotal = hr2 - hr1;
    }else{
         horasTotal = (dia-hr1)+hr2
    }

    var minTotal = min1 + min2;

    if(minTotal > 60){

        horasTotal = (horasTotal +1)
        minTotal =(minTotal -60)
    }

   
    var tempoTotal = (horasTotal*60)+minTotal;

   
    


    total.innerHTML = `O tempo do evento em minutos foi ${tempoTotal}`

    total1.innerHTML = `O tempo do evento em horas e minutos foi: ${horasTotal} Hrs e ${minTotal} minutos`

}