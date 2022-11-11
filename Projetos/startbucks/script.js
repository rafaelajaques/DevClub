let imagem = document.querySelector('.starbucks')
let circle = document.querySelector('.circle')

function ChangeImage(address) {
    imagem.src = address
}

function changeColor(color) {
    circle.style.background = color
}