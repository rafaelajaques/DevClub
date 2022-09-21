/*

if = se
else = se não
else if = mas se
*/

const temperature = 38

if (temperature >= 36 && temperature < 38) {
    console.log('A pessoa está saudável')
} else if (temperature >= 38) {
    console.log('A pessoa está com febre')
} else {
    console.log('A pessoa está com hipotermia')
}
