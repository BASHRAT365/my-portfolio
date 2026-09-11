const quoteElement =
    document.getElementById("quote");

const authorElement =
    document.getElementById("author");

const quoteButton =
    document.getElementById("quoteButton");


const quotes = [

    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },

    {
        quote: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },

    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },

    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    }

];


function showRandomQuote() {

    const randomIndex =
        Math.floor(
            Math.random() * quotes.length
        );


    const randomQuote =
        quotes[randomIndex];


    quoteElement.textContent =
        randomQuote.quote;


    authorElement.textContent =
        "— " + randomQuote.author;

}


quoteButton.addEventListener(
    "click",
    showRandomQuote
);