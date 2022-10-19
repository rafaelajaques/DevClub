const element = document.querySelector('input')

element.onkeypress = (event) =>{
    console.log(event)
}

element.onkeypress = (event) =>{
    console.log(event.key)
}

element.onkeypress = (event) =>{
    console.log(event.target.value)
}
