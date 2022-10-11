/* [ ] Escreva um programa onde, você cria uma função geradora de desconto.
A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira 
compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
Os descontos funcionam da seguinte forma:

Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto

Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% 
de desconto

Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%

Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto - 
Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 
15% de desconto

Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto

Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 
15% de desconto

Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10%

Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - 
Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 =>
 5% de desconto

Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO- 
A função deve imprimir na tela:

Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, 
o valor total com desconto e a porcentagem de desconto que ele recebeu.

Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e 
um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.
*/

function calculateDiscount (name, value, firstPurchase, cashPayment){
    if(firstPurchase && cashPayment ){
        if(value > 1000){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.3))},00
            Você ganhou 30% de desconto!`)
        }
        else if( value < 500){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.2))},00
            Você ganhou 20% de desconto!`)
        }
        else{
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.25))},00
            Você ganhou 25% de desconto!`)
        }
        }
    if(firstPurchase && !cashPayment ){
        if(value > 1000){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.2))},00
            Você ganhou 20% de desconto!`)
        }
        else if( value < 500){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.1))},00
            Você ganhou 10% de desconto!`)
        }
        else{
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.15))},00
            Você ganhou 15% de desconto!`)
        }
    }
    if(!firstPurchase && cashPayment ){
        if(value > 1000){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.2))},00
            Você ganhou 20% de desconto!`)
        }
        else if( value < 500){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.1))},00
            Você ganhou 10% de desconto!`)
        }
        else{
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.15))},00
            Você ganhou 15% de desconto!`)
        }
    }
    if(!firstPurchase && !cashPayment ){
        if(value > 1000){
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.1))},00
            Você ganhou 10% de desconto!`)
        }
        else if( value < 500){
            console.log(`Obrigada por sua compra, ${name}!
            Valor: R$${value},00
            Você ganhou um cupom de ${Math.floor(Math.random() * (20-10) +10)}% de desconto em sua próxima compra!`)
        }
        else{
            console.log(`Obrigada por sua compra, ${name}!
            Valor sem desconto: R$${value},00
            Valor com desconto: R$${(value - (value * 0.05))},00
            Você ganhou 5% de desconto!`)
        }
    }
}


calculateDiscount ('Maria', 1200, true, true)
calculateDiscount ('Ana', 700, true, true)
calculateDiscount ('Paula', 200, true, true)
calculateDiscount ('João', 1200, true, false)
calculateDiscount ('Franciso', 700, true, false)
calculateDiscount ('Karina', 200, true, false)
calculateDiscount ('Antonio', 1200, false, true)
calculateDiscount ('Caroline', 700, false, true)
calculateDiscount ('Rafaela', 200, false, true)
calculateDiscount ('Marcos', 1200, false, false)
calculateDiscount ('Pedro', 700, false, false)
calculateDiscount ('Nilza', 200, false, false)
