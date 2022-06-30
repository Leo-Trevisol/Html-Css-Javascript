
var bt = document.getElementById('bt')

bt.addEventListener('click',verifica)

function verifica(){

var idade = document.getElementById('ano')
var fsex = document.getElementsByName('sexo')
var valor = Number(idade.value)
var texto = document.getElementById('text')
var img = document.getElementById('im')
var data = new Date()
var esseano = data.getFullYear()
var gen = ''



if(valor == ''){

    texto.innerHTML = `Digite sua data de nascimento`
    img.src = 'idade/interrogacao.jpg' 


}else{

    if(fsex[0].checked){

     gen = 'Masculino'

    valor = (esseano - valor)

    if(valor>=0 && valor<=2 ){
        img.src = 'idade/bebe.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`
    }

    if(valor>=2 && valor<= 12 ){
        img.src = 'idade/crianca.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`
    }

    if(valor>=13 && valor<= 17 ){
        img.src = 'idade/adolescente.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=18 && valor<= 59 ){
        img.src = 'idade/adulto.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=60 && valor<= 99 ){
        img.src = 'idade/velho.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }
}else{


 if(fsex[1].checked){

    gen = 'Feminino'
    
    if(valor>=0 && valor<=2 ){
        img.src = 'idade/bebe.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=2 && valor<= 12 ){
        img.src = 'idade/crianca.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=13 && valor<= 17 ){
        img.src = 'idade/adolescente.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=18 && valor<= 59 ){
        img.src = 'idade/adulto.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

    if(valor>=60 && valor<= 99 ){
        img.src = 'idade/velho.jpg' 
        texto.innerHTML = `Genêro: ${gen}, Idade: ${valor} anos`

    }

}
}

}
}
