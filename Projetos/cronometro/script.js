let btnStart = document.getElementById('start')
let btnPause = document.getElementById('pause')
let btnReset = document.getElementById('reset')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let milliseconds = document.getElementById('milliseconds')


let startTimer
let ms = "00"
let seg = "00"
let min = "00"
let hr = "00"
let startClock = false;


function start() {
    if (!startClock) {
        startTimer = setInterval(function () {
            ms++

            if (ms == 100) {
                seg++

                if (seg < 10) {
                    seg = "0" + seg
                }

                ms = 0
            }

            if (seg == 60) {
                min++

                if (min < 10) {
                    min = "0" + min
                }

                seg = 0
            }

            if (min == 60) {
                hr++

                if (hr < 10) {
                    hr = "0" + hr
                }

                min = 0
            }

            btnStart.classList.add('active')
            btnPause.classList.remove('active')
            valorAtualizado()
        }, 10);
    }
}

function stop() {
    clearInterval(startTimer)
    startClock = false;
    btnPause.classList.add('active')
    btnStart.classList.remove('active')
}

function reset() {
    clearInterval(startTimer)

    ms = "00"
    seg = "00"
    min = "00"
    hr = "00"
    startClock = false;

    btnStart.classList.remove('active')
    btnPause.classList.remove('active')

    valorAtualizado()
}

function valorAtualizado() {
    milliseconds.innerHTML = ms
    seconds.innerHTML = seg
    minutes.innerHTML = min
    hours.innerHTML = hr
}

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', stop)
btnReset.addEventListener('click', reset)



