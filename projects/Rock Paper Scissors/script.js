const choices = document.querySelectorAll(".choice");

const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const result = document.getElementById("result");

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const resetBtn = document.getElementById("resetBtn");

let userScore = 0;
let cpuScore = 0;

const options = ["rock", "paper", "scissors"];

choices.forEach(function (button) {

    button.addEventListener("click", function () {

        const userChoice = button.dataset.choice;

        const randomIndex =
            Math.floor(Math.random() * options.length);

        const cpuChoice = options[randomIndex];

        playerChoice.textContent =
            "You: " + userChoice;

        computerChoice.textContent =
            "Computer: " + cpuChoice;

        if (userChoice === cpuChoice) {

            result.textContent = "It's a Draw!";

        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {

            result.textContent = "You Win! 🎉";

            userScore++;

            playerScore.textContent = userScore;

        } else {

            result.textContent = "Computer Wins!";

            cpuScore++;

            computerScore.textContent = cpuScore;
        }
    });
});

resetBtn.addEventListener("click", function () {

    userScore = 0;
    cpuScore = 0;

    playerScore.textContent = "0";
    computerScore.textContent = "0";

    playerChoice.textContent = "You: —";
    computerChoice.textContent = "Computer: —";

    result.textContent = "Choose your move!";
});