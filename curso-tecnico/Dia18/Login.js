var bt = document.getElementById('bt')
var senha = document.getElementById('senha')


bt.addEventListener("click", function() {
   // window.location.href = 'Login2.html'
    var sen = senha.value

   var senhaV = sen.split("")
   var confere1 = true

    if(senhaV.length < 6 || senha.length > 8){
        confere1 = false
    }else{
        for(i =0; i<senhaV.length;i++){
            if(senhaV.charCodeAt(i) > 48 && senhaV.charCodeAt(i) <=57){
                if(senhaV.charCodeAt(i + 1) > 48 && senhaV.charCodeAt(i + 1) <=57){
                    var num = ((senha.charCodeAt(i) - 48) * 10) + (charCodeAt(i + 1)-48)
                    if(num%3 != 0 || num%7 != 0){
                        confere1 = false
                        break
                    }

                }
            }
        }

        



    }


   for(let i =0; i<senhaV.length; i++){
    if(confereMaisculo(senhaV[i])){
        confere1 = true
    }
   }
   alert(confere1)

 });

 var vet = new Array()

for (let i =10; i<100;i++){
    vet.push(i)
}

 function confereNumeroDivisivel(numero){

    var confere = false

    for(let i = 0; i<vet.length;i++){
        if(numero == vet[i]){

            if(numero%3 == 0 || numero%7 == 0){
                confere = true
            }
            
        }
    }

    return confere

 }

 function confereMaisculo(){



 }
