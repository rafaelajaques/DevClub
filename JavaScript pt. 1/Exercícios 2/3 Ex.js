// [ ]Faça um programa que gere um número aleatório entre 1 e 10. Esse número é o 'ganhador'.
// Então esse número também vai gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não.
// Em caso de ter ganhado mostra o prêmio. Se não ganhou mostra outra mensagem.

const numberOne = Math.floor(Math.random() * (10-1) + 1)

const numberTwo = Math.floor(Math.random() * (10-1) + 1)


console.log(numberOne, "Número ganhador")
console.log(numberTwo, "Número sorteado")

if(numberOne === numberTwo){
    console.log('GANHOU!')
}
else{
    console.log('Que pena. Não ganhou!')
}


