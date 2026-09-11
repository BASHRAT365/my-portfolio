// =========================================================
// SWEET & BAKER
// JAVASCRIPT
// =========================================================


// =========================================================
// 1. MOBILE MENU
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


// =========================================================
// 2. SHOPPING CART
// =========================================================

let cart = [];


const cartButton =
    document.getElementById("cartButton");

const cartPanel =
    document.getElementById("cartPanel");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartClose =
    document.getElementById("cartClose");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


/* OPEN CART */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        function () {

            cartPanel.classList.add("active");

            cartOverlay.classList.add("active");

        }
    );

}


/* CLOSE CART */

function closeCart() {

    if (cartPanel) {

        cartPanel.classList.remove("active");

    }

    if (cartOverlay) {

        cartOverlay.classList.remove("active");

    }

}


if (cartClose) {

    cartClose.addEventListener(
        "click",
        closeCart
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


/* ADD PRODUCT TO CART */

const productButtons =
    document.querySelectorAll(".product-btn");


productButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const productCard =
                button.closest(".product-card");


            const productName =
                productCard.querySelector("h3").textContent.trim();


            const priceText =
                productCard.querySelector(".product-price").textContent;


            const priceMatch =
                priceText.match(/\$([0-9]+(?:\.[0-9]+)?)/);


            const price =
                priceMatch
                    ? parseFloat(priceMatch[1])
                    : 0;


            const existingProduct =
                cart.find(function (item) {

                    return item.name === productName;

                });


            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({

                    name: productName,

                    price: price,

                    quantity: 1

                });

            }


            updateCart();

            cartPanel.classList.add("active");

            cartOverlay.classList.add("active");

        }
    );

});


/* UPDATE CART */

function updateCart() {

    if (!cartItems) {
        return;
    }


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

    }


    cart.forEach(function (item, index) {

        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    $${item.price.toFixed(2)}
                </p>

            </div>


            <div class="cart-item-actions">

                <button
                    type="button"
                    class="quantity-btn"
                    onclick="changeQuantity(${index}, -1)"
                >
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    type="button"
                    class="quantity-btn"
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>


                <button
                    type="button"
                    class="remove-btn"
                    onclick="removeFromCart(${index})"
                >
                    Remove
                </button>

            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    updateCartSummary();

}


/* CHANGE QUANTITY */

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


/* REMOVE PRODUCT */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* UPDATE CART TOTAL */

function updateCartSummary() {

    let totalQuantity = 0;

    let totalPrice = 0;


    cart.forEach(function (item) {

        totalQuantity += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    if (cartTotal) {

        cartTotal.textContent =
            "$" + totalPrice.toFixed(2);

    }

}


updateCart();


// =========================================================
// 3. CONTACT / ORDER FORM
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

            const orderType =
                document.getElementById("orderType").value;

            const eventDate =
                document.getElementById("eventDate").value;

            const quantity =
                document.getElementById("quantity").value;


            alert(
                "Thank you, " +
                name +
                "!\n\n" +
                "Order Type: " +
                orderType +
                "\n" +
                "Event Date: " +
                eventDate +
                "\n" +
                "Quantity: " +
                quantity +
                "\n\n" +
                "Your enquiry has been received."
            );


            contactForm.reset();

        }
    );

}
// =========================================================
// 4. CHECKOUT BUTTON
// =========================================================

const checkoutButton =
    document.getElementById("checkoutButton");

if (checkoutButton) {

    checkoutButton.addEventListener(
        "click",
        function () {

            if (cart.length === 0) {

                alert("Your cart is empty.");

                return;
            }

            localStorage.setItem(
                "sweetBakerCart",
                JSON.stringify(cart)
            );

            window.location.href = "checkout.html";

        }
    );

}