// =========================================================
// LUXORA - SHOPPING CART
// =========================================================

const cartCount = document.getElementById("cartCount");

const cartButtons =
    document.querySelectorAll(".add-cart");

let cartItems = 0;


// =========================================================
// ADD TO CART
// =========================================================

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cartItems++;

        cartCount.textContent = cartItems;

        const productName =
            button.getAttribute("data-product");

        alert(
            productName +
            " has been added to your cart!"
        );

    });

});


// =========================================================
// CONTACT FORM
// =========================================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name").value;

            alert(
                "Thank you, " +
                name +
                "! Your message has been received."
            );

            contactForm.reset();

        }
    );

}
// =========================================================
// MOBILE MENU
// =========================================================

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("active");

        }
    );


    // Close menu after clicking a link

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