var ok = document.querySelector('.bt')

ok.addEventListener('click', clicou)

function clicou(){
    var name = document.getElementById('name')
    var nam1 = (name.value)
    if(nam1 !== ""){
    var txtname = document.getElementById('nome')
    txtname.innerHTML = `O seu nome: ${nam1}.`
    }else{
        var txtname = document.getElementById('nome')
        txtname.innerHTML = `DIGITE SEU NOME .`
    }
    var no1 = document.getElementById('nota1')
    var notaum = Number(no1.value)
    if(notaum !== ""){
    var txtn1 = document.getElementById('n1')
    txtn1.innerHTML = `Primeira nota: ${notaum}.`
    }else{
        var txtname = document.getElementById('n1')
        txtname.innerHTML = `DIGITE SUA NOTA .`
    }

}