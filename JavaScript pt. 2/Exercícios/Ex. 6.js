/* [ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e 
número de filhos. A prefeitura deseja saber: 
- média do salário da população; 
- média do número de filhos; 
- maior salário; 
- O final da leitura de dados se dará com a entrada de um salário negativo. 
- Faça isso usando uma função!

*/

const people = [ 
    { 
      salary: 1500,
      child: 1
},

    { 
      salary: 6000,
      child: 3
},

    { 
      salary: 4500,
      child: 2
},

    {
      salary: 7000,
      child: 4
},

    { 
      salary: 3000,
      child: 0
},
    { 
      salary: -1000,
      child: 0
}
]
/*
function salaryAndChild(peopleInformation){

    let averageSalary = 0
    let averageChild = 0
    let highestSalary = 0

   for(let i = 0; i <= people.length; i++){

        const salary = people[i].salary
        const child = people[i].child

        if(salary > highestSalary) highestSalary = salary

        if(salary < 0){
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChild / i).toFixed(0)}`)
            console.log(`Maior salário R$${highestSalary}`)
            break
        } else{
            averageSalary = averageSalary + salary
            averageChild = averageChild += child
        }
   }
}
*/

function salaryAndChild(peopleInformation){

    let i = 0
    let averageSalary = 0
    let averageChild = 0
    let highestSalary = 0

    while(people[i].salary > 0){

        averageSalary = averageSalary + people[i].salary
        averageChild += people[i].child
        people[i].salary > highestSalary ? highestSalary = people[i].salary : highestSalary = highestSalary
        i++
    }
   
            console.log(`Média de salário R$${(averageSalary / i).toFixed(0)}`)
            console.log(`Média de filhos ${(averageChild / i).toFixed(0)}`)
            console.log(`Maior salário R$${highestSalary}`)
      
}

salaryAndChild()