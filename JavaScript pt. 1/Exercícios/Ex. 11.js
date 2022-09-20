// [ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado.
// porém, os 2 nomes devem estar em 1 objeto. Ex: const object1 = {firstName:"João", secondName:"Maria"}
// João e João, imprime true. João e Maria, imprime false.

const names = {firstName:"João", secondName:"João"}

console.log(names.firstName === names.secondName)

const names2 = {thirdName: "Maria", fourthName: "José"}

console.log(names2.thirdName === names2.fourthName)