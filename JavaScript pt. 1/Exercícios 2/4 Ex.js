// [ ]Faça um programa que receba 3 números inteiros e deve imprimir qual é o maior, qual é o menor. 

const firstNumber = 100
const seccondNumber = 200
const thirdNumber = 30

if(firstNumber > seccondNumber && firstNumber > thirdNumber){
    console.log('O primeiro é maior')
} else if(seccondNumber > thirdNumber) {
    console.log('O segundo é maior')
}
else {
    console.log('O terceiro é maior')
}

if(firstNumber < seccondNumber && firstNumber < thirdNumber){
    console.log('O primeiro é menor')
} else if(seccondNumber < thirdNumber) {
    console.log('O segundo é menor')
}
else {
    console.log('O terceiro é menor')
}