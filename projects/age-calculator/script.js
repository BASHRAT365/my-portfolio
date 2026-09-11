const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {

    const dobValue = dobInput.value;

    if (dobValue === "") {
        result.textContent = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    if (birthDate > today) {
        result.textContent = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.textContent =
        `You are ${years} years, ${months} months and ${days} days old.`;
});