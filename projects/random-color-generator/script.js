const colorBox = document.getElementById("colorBox");

const colorCode = document.getElementById("colorCode");

const generateBtn = document.getElementById("generateBtn");


generateBtn.addEventListener("click", function () {

    const randomColor =
        "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");


    colorBox.style.backgroundColor = randomColor;

    colorCode.textContent = randomColor;

});