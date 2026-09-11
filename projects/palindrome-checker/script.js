const textInput = document.getElementById("textInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {

    const text = textInput.value.trim();

    if (text === "") {
        result.textContent = "Please enter a word or phrase.";
        return;
    }

    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    const reversedText = cleanText
        .split("")
        .reverse()
        .join("");

    if (cleanText === reversedText) {
        result.textContent = "Yes! It is a palindrome.";
    } else {
        result.textContent = "No! It is not a palindrome.";
    }
});