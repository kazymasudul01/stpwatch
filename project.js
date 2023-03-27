window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var mintues = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMintues = document.getElementById("mintues")

    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(getReady, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        mintues = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMintues.innerHTML = mintues;
    }



    function getReady() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            mintues++;
            appendMintues.innerHTML = "0" + mintues;
            tens = 0;
            seconds = 0;
            appendTens.innerHTML = "0" + 0;
            appendSeconds.innerHTML = "0" + 0;

        }

    }


}