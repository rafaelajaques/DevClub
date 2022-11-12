function addCharacter(character) {
    const valueDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = valueDisplay + character
}

function clearDisplay() {
    document.querySelector('.display').value = ''
}

function calculate() {
    const valueDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valueDisplay)
}

function reverseNumber() {
    const valueDisplay = document.querySelector('.display').value

    document.querySelector('.display').value = valueDisplay * -1
}