const passwordLength = document.getElementById("passwordLength");

const includeUppercase =
    document.getElementById("includeUppercase");

const includeNumbers =
    document.getElementById("includeNumbers");

const includeSymbols =
    document.getElementById("includeSymbols");

const generateBtn =
    document.getElementById("generateBtn");

const passwordInput =
    document.getElementById("password");

const copyBtn =
    document.getElementById("copyBtn");


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const numbers = "0123456789";

const symbols = "!@#$%^&*()_+-=[]{}";


generateBtn.addEventListener("click", function () {

    const length = Number(passwordLength.value);

    let characters = lowercaseLetters;


    if (includeUppercase.checked) {
        characters += uppercaseLetters;
    }

    if (includeNumbers.checked) {
        characters += numbers;
    }

    if (includeSymbols.checked) {
        characters += symbols;
    }


    if (length < 4 || length > 50) {

        passwordInput.value = "";

        alert("Password length must be between 4 and 50.");

        return;
    }


    let password = "";


    for (let i = 0; i < length; i++) {

        const randomIndex =
            Math.floor(Math.random() * characters.length);

        password += characters[randomIndex];
    }


    passwordInput.value = password;

});


copyBtn.addEventListener("click", function () {

    if (passwordInput.value === "") {

        alert("Please generate a password first.");

        return;
    }


    navigator.clipboard.writeText(passwordInput.value)
        .then(function () {

            alert("Password copied!");

        })
        .catch(function () {

            alert("Unable to copy password.");

        });

});