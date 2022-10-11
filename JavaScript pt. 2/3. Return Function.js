
function sum(number1, number2){
    return number1 + number2
}

/* Também poderia ter deixado a função dessa forma:

function sum(number1, number2){
    const result = number1 + number2
    return result
}

Obs1: tudo o que vier após o "return" é o que vai aparecer 
Obs2: após o "return" a função para de rodar
Obs3: o uso do return depende de cada caso

*/

const firstNumber = 10
const seccondNumber = 20


console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma é ${sum(firstNumber, seccondNumber)}`)