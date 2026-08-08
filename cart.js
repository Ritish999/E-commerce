
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function displayCart() {

    let cartContainer = document.getElementById("cartItems");

    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some products to your cart.</p>
                <a href="ecomm.html">Continue Shopping</a>
            </div>
        `;

        document.getElementById("subtotal").innerText = "Rs 0";
        document.getElementById("total").innerText = "Rs 0";

        return;
    }

    cartItems.forEach(function(item, index) {

        let cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">

            <div class="cart-info">

                <h2>${item.name}</h2>

                <p class="cart-price">
                    Rs ${item.price}
                </p>

                <div class="quantity">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <button class="remove" onclick="removeItem(${index})">
                    Remove
                </button>

            </div>
        `;

        cartContainer.appendChild(cartItem);

    });

    updateTotal();
}

function increaseQuantity(index) {

    cartItems[index].quantity++;

    saveCart();
}

function decreaseQuantity(index) {

    if (cartItems[index].quantity > 1) {

        cartItems[index].quantity--;

        saveCart();
    }
}

function removeItem(index) {

    cartItems.splice(index, 1);

    saveCart();
}

function updateTotal() {

    let total = 0;

    cartItems.forEach(function(item) {

        total += item.price * item.quantity;

    });

    document.getElementById("subtotal").innerText =
        "Rs " + total;

    document.getElementById("total").innerText =
        "Rs " + total;
}

function saveCart() {

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    displayCart();
}

function checkout() {

    if (cartItems.length === 0) {

        alert("Your cart is empty.");

        return;
    }

    alert("Proceeding to checkout...");
}

displayCart();

