function sum(number1, number2){
    return number1 + number2
}


const firstNumber = 10
const seccondNumber = 20

const result = sum(firstNumber, seccondNumber)
console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${seccondNumber}`)
console.log(`A soma é ${result}`)

// Para ser uma função anônima, ela recebe esse formato:

const sum = function (number1, number2){
    return number1 + number2
}

// O resultado será o mesmo.