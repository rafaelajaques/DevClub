/* [ ] Crie 5 objetos nesse formato

{
    nome: ""
    idade: ""
    sexo: ""
    profissão: ""
    nacionalidade: ""

}

Ao rodar o programa deve imprimir se a pessoa é aprovada ou não no processo.
Para ser aprovada, a pessoa deve ser maior de idade e brasileira. */

const personOne = {
    nome: "Rafaela",
    idade: 32,
    sexo: "female",
    profissão: "desenvolvedora",
    nacionalidade: "brasileira"

}

const personTwo ={
    nome: "Maria",
    idade: 45,
    sexo: "female",
    profissão: "advogada",
    nacionalidade: "brasileira"

}

const personThree ={
    nome: "Ana",
    idade: 37,
    sexo: "female",
    profissão: "médica",
    nacionalidade: "uruguaia"

}

const personFour ={
    nome: "João",
    idade: 25,
    sexo: "male",
    profissão: "engenheiro",
    nacionalidade: "chilena"

}

const personFive ={
    nome: "Pedro",
    idade: 12,
    sexo: "male",
    profissão: "professor",
    nacionalidade: "brasileira"

}


if(personOne.nacionalidade === "brasileira" && personOne.idade >= 18){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}

if(personTwo.nacionalidade === "brasileira" && personTwo.idade >= 18){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}


if(personThree.nacionalidade === "brasileira" && personThree.idade >= 18){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}

if(personFour.nacionalidade === "brasileira" && personFour.idade >= 18){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}

if(personFive.nacionalidade === "brasileira" && personFive.idade >= 18){
    console.log('APROVADO')
}
else{
    console.log('REPROVADO')
}


