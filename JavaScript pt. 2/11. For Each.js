// FOR EACH - uSado com arrays



const students = [
    { name: 'Rodolfo', age: 25 },
    { name: 'Maria', age: 43 },
    { name: 'João', age: 21 },
    { name: 'Bruno', age: 43 },
    { name: 'Carla', age: 13 },
    { name: 'Ana', age: 20 },
    { name: 'Julio', age: 26 },
];

// Primeiro parâmetro: item

students.forEach((student) => {
    console.log(student)
})

// Segundo parâmetro: posição

students.forEach((student, index) => {
    console.log(student, index)
})

// Terceiro parâmetro: array completo

students.forEach((student, index, array) => {
    console.log(array)
})

/* PROBLEMA:

O marketing da empresa deseja fazer uma ação, mas para isso precisa saber a média de idade dos colaboradores.
Como ajudar usando a programação?
*/

let allStudentsAge = 0 

students.forEach((student, index) => {
    allStudentsAge += student.age
})

const averageAge = allStudentsAge / students.length

console.log(`A média de idade dos alunos é de ${averageAge.toFixed(0)} anos`) // toFixed: limita casas decimais

students.forEach((student, index) => {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`)
})


// Como seria ser ser arrow function:

students.forEach( function (student, index) {
    console.log(`O aluno chama-se ${student.name}, tem ${student.age} anos e está na posição ${index} do array`)
})