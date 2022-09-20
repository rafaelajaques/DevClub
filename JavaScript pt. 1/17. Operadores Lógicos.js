/* 

&& ⟶ E (Filho obediente)

true && true = true
true && false = false
false && false = false

|| ⟶ OU (Filho espertinho)

true || true = true
true || false = true
false || false = false

! ⟶ NEGAÇÃO (Filho rebelde)

!true = false
!false = true

*/

console.log (true && true)
console.log (true && false)
console.log (false && false)

console.log (true || true)
console.log (true || false)
console.log (false || false)

console.log (!true)
console.log (!false)

/* 
O que é necessário para fazer uma transferência bancária?

- Ter dinheiro na conta E
- A conta não estar bloqueada E
- A conta de destino estar correta

O que é necessário para desbloquear a rela de um celular?

- Digitar a senha correta OU
- Fazer o reconhecimento por digital OU
- Fazer o reconhecimento facial

*/

// É possível inverter uma lógica inteira 

console.log (!(true && true && true)) // se tudo o que estiver ali for verdadeiro, ao final inverter

console.log(!(!(true && true && true) && (false && true || true)))