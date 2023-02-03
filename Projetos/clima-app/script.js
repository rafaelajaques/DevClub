let key = "cebcd482eda57fa9a6714c1c2ba91885"

navigator.geolocation.getCurrentPosition((position) => {

    let lat = position.coords.latitude
    let lon = position.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${key}`
    )
        .then(response => response.json())
        .then((data) => show(data))

    console.log(position)
}, (err) => {
    return alert("Localização não disponibilizada")
})

function show(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector('.temp-min').innerHTML = "Min.: " + Math.floor(data.main.temp_min) + "°C"
    document.querySelector('.temp-max').innerHTML = "Máx.: " + Math.floor(data.main.temp_max) + "°C"
    document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector('.feels-like').innerHTML = "Sensação Térmica: " + Math.floor(data.main.feels_like) + "°C"
}

async function searchCity(city) {

    try {
        let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=" +
            key +
            "&lang=pt_br" +
            "&units=metric"
        )
            .then(response => response.json())

        show(data)

    } catch (err) {
        return alert("Local não encontrado")
    }
}

function clickOnButton() {
    let city = document.querySelector('.input-city').value

    searchCity(city)
}