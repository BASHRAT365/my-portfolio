const textInput = document.getElementById("textInput");

const characterCount = document.getElementById("characterCount");

const remainingCount = document.getElementById("remainingCount");


textInput.addEventListener("input", function () {

    const currentLength = textInput.value.length;

    const maxLength = textInput.maxLength;

    const remaining = maxLength - currentLength;


    characterCount.textContent = currentLength;

    remainingCount.textContent = remaining;

});