/* 

? ⟶ se
: ⟶ se não
*/

const rain = false
const umbrella = rain ? "levar guarda-chuva" : "deixar guarda-chuva"

console.log(umbrella)

/* 
Preciso transferir meu dinheiro
*/

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOk = balance && isNotBlocked && accountExist ? "TRANSFERÊNCIA REALIZADA" : "TRANSFERÊNCIA NEGADA"

console.log(transferOk)

