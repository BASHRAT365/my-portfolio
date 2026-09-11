const questions = [

    {
        question: "What does HTML stand for?",

        answers: [
            {
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "Home Tool Markup Language",
                correct: false
            },
            {
                text: "Hyperlinks Text Language",
                correct: false
            },
            {
                text: "High Text Machine Language",
                correct: false
            }
        ]
    },

    {
        question: "Which language is used for styling web pages?",

        answers: [
            {
                text: "HTML",
                correct: false
            },
            {
                text: "CSS",
                correct: true
            },
            {
                text: "Java",
                correct: false
            },
            {
                text: "Python",
                correct: false
            }
        ]
    },

    {
        question: "Which language makes websites interactive?",

        answers: [
            {
                text: "HTML",
                correct: false
            },
            {
                text: "CSS",
                correct: false
            },
            {
                text: "JavaScript",
                correct: true
            },
            {
                text: "SQL",
                correct: false
            }
        ]
    },

    {
        question: "Which HTML tag is used to create a link?",

        answers: [
            {
                text: "<p>",
                correct: false
            },
            {
                text: "<a>",
                correct: true
            },
            {
                text: "<img>",
                correct: false
            },
            {
                text: "<h1>",
                correct: false
            }
        ]
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",

        answers: [
            {
                text: ".",
                correct: false
            },
            {
                text: "#",
                correct: true
            },
            {
                text: "*",
                correct: false
            },
            {
                text: "@",
                correct: false
            }
        ]
    }

];


const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;

let score = 0;


function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    nextButton.innerHTML = "Next Question";

    showQuestion();

}


function showQuestion() {

    resetState();


    let currentQuestion =
        questions[currentQuestionIndex];


    let questionNumber =
        currentQuestionIndex + 1;


    questionElement.innerHTML =
        questionNumber + ". " +
        currentQuestion.question;


    currentQuestion.answers.forEach(
        function(answer) {

            const button =
                document.createElement("button");


            button.innerHTML = answer.text;


            button.classList.add("btn");


            if (answer.correct) {

                button.dataset.correct =
                    answer.correct;

            }


            button.addEventListener(
                "click",
                selectAnswer
            );


            answerButtons.appendChild(button);

        }
    );

}


function resetState() {

    nextButton.style.display = "none";


    while (answerButtons.firstChild) {

        answerButtons.removeChild(
            answerButtons.firstChild
        );

    }

}


function selectAnswer(event) {

    const selectedButton =
        event.target;


    const isCorrect =
        selectedButton.dataset.correct === "true";


    if (isCorrect) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        selectedButton.classList.add("incorrect");

    }


    Array.from(
        answerButtons.children
    ).forEach(function(button) {

        if (
            button.dataset.correct === "true"
        ) {

            button.classList.add("correct");

        }

        button.disabled = true;

    });


    nextButton.style.display = "block";

}


function showScore() {

    resetState();


    questionElement.innerHTML =
        `You scored ${score} out of ${questions.length}!`;


    nextButton.innerHTML =
        "Play Again";


    nextButton.style.display =
        "block";

}


function handleNextButton() {

    currentQuestionIndex++;


    if (
        currentQuestionIndex <
        questions.length
    ) {

        showQuestion();

    } else {

        showScore();

    }

}


nextButton.addEventListener(
    "click",
    function() {

        if (
            currentQuestionIndex <
            questions.length
        ) {

            handleNextButton();

        } else {

            startQuiz();

        }

    }
);


startQuiz();