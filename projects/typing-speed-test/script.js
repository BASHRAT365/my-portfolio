const typingInput = document.getElementById("typingInput");
const timeDisplay = document.getElementById("time");
const wpmDisplay = document.getElementById("wpm");
const accuracyDisplay = document.getElementById("accuracy");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const textToType = document.getElementById("textToType");

let timeLeft = 30;
let timer = null;
let testStarted = false;

startBtn.addEventListener("click", function () {

    if (testStarted) {
        return;
    }

    testStarted = true;

    timeLeft = 30;

    timeDisplay.textContent = timeLeft;
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "0%";

    typingInput.value = "";
    typingInput.disabled = false;

    typingInput.focus();

    startBtn.disabled = true;

    result.textContent = "Start typing...";

    timer = setInterval(function () {

        timeLeft--;

        timeDisplay.textContent = timeLeft;

        updateStats();

        if (timeLeft <= 0) {
            endTest();
        }

    }, 1000);
});


typingInput.addEventListener("input", updateStats);


function updateStats() {

    const typedText = typingInput.value;

    const targetText = textToType.textContent.trim();

    let correctCharacters = 0;

    for (let i = 0; i < typedText.length; i++) {

        if (typedText[i] === targetText[i]) {
            correctCharacters++;
        }

    }

    let accuracy = 0;

    if (typedText.length > 0) {

        accuracy = Math.round(
            (correctCharacters / typedText.length) * 100
        );

    }

    const elapsedSeconds = 30 - timeLeft;

    const minutes = elapsedSeconds / 60;

    let wpm = 0;

    if (minutes > 0) {

        const words = typedText.trim() === ""
            ? 0
            : typedText.trim().split(/\s+/).length;

        wpm = Math.round(words / minutes);
    }

    accuracyDisplay.textContent = accuracy + "%";

    wpmDisplay.textContent = wpm;

    if (typedText === targetText) {

        endTest();

        result.textContent =
            "Perfect! You completed the sentence! 🎉";
    }
}


function endTest() {

    clearInterval(timer);

    timer = null;

    testStarted = false;

    typingInput.disabled = true;

    startBtn.disabled = false;

    result.textContent =
        "Test finished! Your result is above.";
}


resetBtn.addEventListener("click", function () {

    clearInterval(timer);

    timer = null;

    timeLeft = 30;

    testStarted = false;

    timeDisplay.textContent = "30";

    wpmDisplay.textContent = "0";

    accuracyDisplay.textContent = "0%";

    typingInput.value = "";

    typingInput.disabled = true;

    startBtn.disabled = false;

    result.textContent =
        "Click Start Test to begin.";
});