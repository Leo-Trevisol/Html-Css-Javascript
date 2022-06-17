
//PEGANDO O ID DOS BOTOES DE OK ===
var calcula = document.querySelector('#btcalcula')


//ADICIONANDO EVENTOS NOS BOTOES ===
calcula.addEventListener('click', clicou)



//FUNCAO DE CLICAR ===
function clicou(){

//BOTAO OK DO NOME ===

    var name = document.getElementById('name')
    var nam1 = (name.value)
    var txtname = document.getElementById('nome')
    if(nam1 !== ""){
    txtname.innerHTML = `O seu nome: ${nam1}.`
    }else{
        txtname.innerHTML = `DIGITE SEU NOME!`
    }

//BOTAO OK DA NOTA 1 ===

    var nota1 = document.getElementById('nota1')
    var no1 = Number(nota1.value)
    var txtn1 = document.getElementById('n1')
    if(no1 !== 0){
        txtn1.innerHTML = `Primeira nota: ${no1}`
    }else{
        txtn1.innerHTML = `DIGITE A PRIMEIRA NOTA!`
    }

    //BOTAO DA NOTA 2 ===

    var nota2= document.getElementById('nota2')
    var no2 = Number(nota2.value)
    var txtn2 = document.getElementById('n2')
    if(no2 !== 0){
        txtn2.innerHTML = `Segunda nota: ${no2}`
    }else{
        txtn2.innerHTML = `DIGITE A SEGUNDA NOTA!`
    }

    //BOTAO DA NOTA 3 ===

    var nota3 = document.getElementById('nota3')
    var no3 = Number(nota3.value)
    var txtn3 = document.getElementById('n3')
    if(no3 != 0){
        txtn3.innerHTML = `Terceira nota: ${no3}`
    }else{
        txtn3.innerHTML = `DIGITE A TERCEIRA NOTA!`
    }

    //CAIXA DA MEDIA ===

    if(no1 !== 0 && no2 !==0 && no3 !== 0){

        var m = (no1 + no2 + no3)/3
        document.getElementById('media').value = ` ${m}`

    }

    //APROVADO OU REPROVADO ===

    var mediaescola = 7
    var resultado = document.getElementById('result')

    if(no1 !== 0 && no2 !==0 && no3 !== 0){

    if(m>mediaescola){

        resultado.value = `APROVADO!!`
    }else{
        resultado.value = `REPROVADO!!`
    }
}
}