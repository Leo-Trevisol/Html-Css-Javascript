

var name = prompt('Enter your name:')
var age = prompt('Enter you age:')
var grade = prompt('Enter your school grade:')
var cash = prompt('Enter your cash:')

  var test = ('The student ' + name + ' with ' +  age + ' years old, and grade ' + grade)
  alert(test)
 document.write(`the student ${name} with ${age} years old and grade: ${grade} <br>`)
 document.write(`${name}, your name in uppercase: ${name.toUpperCase()} <br> `)
 document.write(`${name}, your name have: ${(name.lenght)} <br> `)

 




/* NODE ===
 > var cash = 1500
undefined
> cash.toFixed(2)
'1500.00'
> cash.toFixed(2).replace('.',',')
'1500,00'
> cash = 1500.5
1500.5
> cash.toFixed(2)
'1500.50'
> cash.toFixed(2).replace('.',',')
'1500,50'
> cash.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL')
cash.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL')
                                                                ^

Uncaught SyntaxError: Unexpected token ')'
> cash.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})
'R$ 1.500,50'

*/





