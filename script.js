// ==================================================
// PORTFOLIO JAVASCRIPT
// ==================================================

console.log("Portfolio Loaded");


// ==================================================
// DARK MODE
// ==================================================

function toggleDarkMode()
{
    const button = document.getElementById("darkModeBtn");

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode"))
    {
        localStorage.setItem("darkMode", "enabled");

        button.innerHTML = "☀️ Light Mode";
    }
    else
    {
        localStorage.setItem("darkMode", "disabled");

        button.innerHTML = "🌙 Dark Mode";
    }
}


// ==================================================
// LOAD SAVED DARK MODE
// ==================================================

document.addEventListener("DOMContentLoaded", function()
{
    const button = document.getElementById("darkModeBtn");

    if (localStorage.getItem("darkMode") === "enabled")
    {
        document.body.classList.add("dark-mode");

        button.innerHTML = "☀️ Light Mode";
    }
    else
    {
        button.innerHTML = "🌙 Dark Mode";
    }
});


// ==================================================
// EMAILJS INITIALIZATION
// ==================================================

(function()
{
    emailjs.init({
        publicKey: "xO5H2p3qzoQSX-Ejc"
    });
})();


// ==================================================
// CONTACT FORM
// ==================================================

const contactForm = document.getElementById("contact-form");


if (contactForm)
{
    contactForm.addEventListener("submit", function(event)
    {
        event.preventDefault();


        // ------------------------------------------
        // GET FORM VALUES
        // ------------------------------------------

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // ------------------------------------------
        // VALIDATION
        // ------------------------------------------

        if (name === "")
        {
            alert("Please enter your name.");
            return;
        }


        if (email === "")
        {
            alert("Please enter your email.");
            return;
        }


        if (message === "")
        {
            alert("Please enter your message.");
            return;
        }


        // ------------------------------------------
        // SEND EMAIL USING EMAILJS
        // ------------------------------------------

        emailjs.sendForm(
            "service_iuh343k",
            "template_6ftyko6",
            contactForm
        )

        .then(function()
        {
            alert(
                "Thank you! Your message has been received."
            );

            contactForm.reset();
        })


        .catch(function(error)
        {
            console.log(
                "EmailJS Error:",
                error
            );

            alert(
                "Sorry! Your message could not be sent."
            );
        });

    });
}