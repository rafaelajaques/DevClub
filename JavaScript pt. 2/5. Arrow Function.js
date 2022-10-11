const sum = function (number1, number2){
    return number1 + number2
}

// Para ser uma Arrow Function ela recebe esse formato:

const sumTwo = (number1, number2) => number1 + number2 

/*Não precisa incluir "function"
Com o sinal => o JS já entende que precisa retornar

Arrow function sem parâmetro:
const sumTwo = () =>

Arrow function com apenas 1 parâmetro não precisa colocar parênteses:
const sumTwo = number1 =>

*/

const firstNumber = 10
const seccondNumber = 20

const result = sum(firstNumber, seccondNumber)
console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma é ${result}`)