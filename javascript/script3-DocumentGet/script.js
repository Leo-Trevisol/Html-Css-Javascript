

//PEGANDO O ELEMENTO PELO ID === 

var ide = document.getElementById('aga')
ide.style.background = 'green'

//PEGANDO O ELEMENTO PELA TAG ===

var teg = document.getElementsByTagName('p')[0]
teg.style.background = 'white'

//PEGANDO O ELEMENTO PELA CLASSE === 

var para = document.getElementsByClassName('pe')[1]
para.style.background = 'blue'
document.write(para.innerHTML)

//PEGANDO ELEMENTO PELO QUERYSELECTOR css === 

var j = document.querySelector('.pei')
j.style.background = 'white'

