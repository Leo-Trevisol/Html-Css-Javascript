var entrada = document.getElementById('hrEntrada')
var saida = document.getElementById('hrSaida')


function somar(){   
    var entrada1 = Number(entrada.value)
    var saida1 = Number(saida.value)    

    var horas = saida1 - entrada1

    var valor = 0

  for(var i = 0; horas<i; i++){
    if(i <3){
       valor = (valor +5)
    }

    if(i >2 || i<5 ){
       valor = valor +5
    }

    if(i > 4){
       valor = valor + 1
    }

  }
   
  alert(valor)


    
}

