// =========================================================
// PROPERTY DETAILS DATA
// =========================================================

const properties = {

    1: {
        image: "images/property-1.jpg",
        title: "Modern Family House",
        location: "📍 Sydney, NSW",
        map: "Sydney, Australia",
        price: "$850 / week",
        bedrooms: "4",
        bathrooms: "2",
        size: "250 m²",
        description:
            "This beautiful modern family house offers comfortable living in one of Sydney's desirable locations, with spacious living areas, modern finishes and a beautifully landscaped garden.",
        amenities: [
            "Free Wi-Fi",
            "Secure Parking",
            "Modern Kitchen",
            "Air Conditioning",
            "Garden",
            "Family Friendly"
        ]
    },


    2: {
        image: "images/property-2.jpg",
        title: "Luxury City Apartment",
        location: "📍 Melbourne, VIC",
        map: "Melbourne, Australia",
        price: "$720 / week",
        bedrooms: "3",
        bathrooms: "2",
        size: "180 m²",
        description:
            "A stylish city apartment offering modern living, excellent natural light and convenient access to Melbourne's major attractions and business districts.",
        amenities: [
            "City View",
            "Balcony",
            "Secure Parking",
            "Modern Kitchen",
            "Gym",
            "Air Conditioning"
        ]
    },


    3: {
        image: "images/property-3.jpg",
        title: "Elegant Garden Villa",
        location: "📍 Brisbane, QLD",
        map: "Brisbane, Australia",
        price: "$980,000",
        bedrooms: "4",
        bathrooms: "3",
        size: "320 m²",
        description:
            "An elegant garden villa offering spacious interiors, beautiful outdoor areas and a peaceful lifestyle in a desirable Brisbane location.",
        amenities: [
            "Large Garden",
            "Double Garage",
            "Modern Kitchen",
            "Air Conditioning",
            "Outdoor Area",
            "Family Friendly"
        ]
    },


    4: {
        image: "images/property-4.jpg",
        title: "Contemporary Harbour Apartment",
        location: "📍 Sydney, NSW",
        map: "Sydney, Australia",
        price: "$680 / week",
        bedrooms: "2",
        bathrooms: "2",
        size: "140 m²",
        description:
            "A contemporary harbour apartment offering modern interiors, comfortable living spaces and convenient access to Sydney's waterfront lifestyle.",
        amenities: [
            "Harbour View",
            "Balcony",
            "Secure Parking",
            "Modern Kitchen",
            "Gym",
            "Air Conditioning"
        ]
    }

};


// =========================================================
// GET PROPERTY ID FROM URL
// =========================================================

const urlParams =
    new URLSearchParams(window.location.search);

const propertyId =
    urlParams.get("id");


// =========================================================
// SELECT PROPERTY
// =========================================================

const property =
    properties[propertyId];


// =========================================================
// DISPLAY PROPERTY
// =========================================================

if (property) {

    // Image

    document.getElementById("detailsImage").src =
        property.image;

    document.getElementById("detailsImage").alt =
        property.title;


    // Title

    document.getElementById("detailsTitle").textContent =
        property.title;


    // Location

    document.getElementById("detailsLocation").textContent =
        property.location;


    // Price

    document.getElementById("detailsPrice").textContent =
        property.price;


    // Bedrooms

    document.querySelector(
        ".details-features div:nth-child(1) strong"
    ).textContent =
        "🛏 " + property.bedrooms;


    // Bathrooms

    document.querySelector(
        ".details-features div:nth-child(2) strong"
    ).textContent =
        "🛁 " + property.bathrooms;


    // Property Size

    document.querySelector(
        ".details-features div:nth-child(3) strong"
    ).textContent =
        "📐 " + property.size;


    // Description

    const detailsDescription =
        document.getElementById("detailsDescription");

    if (detailsDescription) {

        detailsDescription.textContent =
            property.description;

    }


    // Amenities

    const detailsAmenities =
        document.getElementById("detailsAmenities");

    if (detailsAmenities) {

        detailsAmenities.innerHTML = "";

        property.amenities.forEach(function (amenity) {

            const span =
                document.createElement("span");

            span.textContent =
                "✓ " + amenity;

            detailsAmenities.appendChild(span);

        });

    }


    // Property Map

    const propertyMap =
        document.getElementById("propertyMap");

    if (propertyMap) {

        propertyMap.src =
            "https://www.google.com/maps?q=" +
            encodeURIComponent(property.map) +
            "&output=embed";

    }


    // Browser Title

    document.title =
        property.title +
        " | Modern Property Portal";

}