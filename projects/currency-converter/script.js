const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

const convertBtn = document.getElementById("convertBtn");
const convertedAmount = document.getElementById("convertedAmount");


// Exchange rates based on 1 USD
const exchangeRates = {
    USD: 1,
    AUD: 1.52,
    EUR: 0.92,
    GBP: 0.79,
    PKR: 280
};


convertBtn.addEventListener("click", function () {

    const amount = Number(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;


    // Validate amount

    if (amount <= 0) {

        convertedAmount.textContent = "--";

        alert("Please enter a valid amount.");

        return;
    }


    // Convert source currency to USD

    const amountInUSD = amount / exchangeRates[from];


    // Convert USD to target currency

    const result = amountInUSD * exchangeRates[to];


    // Display result

    convertedAmount.textContent =
        `${result.toFixed(2)} ${to}`;

});