const person = {
    name: 'Rodolfo',
    age: 25,
    talk: function () {
        console.log('Hello, my name is ${this.name}')
    }
}

class Person {
    name;
    age;

    talk(){
        console.log('Hello, my name is ${this.name}')
    }
}

const newPerson = new Person()
const newPerson1 = new Person()
const newPerson2 = new Person()
const newPerson3 = new Person()

newPerson.name = 'Rodolfo'
newPerson.age = 28
newPerson.talk()
