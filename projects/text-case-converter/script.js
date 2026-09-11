const textInput = document.getElementById("textInput");

const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const capitalizeBtn = document.getElementById("capitalizeBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");


upperBtn.addEventListener("click", function () {

    textInput.value = textInput.value.toUpperCase();

});


lowerBtn.addEventListener("click", function () {

    textInput.value = textInput.value.toLowerCase();

});


capitalizeBtn.addEventListener("click", function () {

    textInput.value = textInput.value
        .toLowerCase()
        .replace(/\b\w/g, function (letter) {
            return letter.toUpperCase();
        });

});


clearBtn.addEventListener("click", function () {

    textInput.value = "";

});


copyBtn.addEventListener("click", function () {

    if (textInput.value.trim() === "") {
        alert("Please enter some text first.");
        return;
    }

    navigator.clipboard.writeText(textInput.value);

    alert("Text copied successfully!");

});