let count = 0;

const countDisplay = document.getElementById("count");

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");


increaseBtn.addEventListener("click", function () {

    count++;

    countDisplay.textContent = count;

});


decreaseBtn.addEventListener("click", function () {

    count--;

    countDisplay.textContent = count;

});


resetBtn.addEventListener("click", function () {

    count = 0;

    countDisplay.textContent = count;

});