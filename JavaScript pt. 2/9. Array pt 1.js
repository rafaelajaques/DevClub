const students = ['João', 'Maria', 'Pedro', 'Carla', 'Bia', 'Mauricio']

// Push - adiciona um item ao final 

students.push('Rodolfo')

console.log(students)

// Lenght - mostra o tamanho do array

console.log(students.length)

// Sort - coloca os itens em ordem alfabética

console.log(students.sort())

// Delete - exclui o item da posição desejada, mas não muda a posição dos demais

delete students[0]
console.log(students)
