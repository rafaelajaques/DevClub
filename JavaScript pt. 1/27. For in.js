const student = {
    name: 'Caio',
    age: 30,
    sex: 'male'
}

for(let property in student){
    console.log(property)
}

for(let property in student){
    console.log(student[property])
}

for(let property in student){
    console.log(`${property}: ${student[property]}`)
}