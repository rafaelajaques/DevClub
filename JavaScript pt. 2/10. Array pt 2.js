const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

// Splice - Unir / ligar

students.splice(1,2) // (a partir de que posição , quantos itens retirar)

console.log(students)


students.splice(1,0,'Rodolfo') // (a partir de que posição , quantos itens retirar (0 - se não), incluir)

console.log(students)

// Slice - Fatiar

// Cria um novo array 
// Salvar em uma variável

const newStudents = students.slice(1,3) // (a partir de que item, onde pára (não inclui esta posição))
console.log(newStudents)

// Pop - tira o último item do array

students.pop()

console.log(students)

// Shift - tira o primeiro item do array

students.shift()

console.log(students)