const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const bit = 0.000010

const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValue = document.getElementById('currency-value-text')

    realValueText.innerText = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReal)


    if (select.value === "US$ Dólar Americano") {
        currencyValue.innerText = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReal / dolar)
    }
    if (select.value === "€ Euro") {
        currencyValue.innerText = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReal / euro)
    }
    if (select.value === "Bitcoin") {
        currencyValue.innerText = new Intl.NumberFormat('de-DE',
            { style: 'decimal', maximumFractionDigits: 5, currency: 'BTC' }
        ).format(inputReal * bit)
    }
}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./img/estados-unidos.png"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"
    }

    if (select.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin.png"
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)