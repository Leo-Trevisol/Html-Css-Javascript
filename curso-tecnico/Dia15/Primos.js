var numero = document.getElementById('num')
var valor = document.getElementById('valor')

function calcular(){
    var numero1 = Number(numero.value)

    var cont = 0
    var verifica = false

    for(let i = 1; i<numero1+1; i++){
        if(numero1%i == 0){
            cont++
        }
    }

    if(cont >2){
        valor.innerHTML = `O numero ${numero1} nao eh primo`
    }else{
        valor.innerHTML = `O numero ${numero1} eh primo`

    }


    
}