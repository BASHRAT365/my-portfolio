const minNumber = document.getElementById("minNumber");

const maxNumber = document.getElementById("maxNumber");

const generateBtn = document.getElementById("generateBtn");

const resultNumber = document.getElementById("resultNumber");


generateBtn.addEventListener("click", function () {

    const min = Number(minNumber.value);

    const max = Number(maxNumber.value);


    if (min === "" || max === "") {

        alert("Please enter both numbers.");

        return;
    }


    if (min > max) {

        alert("Minimum number cannot be greater than maximum number.");

        return;
    }


    const randomNumber =
        Math.floor(Math.random() * (max - min + 1)) + min;


    resultNumber.textContent = randomNumber;

});