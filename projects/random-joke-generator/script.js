const joke = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    
    "Why did the computer go to the doctor? Because it had a virus!",
    
    "Why was the JavaScript developer sad? Because he didn't know how to null his feelings!",
    
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    
    "What do you call a bear with no teeth? A gummy bear!",
    
    "Why did the web developer go broke? Because he used up all his cache!",
    
    "Why was the math book sad? Because it had too many problems!",
    
    "What do you call a sleeping computer? A nap-top!"
];

jokeBtn.addEventListener("click", function () {

    const randomIndex =
        Math.floor(Math.random() * jokes.length);

    joke.textContent = jokes[randomIndex];

});