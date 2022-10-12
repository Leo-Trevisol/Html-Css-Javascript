var entrada = document.getElementById('hrEntrada')
var saida = document.getElementById('hrSaida')
var pagar = document.getElementById('pagar')


function somar() {
   var entrada1 = Number(entrada.value)
   var saida1 = Number(saida.value)

   var horas = saida1 - entrada1

   var valor = 0

   for(let i=0; i<horas;i++){

      if(i<2){
         valor = valor +5
      }

      if(i >= 2 && i<4){
      valor = valor +2
   }

   if(i>=4){
      valor = valor +1
   }

}

   pagar.innerHTML = `Voce ficou ${horas} hora(s) no estacionamento e pagara: R$ ${valor}`

}

