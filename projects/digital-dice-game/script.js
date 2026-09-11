const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");

const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");

const result = document.getElementById("result");
const rollBtn = document.getElementById("rollBtn");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

rollBtn.addEventListener("click", function () {

    const player1 =
        Math.floor(Math.random() * 6) + 1;

    const player2 =
        Math.floor(Math.random() * 6) + 1;

    dice1.textContent = diceFaces[player1 - 1];
    dice2.textContent = diceFaces[player2 - 1];

    score1.textContent = player1;
    score2.textContent = player2;

    if (player1 > player2) {

        result.textContent =
            "Player 1 Wins! 🎉";

    } else if (player2 > player1) {

        result.textContent =
            "Player 2 Wins! 🎉";

    } else {

        result.textContent =
            "It's a Draw! 🤝";
    }
});