// [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 5

switch (score) {
    case 0:
        console.log("Péssimo")
        break;
    case 1:
        console.log("Muito crítico")
        break;
    case 2:
        console.log("Crítico")
        break;
    case 3:
        console.log("Muito Ruim")
        break;
    case 4:
        console.log("Ruim")
        break;
    case 5:
        console.log("Regular")
        break;
    case 6:
        console.log("Razoável")
        break;
    case 7:
        console.log("RBom")
        break;
    case 8:
        console.log("Muito bom")
        break;
    case 9:
        console.log("Excelente")
        break;
    case 10:
        console.log("Sensacional")
        break;
    default:
        console.log("Não encontrado")
        break;
}