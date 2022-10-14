var numero = document.getElementById('num')
var valor = document.getElementById('valor')


function calcular(){
   var numero1 = Number(numero.value)

   var soma = 1
   valor.innerHTML = ``
   for(let i =1; i<numero1+1; i++){
    valor.innerHTML += `${i} x `
    soma = i * soma

   }

   
}