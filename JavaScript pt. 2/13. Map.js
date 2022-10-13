// Relembrando: Diferentes formas de escrever a mesma função:


/*const newArray0 = numbers.map(function (number) {
    return number * 2
})

const newArray1 = numbers.map((number) => {
    return number * 2
})

const newArray2 = numbers.map((number) => number * 2)*/

// Podemos escrever a função fora do map. 
// Para isso, vamos usar a forma mais curta: 

const numbers = [1,2,3,4]

const double = number => number * 2

const newArray3 = numbers.map(double)

console.log(newArray3)

// Vantagem de fazer desta forma: empilhar vários maps


const double2 = number => number * 2
const sum = number => number + 10


const newArray4 = numbers.map(double2).map(sum)

console.log(newArray4)

// Outro exemplo:


const value =[20,30,10,5]

const double3 = item => item * 2
const toReal = item => `R$ ${item.toFixed(2)}`

const newValue = value.map(double).map(toReal)

console.log(newValue)

