const weightInput =
    document.getElementById("weight");

const heightInput =
    document.getElementById("height");

const calculateButton =
    document.getElementById("calculateButton");

const bmiValue =
    document.getElementById("bmiValue");

const category =
    document.getElementById("category");


calculateButton.addEventListener(
    "click",
    function () {

        const weight =
            parseFloat(weightInput.value);

        const height =
            parseFloat(heightInput.value);


        if (
            isNaN(weight) ||
            isNaN(height) ||
            weight <= 0 ||
            height <= 0
        ) {

            bmiValue.textContent = "--";

            category.textContent =
                "Please enter valid weight and height.";

            return;
        }


        const heightInMeters =
            height / 100;


        const bmi =
            weight /
            (heightInMeters * heightInMeters);


        bmiValue.textContent =
            bmi.toFixed(1);


        if (bmi < 18.5) {

            category.textContent =
                "Underweight";

        } else if (bmi < 25) {

            category.textContent =
                "Normal Weight";

        } else if (bmi < 30) {

            category.textContent =
                "Overweight";

        } else {

            category.textContent =
                "Obesity";

        }

    }
);