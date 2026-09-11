// =========================================================
// SWEET & BAKER
// CONFIRMATION JAVASCRIPT
// =========================================================


// =========================================================
// 1. GET SAVED ORDER
// =========================================================

const savedOrder =
    localStorage.getItem("sweetBakerOrder");


// =========================================================
// 2. GET CONFIRMATION ELEMENTS
// =========================================================

const confirmationName =
    document.getElementById(
        "confirmationName"
    );

const confirmationTotal =
    document.getElementById(
        "confirmationTotal"
    );

const confirmationDate =
    document.getElementById(
        "confirmationDate"
    );

const confirmationOrderNumber =
    document.getElementById(
        "confirmationOrderNumber"
    );

const confirmationOrderItems =
    document.getElementById(
        "confirmationOrderItems"
    );


// =========================================================
// 3. DISPLAY ORDER INFORMATION
// =========================================================

if (savedOrder) {

    const orderData =
        JSON.parse(savedOrder);


    // CUSTOMER NAME

    if (confirmationName) {

        confirmationName.textContent =
            orderData.name;

    }


    // ORDER TOTAL

    if (confirmationTotal) {

        confirmationTotal.textContent =
            "$" +
            Number(
                orderData.total
            ).toFixed(2);

    }


    // ORDER DATE

    if (confirmationDate) {

        confirmationDate.textContent =
            orderData.date;

    }


    // ORDER NUMBER

    if (confirmationOrderNumber) {

        confirmationOrderNumber.textContent =
            orderData.orderNumber;

    }


    // =====================================================
    // 4. DISPLAY ORDER PRODUCTS
    // =====================================================

    if (
        confirmationOrderItems &&
        orderData.items
    ) {

        confirmationOrderItems.innerHTML = "";


        orderData.items.forEach(
            function (item) {

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 0;

                const itemTotal =
                    price * quantity;


                const orderItem =
                    document.createElement(
                        "div"
                    );

                orderItem.className =
                    "confirmation-order-item";


                orderItem.innerHTML = `

                    <div
                        class="confirmation-item-info"
                    >

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


                confirmationOrderItems.appendChild(
                    orderItem
                );

            }
        );

    }

}
// =========================================================
// 5. DISPLAY CUSTOMER DETAILS
// =========================================================

const confirmationPhone =
    document.getElementById("confirmationPhone");

const confirmationEmail =
    document.getElementById("confirmationEmail");

const confirmationAddress =
    document.getElementById("confirmationAddress");

const confirmationSuburb =
    document.getElementById("confirmationSuburb");

const confirmationState =
    document.getElementById("confirmationState");

const confirmationPostcode =
    document.getElementById("confirmationPostcode");

const confirmationNotes =
    document.getElementById("confirmationNotes");


if (savedOrder) {

    const orderData =
        JSON.parse(savedOrder);


    if (confirmationPhone) {
        confirmationPhone.textContent =
            orderData.phone || "—";
    }


    if (confirmationEmail) {
        confirmationEmail.textContent =
            orderData.email || "—";
    }


    if (confirmationAddress) {
        confirmationAddress.textContent =
            orderData.address || "—";
    }


    if (confirmationSuburb) {
        confirmationSuburb.textContent =
            orderData.suburb || "—";
    }


    if (confirmationState) {
        confirmationState.textContent =
            orderData.state || "—";
    }


    if (confirmationPostcode) {
        confirmationPostcode.textContent =
            orderData.postcode || "—";
    }


    if (confirmationNotes) {
        confirmationNotes.textContent =
            orderData.notes || "No special notes.";
    }

}
// =========================================================
// 6. ORDER PROGRESS
// =========================================================

const progressSteps =
    document.querySelectorAll(
        ".progress-step"
    );


// FIRST STEP IS ACTIVE

if (progressSteps.length > 0) {

    progressSteps.forEach(
        function (step, index) {

            if (index === 0) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }

        }
    );

}