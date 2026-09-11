// =========================================================
// MODERN PROPERTY PORTAL
// JAVASCRIPT
// =========================================================


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});


// ================= PROPERTY SEARCH =================

const searchBtn = document.getElementById("searchBtn");

const locationSelect = document.getElementById("location");

const propertyTypeSelect =
    document.getElementById("propertyType");

const bedroomsSelect =
    document.getElementById("bedrooms");

const propertyCards =
    document.querySelectorAll(".property-card");

const noResults =
    document.getElementById("noResults");


searchBtn.addEventListener("click", function () {

    const selectedLocation =
        locationSelect.value;

    const selectedType =
        propertyTypeSelect.value;

    const selectedBedrooms =
        bedroomsSelect.value;

    let visibleProperties = 0;


    propertyCards.forEach(function (card) {

        const cardLocation =
            card.dataset.location;

        const cardType =
            card.dataset.type;

        const cardBedrooms =
            Number(card.dataset.bedrooms);


        let locationMatch =
            selectedLocation === "all" ||
            selectedLocation === cardLocation;


        let typeMatch =
            selectedType === "all" ||
            selectedType === cardType;


        let bedroomMatch =
            selectedBedrooms === "all" ||
            cardBedrooms >= Number(selectedBedrooms);


        if (
            locationMatch &&
            typeMatch &&
            bedroomMatch
        ) {

            card.style.display = "flex";

            visibleProperties++;

        } else {

            card.style.display = "none";

        }

    });


    if (visibleProperties === 0) {

        noResults.style.display = "block";

    } else {

        noResults.style.display = "none";

    }

});


// ================= PROPERTY DETAILS =================

const detailsButtons =
    document.querySelectorAll(".details-btn");


detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const propertyId =
            button.getAttribute("data-property");

        window.location.href =
            "property-details.html?id=" + propertyId;

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const propertyInterest =
        document.getElementById("propertyInterest").value;


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        propertyInterest === ""
    ) {

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }


    formMessage.textContent =
        "Thank you! Your property visit request has been submitted.";


    contactForm.reset();

});