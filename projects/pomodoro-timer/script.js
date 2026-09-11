const timerDisplay = document.getElementById("timer");

const workBtn = document.getElementById("workBtn");
const breakBtn = document.getElementById("breakBtn");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const statusText = document.getElementById("status");


let timeLeft = 25 * 60;

let timer = null;

let isRunning = false;

let currentMode = "Work";


function updateDisplay() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}


function startTimer() {

    if (isRunning) {
        return;
    }

    isRunning = true;

    statusText.textContent =
        currentMode + " session in progress...";

    timer = setInterval(function () {

        if (timeLeft > 0) {

            timeLeft--;

            updateDisplay();

        } else {

            clearInterval(timer);

            timer = null;

            isRunning = false;

            if (currentMode === "Work") {

                currentMode = "Break";

                timeLeft = 5 * 60;

                statusText.textContent =
                    "Work session finished! Time for a break.";

            } else {

                currentMode = "Work";

                timeLeft = 25 * 60;

                statusText.textContent =
                    "Break finished! Time to work.";

            }

            updateDisplay();
        }

    }, 1000);
}


function pauseTimer() {

    if (!isRunning) {
        return;
    }

    clearInterval(timer);

    timer = null;

    isRunning = false;

    statusText.textContent =
        "Timer paused.";
}


function resetTimer() {

    clearInterval(timer);

    timer = null;

    isRunning = false;

    currentMode = "Work";

    timeLeft = 25 * 60;

    updateDisplay();

    statusText.textContent =
        "Ready to focus?";
}


workBtn.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

    isRunning = false;

    currentMode = "Work";

    timeLeft = 25 * 60;

    updateDisplay();

    statusText.textContent =
        "Work session selected.";
});


breakBtn.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

    isRunning = false;

    currentMode = "Break";

    timeLeft = 5 * 60;

    updateDisplay();

    statusText.textContent =
        "Break session selected.";
});


startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);


updateDisplay();