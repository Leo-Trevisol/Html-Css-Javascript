let vet = new Array()



for(let i =0; i<5; i++){

   vet.push(i) //adiciona

}

vet.pop() //remove o ultimo

vet.shift(); //remove o primeiro

vet.splice(4,1) //remove (posicao, qtd de elementos)

vet.unshift(8) //adiciona na primeira posicao

vet.push(5)

vet = vet.sort()

var um = document.getElementById('um')
var dois = document.getElementById('dois')
var tres = document.getElementById('tres')
var quatro = document.getElementById('quatro')
var cinco = document.getElementById('cinco')
var seis = document.getElementById('seis')
var sete = document.getElementById('sete')
var oito = document.getElementById('oito')
var nove = document.getElementById('nove')
var dez = document.getElementById('dez')
var onze = document.getElementById('onze')
var doze = document.getElementById('doze')


um.innerHTML = `${vet[0]}`
dois.innerHTML = `${vet[1]}`
tres.innerHTML = `${vet[2]}`
quatro.innerHTML = `${vet[3]}`
cinco.innerHTML = `${vet[4]}`
seis.innerHTML = `${vet[5]}`
sete.innerHTML = `${vet[6]}`
oito.innerHTML = `${vet[7]}`
nove.innerHTML = `${vet[8]}`
dez.innerHTML = `${vet[9]}`
onze.innerHTML = `${vet[10]}`
doze.innerHTML = `${vet[11]}`





