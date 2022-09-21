/* 
Estrutura :

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const temperature = 36

switch (temperature) {
    case 30:
        console.log('A pessoa está com a temperatura MUITO abaixo do normal')
        break;
    case 33:
        console.log('A pessoa está com a temperatura abaixo do normal')
    break;
    case 36:
        console.log('A temperatura está normal')
    break;
    default:
        console.log('Temperatura não encontrada')
        break;
}

const bool = false

switch (bool) {
    case true:
        console.log("it's true")
        break;
    case false:
        console.log("it's false")
    break;
    default: 
        console.log("not found")
        break;
}