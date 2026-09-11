const billAmountInput = document.getElementById("billAmount");
const tipPercentageInput = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("people");

const calculateBtn = document.getElementById("calculateBtn");

const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");
const perPerson = document.getElementById("perPerson");


calculateBtn.addEventListener("click", function () {

    const billAmount = Number(billAmountInput.value);
    const tipPercentage = Number(tipPercentageInput.value);
    const people = Number(peopleInput.value);


    // Validate inputs

    if (
        billAmount <= 0 ||
        tipPercentage < 0 ||
        people <= 0
    ) {

        tipAmount.textContent = "--";
        totalBill.textContent = "--";
        perPerson.textContent = "--";

        alert("Please enter valid bill details.");

        return;
    }


    // Calculate tip

    const tip = billAmount * (tipPercentage / 100);


    // Calculate total bill

    const total = billAmount + tip;


    // Calculate amount per person

    const eachPerson = total / people;


    // Display results

    tipAmount.textContent =
        `$${tip.toFixed(2)}`;

    totalBill.textContent =
        `$${total.toFixed(2)}`;

    perPerson.textContent =
        `$${eachPerson.toFixed(2)}`;

});