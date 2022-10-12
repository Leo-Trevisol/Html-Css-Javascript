var salario = document.getElementById('salario')
var dias = document.getElementById('dias')
var entrada = document.getElementById('hrEntrada')
var saida = document.getElementById('hrSaida')
var extra = document.getElementById('extra')
var pagar = document.getElementById('pagar')


function somar(){
    var salario1 = Number(salario.value)
    var dias1 = Number(dias.value)
    var entrada1 = Number(entrada.value)
    var saida1 = Number(saida.value)
    var extra1 = Number(extra.value)

    var somaHoras = entrada1 - saida1;
    var salarioDia = (salario1/dias1);

    var salarioHora = (salarioDia/somaHoras)

   // var extraHora = (extra1 

   var extraHora = ((salarioHora + (salarioHora/100) * 20) * extra1) *-1

   var salTotal = salario1 + extraHora

   pagar.innerHTML = `Seu salario com suas ${extra1} horas extras: ${salTotal}`
}