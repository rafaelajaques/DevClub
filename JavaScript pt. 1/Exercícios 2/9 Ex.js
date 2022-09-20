/* [ ] Faça um programa que leia 4 números. Em cada caso ele deve retornar a mensagem condizente:
    - Todos os números são ímpares => TODOS OS NÚMEROS SÃO ÍMPARES
    - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES
    - Defalult 
    */

const numberOne = 65
const numberTwo = 25
const numberThree = 13
const numberFour = 99

if (numberOne % 2 === 0 && numberTwo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0) {
    console.log('Todos são pares')
} else if (numberOne % 2 !== 0 && numberTwo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0) {
    console.log('Todos são ímpares')
} else {
    console.log('Tudo misturado')
}