const dice = document.getElementById("dice");
const result = document.getElementById("result");
const rollBtn = document.getElementById("rollBtn");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", function () {

    const randomNumber =
        Math.floor(Math.random() * 6);

    dice.textContent = diceFaces[randomNumber];

    result.textContent =
        "You rolled: " + (randomNumber + 1);
});