// =========================================================
// SWEET & BAKER
// CHECKOUT JAVASCRIPT
// =========================================================


// =========================================================
// 1. GET CART FROM LOCAL STORAGE
// =========================================================

const savedCart =
    localStorage.getItem("sweetBakerCart");

const checkoutCart =
    savedCart
        ? JSON.parse(savedCart)
        : [];


// =========================================================
// 2. CHECKOUT ELEMENTS
// =========================================================

const checkoutCartItems =
    document.getElementById("checkoutCartItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");


// =========================================================
// 3. DISPLAY CART
// =========================================================

function displayCheckoutCart() {

    if (!checkoutCartItems) {
        return;
    }

    checkoutCartItems.innerHTML = "";


    // EMPTY CART

    if (checkoutCart.length === 0) {

        checkoutCartItems.innerHTML = `
            <p>
                Your cart is empty.
            </p>
        `;

        if (checkoutTotal) {
            checkoutTotal.textContent = "$0.00";
        }

        return;
    }


    // DISPLAY PRODUCTS

    checkoutCart.forEach(function (item) {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 0;

        const itemTotal =
            price * quantity;


        const checkoutItem =
            document.createElement("div");

        checkoutItem.className =
            "checkout-item";


        checkoutItem.innerHTML = `

            <div class="checkout-item-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    $${price.toFixed(2)}
                    ×
                    ${quantity}
                </p>

            </div>

            <strong>
                $${itemTotal.toFixed(2)}
            </strong>

        `;


        checkoutCartItems.appendChild(
            checkoutItem
        );

    });


    // CALCULATE TOTAL

    let totalPrice = 0;


    checkoutCart.forEach(function (item) {

        const price =
            Number(item.price) || 0;

        const quantity =
            Number(item.quantity) || 0;

        totalPrice +=
            price * quantity;

    });


    if (checkoutTotal) {

        checkoutTotal.textContent =
            "$" + totalPrice.toFixed(2);

    }

}


// =========================================================
// 4. LOAD CART
// =========================================================

displayCheckoutCart();


// =========================================================
// 5. PLACE ORDER
// =========================================================

const checkoutForm =
    document.getElementById("checkoutForm");


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // CUSTOMER DETAILS

            const customerName =
                document
                    .getElementById("checkoutName")
                    .value
                    .trim();

            const customerPhone =
                document
                    .getElementById("checkoutPhone")
                    .value
                    .trim();

            const customerEmail =
                document
                    .getElementById("checkoutEmail")
                    .value
                    .trim();

            const orderDate =
                document
                    .getElementById("orderDate")
                    .value;

// CUSTOMER ADDRESS DETAILS

const customerAddress =
    document
        .getElementById("address")
        .value
        .trim();

const customerSuburb =
    document
        .getElementById("suburb")
        .value
        .trim();

const customerState =
    document
        .getElementById("state")
        .value;

const customerPostcode =
    document
        .getElementById("postcode")
        .value
        .trim();

const orderNotes =
    document
        .getElementById("orderNotes")
        .value
        .trim();
            // CHECK CART

            if (checkoutCart.length === 0) {

                alert(
                    "Your cart is empty. Please add a product first."
                );

                return;
            }


            // CALCULATE TOTAL

            let totalPrice = 0;


            checkoutCart.forEach(function (item) {

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 0;

                totalPrice +=
                    price * quantity;

            });


            // CREATE ORDER NUMBER

            const orderNumber =
                "SB-" +
                Math.floor(
                    100000 + Math.random() * 900000
                );


            // SAVE ORDER INFORMATION

          const orderData = {

    name: customerName,

    phone: customerPhone,

    email: customerEmail,

    address: customerAddress,

    suburb: customerSuburb,

    state: customerState,

    postcode: customerPostcode,

    notes: orderNotes,

    date: orderDate,

    total: totalPrice,

    orderNumber: orderNumber,

    items: checkoutCart

};

            localStorage.setItem(
                "sweetBakerOrder",
                JSON.stringify(orderData)
            );


            // CLEAR CART

            localStorage.removeItem(
                "sweetBakerCart"
            );


            // OPEN CONFIRMATION PAGE

            window.location.href =
                "confirmation.html";

        }
    );

}