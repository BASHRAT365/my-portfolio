// ==========================================
// TEMPERATURE CONVERTER - JAVASCRIPT
// ==========================================

// Get HTML elements
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Convert temperature
convertBtn.addEventListener("click", function () {

    const temperature = Number(temperatureInput.value);
    const unit = unitSelect.value;

    // Check if input is empty or invalid
    if (temperatureInput.value === "" || isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    // Celsius to Fahrenheit
    if (unit === "celsius") {

        const fahrenheit = (temperature * 9 / 5) + 32;

        result.textContent =
            `${temperature}°C = ${fahrenheit.toFixed(2)}°F`;

    }

    // Fahrenheit to Celsius
    else if (unit === "fahrenheit") {

        const celsius = (temperature - 32) * 5 / 9;

        result.textContent =
            `${temperature}°F = ${celsius.toFixed(2)}°C`;
    }

});