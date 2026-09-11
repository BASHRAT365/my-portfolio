const dateInput =
    document.getElementById("dateInput");

const startButton =
    document.getElementById("startButton");

const daysElement =
    document.getElementById("days");

const hoursElement =
    document.getElementById("hours");

const minutesElement =
    document.getElementById("minutes");

const secondsElement =
    document.getElementById("seconds");

const messageElement =
    document.getElementById("message");


let countdown = null;


function updateCountdown() {

    const selectedDate =
        new Date(dateInput.value).getTime();

    const currentTime =
        new Date().getTime();

    const difference =
        selectedDate - currentTime;


    if (isNaN(selectedDate)) {

        messageElement.textContent =
            "Please select a date and time.";

        return;
    }


    if (difference <= 0) {

        clearInterval(countdown);

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        messageElement.textContent =
            "Countdown finished! 🎉";

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");


    messageElement.textContent =
        "Countdown is running...";
}


startButton.addEventListener(
    "click",
    function () {

        clearInterval(countdown);

        if (!dateInput.value) {

            messageElement.textContent =
                "Please select a date and time.";

            return;
        }

        updateCountdown();

        countdown =
            setInterval(
                updateCountdown,
                1000
            );
    }
);