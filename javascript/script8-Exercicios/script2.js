
var bt = document.getElementById('bt')

bt.addEventListener('click',verifica)

function verifica(){

var idade = document.getElementById('ano')
var valor = Number(idade.value)
var texto = document.getElementById('text')
var img = document.getElementById('im')
var data = new Date()
var esseano = data.getFullYear()
valor = (esseano - valor)

    if(valor>=0 && valor<=2 ){
        img.src = 'idade/bebe.jpg' 
        texto.innerHTML = `VOCÊ É UM BEBÊ COM: <br>
        ${valor} ANO(S) DE IDADE`
    }

    if(valor>=2 && valor<= 12 ){
        img.src = 'idade/crianca.jpg' 
        texto.innerHTML = `VOCÊ É UMA CRIANCA COM: <br>
        ${valor} ANOS DE IDADE`
    }

    if(valor>=13 && valor<= 17 ){
        img.src = 'idade/adolescente.jpg' 
        texto.innerHTML = `VOCÊ É UM ADOLESCENTE COM: <br>
        ${valor} ANOS DE IDADE`
    }

    if(valor>=18 && valor<= 59 ){
        img.src = 'idade/adulto.jpg' 
        texto.innerHTML = `VOCÊ É UM ADULTO COM: <br>
        ${valor} ANOS DE IDADE`
    }

    if(valor>=60 && valor<= 99 ){
        img.src = 'idade/velho.jpg' 
        texto.innerHTML = `VOCÊ É UM IDOSO COM: <br>
        ${valor} ANOS DE IDADE`
    }

    console.log(valor)



}