/* =========================================================
   THE INSIGHT JOURNAL
   JAVASCRIPT
========================================================= */


/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.querySelector(".navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("active");

        }
    );


    const navLinks =
        navbar.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navbar.classList.remove("active");

            }
        );

    });

}


/* =========================================================
   2. NEWSLETTER FORM
========================================================= */

const newsletterForm =
    document.getElementById("newsletterForm");


if (newsletterForm) {

    newsletterForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                document
                    .getElementById("newsletterEmail")
                    .value
                    .trim();


            if (email === "") {

                alert(
                    "Please enter your email address."
                );

                return;

            }


            alert(
                "Thank you for subscribing!\n\n" +
                "You will receive our latest articles and useful ideas."
            );


            newsletterForm.reset();

        }
    );

}


/* =========================================================
   3. CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById("contactName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("contactEmail")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("contactMessage")
                    .value
                    .trim();


            if (
                name === "" ||
                email === "" ||
                message === ""
            ) {

                alert(
                    "Please complete all fields."
                );

                return;

            }


            alert(
                "Thank you, " +
                name +
                "!\n\n" +
                "Your message has been received. " +
                "We will get back to you soon."
            );


            contactForm.reset();

        }
    );

}