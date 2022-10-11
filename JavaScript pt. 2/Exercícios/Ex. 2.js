// [ ] Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) 
// e escrever a tabuada de 1 a 10 do valor lido.

function tab (number){
    if(number > 10 || number < 1){
        console.log('Aceitamos SOMENTE  números entre 1 e 10')
        return
    }

    for(i=1; i<=10; i++){
        console.log(`${i} x ${number} = ${i * number} `)
    }
 
}

tab(9)