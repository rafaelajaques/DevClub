const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

async function convertValues() {

    let coins = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(function (answer) {
        return answer.json()
        console.log(coins)
    })

    let dolar = coins.USDBRL.high;
    let euro = coins.EURBRL.high;
    let bit = coins.BTCBRL.high;

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
        ).format(inputReal / bit / 1000)
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