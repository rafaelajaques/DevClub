// Os objetos possuem propriedades

const person = {
    name: "Rafaela",
    age: 32,
    sex: "female",
    height: 1.73,
    address: "Rua Vinte e Dois de Maio,6"
}

console.log(person)

console.log(person.age)

const personTwo = {
    name: "Rafaela",
    age: 32,
    sex: "female",
    height: 1.73,
    address: {
        street:"Rua Vinte e Dois de Maio",
        numer: 6,
        country: "Brasil"
    }
}

console.log(personTwo)

console.log(personTwo.address.street)