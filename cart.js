console.log("cart.js is loaded!  Yay!")

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Cart items from localStorage:", cartItems);

let cartContainer = document.getElementById("cart-items");

if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is currently empty.</p>"
} else {
    cartItems.forEach(item => {
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        ${item.size ? `<p>Size: ${item.size}</p>` : ""}
        ${item.color ? `<p>Color: ${item.color}</p>` : ""}
    `;

    cartContainer.appendChild(itemDiv);
};
}

document.getElementById("clear-cart").addEventListener("click", function () { //event listener to remove stuff from cart//
    localStorage.removeItem("cart");
    location.reload(); //this reloads page, to show cleared cart//
});