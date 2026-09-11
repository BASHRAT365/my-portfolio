const display =
    document.getElementById("display");

const startButton =
    document.getElementById("startButton");

const stopButton =
    document.getElementById("stopButton");

const resetButton =
    document.getElementById("resetButton");


let seconds = 0;

let timer = null;


function updateDisplay() {

    const hours =
        Math.floor(seconds / 3600);

    const minutes =
        Math.floor((seconds % 3600) / 60);

    const remainingSeconds =
        seconds % 60;


    const formattedHours =
        String(hours).padStart(2, "0");

    const formattedMinutes =
        String(minutes).padStart(2, "0");

    const formattedSeconds =
        String(remainingSeconds).padStart(2, "0");


    display.textContent =
        `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

}


function startTimer() {

    if (timer !== null) {
        return;
    }


    timer = setInterval(
        function () {

            seconds++;

            updateDisplay();

        },
        1000
    );

}


function stopTimer() {

    clearInterval(timer);

    timer = null;

}


function resetTimer() {

    stopTimer();

    seconds = 0;

    updateDisplay();

}


startButton.addEventListener(
    "click",
    startTimer
);


stopButton.addEventListener(
    "click",
    stopTimer
);


resetButton.addEventListener(
    "click",
    resetTimer
);


updateDisplay();