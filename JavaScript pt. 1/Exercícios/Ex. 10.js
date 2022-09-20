// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// porém, os 2 nomes devem estar em 2 objetos separados. Ex: const object1 = {name:"João"}, object2 = {name:"Maria"}
// João e João, imprime true. João e Maria, imprime false.

const personOne = {
    name: "João"
}
const personTwo = {
    name: "Maria"
}

console.log(personOne.name===personTwo.name)

const personThree = {
    name: "José"
}
const personFour = {
    name: "José"
}

console.log(personThree.name === personFour.name)
