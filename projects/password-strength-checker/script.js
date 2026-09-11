const passwordInput = document.getElementById("password");

const strength = document.getElementById("strength");

const lengthRequirement = document.getElementById("length");
const uppercaseRequirement = document.getElementById("uppercase");
const lowercaseRequirement = document.getElementById("lowercase");
const numberRequirement = document.getElementById("number");
const specialRequirement = document.getElementById("special");


passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let score = 0;


    // Check length
    if (password.length >= 8) {

        lengthRequirement.classList.add("valid");
        lengthRequirement.classList.remove("invalid");

        score++;

    } else {

        lengthRequirement.classList.add("invalid");
        lengthRequirement.classList.remove("valid");
    }


    // Check uppercase letter
    if (/[A-Z]/.test(password)) {

        uppercaseRequirement.classList.add("valid");
        uppercaseRequirement.classList.remove("invalid");

        score++;

    } else {

        uppercaseRequirement.classList.add("invalid");
        uppercaseRequirement.classList.remove("valid");
    }


    // Check lowercase letter
    if (/[a-z]/.test(password)) {

        lowercaseRequirement.classList.add("valid");
        lowercaseRequirement.classList.remove("invalid");

        score++;

    } else {

        lowercaseRequirement.classList.add("invalid");
        lowercaseRequirement.classList.remove("valid");
    }


    // Check number
    if (/[0-9]/.test(password)) {

        numberRequirement.classList.add("valid");
        numberRequirement.classList.remove("invalid");

        score++;

    } else {

        numberRequirement.classList.add("invalid");
        numberRequirement.classList.remove("valid");
    }


    // Check special character
    if (/[^A-Za-z0-9]/.test(password)) {

        specialRequirement.classList.add("valid");
        specialRequirement.classList.remove("invalid");

        score++;

    } else {

        specialRequirement.classList.add("invalid");
        specialRequirement.classList.remove("valid");
    }


    // Password strength
    if (password === "") {

        strength.textContent = "Password strength will appear here";

    } else if (score <= 2) {

        strength.textContent = "🔴 Weak Password";

    } else if (score <= 4) {

        strength.textContent = "🟡 Medium Password";

    } else {

        strength.textContent = "🟢 Strong Password";
    }

});