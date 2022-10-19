var txt = document.getElementById('frase')

var frase = "the book is on the table"

var fraseV = frase.split("") //tranforma cada letra numa posicao do vetor

var frase2 = fraseV.join("**") //vira uma frase com **

frase = frase.replace("table", "chair") 

txt.innerHTML = `${fraseV}`






