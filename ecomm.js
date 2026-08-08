
function addCart() {

    let product = document.querySelector(".details");

    let name = product.querySelector("h1").innerText;

    let priceText = product.querySelector(".price").innerText;

    let price = parseFloat(priceText.replace("Rs", "").trim());

    let image = document.querySelector(".image-section img").src;

    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    let existingProduct = cartItems.find(function(item) {
        return item.name === name;
    });

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cartItems.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems)
    );

    alert(name + " added to cart!");
}

