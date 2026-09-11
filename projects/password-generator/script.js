const passwordInput =
    document.getElementById("password");

const lengthInput =
    document.getElementById("length");

const uppercaseCheckbox =
    document.getElementById("uppercase");

const lowercaseCheckbox =
    document.getElementById("lowercase");

const numbersCheckbox =
    document.getElementById("numbers");

const symbolsCheckbox =
    document.getElementById("symbols");

const generateButton =
    document.getElementById("generateButton");

const copyButton =
    document.getElementById("copyButton");

const message =
    document.getElementById("message");


const uppercaseLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lowercaseLetters =
    "abcdefghijklmnopqrstuvwxyz";

const numbers =
    "0123456789";

const symbols =
    "!@#$%^&*()_+-=[]{}|;:,.<>?";


function generatePassword() {

    let characters = "";

    let password = "";

    const length =
        Number(lengthInput.value);


    if (uppercaseCheckbox.checked) {

        characters += uppercaseLetters;

    }


    if (lowercaseCheckbox.checked) {

        characters += lowercaseLetters;

    }


    if (numbersCheckbox.checked) {

        characters += numbers;

    }


    if (symbolsCheckbox.checked) {

        characters += symbols;

    }


    if (characters === "") {

        passwordInput.value = "";

        message.textContent =
            "Please select at least one option.";

        return;

    }


    if (length < 4 || length > 30) {

        message.textContent =
            "Password length must be between 4 and 30.";

        return;

    }


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );

        password +=
            characters[randomIndex];

    }


    passwordInput.value =
        password;

    message.textContent =
        "Password generated successfully!";

}


function copyPassword() {

    if (passwordInput.value === "") {

        message.textContent =
            "Generate a password first.";

        return;

    }


    navigator.clipboard.writeText(
        passwordInput.value
    );


    message.textContent =
        "Password copied to clipboard!";

}


generateButton.addEventListener(
    "click",
    generatePassword
);


copyButton.addEventListener(
    "click",
    copyPassword
);