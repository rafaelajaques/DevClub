const element = document.querySelector('button')

const myFunction = () => {
    alert('Fui pressionado')
}

/*
Outra opção é fazer tudo no JS

element.onclick = () => {
    alert('Fui pressionado')
}
*/

const element2 = document.querySelector('input')

element2.onkeypress = () =>{
    console.log('pressionei uma tecla')
}
