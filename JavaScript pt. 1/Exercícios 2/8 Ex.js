/* [ ] Faça um programa que leia os números e diga se ele é
    - ímpar
    - par
    - um número primo, é primo e ímpar
    - é par e dividível por 5 
    */

const number = 17

if (number % 2 === 0) {
    if (number % 5 === 0) console.log('O número é par e divisível por 5')
    else console.log('O número é par e não é divisível por 5')
} else {

    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log('Ele é ímpar, mas não é primo')
            break
        } else {
            if (i === number - 1) console.log('Ele é um número primo')
        }
}