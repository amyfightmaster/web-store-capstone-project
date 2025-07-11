console.log("JS file connected!");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID:", productId);

if (productId === "1") {
    document.getElementById("product-name").textContent = "Tie-Dye T-shirt";
    document.getElementById("product-descripton").textContent = "Available in sizes S, M, L, XL, 2X.  One of a kind, hand-dyed cotton shirt.";
    document.getElementById("product-price").textContent = "$25";
}

if (productId === "2") {
    document.getElementById("product-name").textContent = "Macramé Potholder";
    document.getElementById("product-descripton").textContent = "These sturdy macramé potholders keep your plants suspended in style!  The pot is included.";
    document.getElementById("product-price").textContent = "$20";
}

function handleAddToCart() {
    console.log("Button clicked!");
    
    let productName = document.getElementById("product-name").textContent;
    let productPrice = document.getElementById("product-price").textContent = "$25";
    let productColor = document.getElementById("color").value;
    let productSize = document.getElementById("size").value;

    const cartItem = {
        name: productName,
        price: productPrice,
        color: productColor,
        size: productSize
    };

    console.log(cartItem);
}

document.getElementById("addToCart").addEventListener("click", handleAddToCart);