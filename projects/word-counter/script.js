const textInput = document.getElementById("textInput");

const wordCount = document.getElementById("wordCount");

const characterCount = document.getElementById("characterCount");


textInput.addEventListener("input", function () {

    const text = textInput.value;

    const characters = text.length;

    const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;


    wordCount.textContent = words;

    characterCount.textContent = characters;

});