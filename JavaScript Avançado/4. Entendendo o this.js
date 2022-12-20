/*
No JavaScrpipt, o this faz referência :

Node: module.exports
web: window

Escopo:

=> Global: Quamdo começamos a escrever nossa aplocação
        No contexto globa, o this faz referência ao objeto global,
        que é o objeto window no navegador

=> Local: por exemplo, dentro de uma função
*/

console.log(this === module.exports)

const person = {
    name: 'Rodolfo',
    age: 25,
    talk: function(){
        console.log(this.name)
    }
}

person.talk()

function myFunction(){
    this.console.log('Agora sou o global')
}

myFunction()