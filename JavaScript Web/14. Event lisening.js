const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

// Também é possível criar a função fora e somente colocar o nome dentro do addEventListner

const clickButton = () => {
    alert('O botão foi clicado')
}

button.addEventListener('click', clickButton)


