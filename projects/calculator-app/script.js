// Calculator Display
const display = document.getElementById("display");


// Number یا Operator Display میں شامل کرنا
function appendValue(value) {

    display.value += value;

}


// C Button — پورا Display صاف کرنا
function clearDisplay() {

    display.value = "";

}


// DEL Button — آخری Character Delete کرنا
function deleteLast() {

    display.value = display.value.slice(0, -1);

}


// = Button — Calculation کرنا
function calculate() {

    try {

        display.value = eval(display.value);

    }

    catch (error) {

        display.value = "Error";

    }

}