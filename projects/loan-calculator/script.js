const loanAmountInput = document.getElementById("loanAmount");
const interestRateInput = document.getElementById("interestRate");
const loanYearsInput = document.getElementById("loanYears");

const calculateBtn = document.getElementById("calculateBtn");

const monthlyPayment = document.getElementById("monthlyPayment");
const totalPayment = document.getElementById("totalPayment");
const totalInterest = document.getElementById("totalInterest");


calculateBtn.addEventListener("click", function () {

    const loanAmount = Number(loanAmountInput.value);
    const annualInterestRate = Number(interestRateInput.value);
    const loanYears = Number(loanYearsInput.value);


    // Validate inputs

    if (
        loanAmount <= 0 ||
        annualInterestRate < 0 ||
        loanYears <= 0
    ) {
        monthlyPayment.textContent = "--";
        totalPayment.textContent = "--";
        totalInterest.textContent = "--";

        alert("Please enter valid loan details.");

        return;
    }


    // Convert annual interest rate to monthly rate

    const monthlyRate = annualInterestRate / 100 / 12;


    // Total number of monthly payments

    const numberOfPayments = loanYears * 12;


    let monthlyAmount;


    // If interest rate is 0

    if (monthlyRate === 0) {

        monthlyAmount = loanAmount / numberOfPayments;

    } else {

        monthlyAmount =
            loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, numberOfPayments) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    }


    // Calculate totals

    const totalAmount = monthlyAmount * numberOfPayments;

    const interestAmount = totalAmount - loanAmount;


    // Display results

    monthlyPayment.textContent =
        `$${monthlyAmount.toFixed(2)}`;

    totalPayment.textContent =
        `$${totalAmount.toFixed(2)}`;

    totalInterest.textContent =
        `$${interestAmount.toFixed(2)}`;

});