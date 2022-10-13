var entrada = document.getElementById('hrEntrada')
var saida = document.getElementById('hrSaida')
var pagar = document.getElementById('pagar')


function somar() {

   var entrada1 = Number(entrada.value)
   var saida1 = Number(saida.value)

   var horas = saida1 - entrada1

   var valor = 0

   if(entrada1 == 0 || saida1 == 0){
      pagar.innerHTML = `Preencha os campos!!!!!`

   }else{
   

   if(entrada1 > saida1){
      pagar.innerHTML = `Data de saida deve ser maior que a de entrada`
   }else{

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

if(horas == 0 ){
   valor = 5
   horas = 1
}



   pagar.innerHTML = `Voce ficou ${horas} hora(s) no estacionamento e pagara: R$ ${valor}`
}
   }

}

