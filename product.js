console.log("JS file connected!");  

//variables for greeting, quantity buttons, add to cart, and size and color drop-downs//
const greeting = document.getElementById("greeting");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const quantityInput = document.getElementById("quantity-input");
const addToCart = document.getElementById("addToCartButton");
const sizeSelect = document.getElementById("size");
const colorSelect = document.getElementById("color");

let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let user = JSON.parse(localStorage.getItem("user")) || null; 

if (isLoggedIn && user) {
    greeting.textContent = `Hello, ${user.username}!  Good to see you again!`;
} else {
    greeting.textContent = `Hello, Guest!  Please log in!`;
}

    if (isLoggedIn && user) {
    greeting.textContent = `Hello, ${user.username}!  Good to see you again!`;
} else {
    greeting.textContent = `Hello, Guest!  Please log in!`;
}

//disabling add to cart button when user is not logged in//

if (!isLoggedIn && addToCartButton) {
    addToCartButton.disabled = true;
}


console.log({ sizeSelect, colorSelect, quantityInput });
 const size     = sizeSelect  ? sizeSelect.value  : null;
 const color    = colorSelect ? colorSelect.value : null;
 const quantity = quantityInput   ? parseInt(quantityInput.value, 10) : 1;


//getting product ID for product user clicked on and displaying info, including name, description, price, etc.// 
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID:", productId);

if (productId === "1") {

    const sizes = ["S", "M", "L", "XL", "2X"];
    const colors = ["Red and White", "Blue and White", "Green and Yellow", "Orange and Black", "Pink and Purple"];

    document.getElementById("product-name").textContent = "Tie-Dye T-shirt";
    document.getElementById("product-description").textContent = "Available in sizes S, M, L, XL, 2X.  One of a kind, hand-dyed cotton shirt.";
    document.getElementById("product-price").textContent = "$25";

    document.getElementById("size-container").style.display = "block";
    document.getElementById("color-container").style.display = "block";

    sizes.forEach(size =>{
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
}

if (productId === "2") {
    const colors = ["Natural", "Brown", "White", "Yellow", "Green", "Blue"];

    document.getElementById("product-name").textContent = "Macramé Pot-hangers";
    document.getElementById("product-description").textContent = "These sturdy macramé pot-hangers keep your plants suspended in style!  The pot is included.";
    document.getElementById("product-price").textContent = "$20";

    document.getElementById("color-container").style.display = "block";

    const colorSelect = document.getElementById("color");

    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

}

if (productId === "3") {
    const colors = ["Green", "Red", "Yellow", "Blue", "Pink", "Purple"];

    document.getElementById("product-name").textContent = "Macramé Keychains";
    document.getElementById("product-description").textContent = "This keychain is perfect for securing your keys, and its vibrant colors draw the eye well (and also help you remember where you put your keys).";
    document.getElementById("product-price").textContent = "$20";

    document.getElementById("color-container").style.display = "block";

    const colorSelect = document.getElementById("color");

     colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

}

if (productId === "4") {
    const sizes = ["Small", "Medium", "Large"];
    const colors = ["Blue", "Red", "Green", "Yellow", "Black", "White", "Purple"];

    document.getElementById("product-name").textContent = "Paracord Bracelets";
    document.getElementById("product-description").textContent = "This stylish bracelet is sure to make a rugged statement.  Available in three sizes.";
    document.getElementById("product-price").textContent = "$15";

    document.getElementById("size-container").style.display = "block";
    document.getElementById("color-container").style.display = "block";

    const sizeSelect = document.getElementById("size");

    sizes.forEach(size =>{
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

}

if (productId === "5") {
    const sizes = ["Baby", "Small", "Medium"];
    const colors = ["Green", "Blue", "Red", "White", "Orange", "Pink", "Purple"];

    document.getElementById("product-name").textContent = "Dreamcatchers";
    document.getElementById("product-description").textContent = "These dreamcatchers are made using cotton yarn and other materials.  Available in 'baby' sizes, small, medium.";
    document.getElementById("product-price").textContent = "$15";

    document.getElementById("size-container").style.display = "block";
    document.getElementById("color-container").style.display = "block";

    sizes.forEach(size =>{
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
    });

    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

}

if (productId === "6") {
    const colors = ["Black and White Check", "Green", "Yellow and Blue Plaid", "Brown", "Pink and Purple Stripes"];

    document.getElementById("product-name").textContent = "Potholders";
    document.getElementById("product-description").textContent = "These sturdy potholders are made from 100% cotton, meaning that they are both fine and functional.";
    document.getElementById("product-price").textContent = "$15";

  document.getElementById("color-container").style.display = "block";


    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
}

if (productId === "7") {
    const colors = ["Red", "Blue", "Green", "White", "Pink", "Purple"];
    document.getElementById("product-name").textContent = "Suncatchers";
    document.getElementById("product-description").textContent = "These beaded suncatchers bring light and cheer, and the crystal upon the end reflects the sun's light.";
    document.getElementById("product-price").textContent = "$15";

   document.getElementById("color-container").style.display = "block";

   colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
}

//event listener and function to increase quantity by 1//
plusButton.addEventListener("click", increaseQuantity);

function increaseQuantity() {
    let current = parseInt(quantityInput.value, 10);
    quantityInput.value = current + 1;
}

//event listener and function to decrease quantity by 1//
minusButton.addEventListener("click", decreaseQuantity);

function decreaseQuantity() {
    let current = parseInt(quantityInput.value, 10);
    if (current > 1) {
         quantityInput.value = current - 1;
    }
}


//event listener and function to handle adding to cart. This needed major tinkering to get quantity working right.  At first, was always pushing a new item.//
function handleAddToCart() {
    console.log("Button clicked!");
    
    let productName = document.getElementById("product-name").textContent;
    let productPrice = document.getElementById("product-price").textContent;
    let productColor = document.getElementById("color").value;
    let productSize = document.getElementById("size") ? document.getElementById("size").value : null;
    let productQuantity = document.getElementById("quantity-input").value

    const cartItem = {
        name: productName,
        price: productPrice,
        color: productColor,
        size: productSize,
        quantity: productQuantity
    };

    console.log(cartItem);
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let match = cart.find(item => 
        item.name === cartItem.name &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (match) {
        match.quantity += Number(match.quantity);
    } else {
         cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart Updated: !", cart);
};

document.getElementById("addToCart");

addToCartButton.addEventListener("click", handleAddToCart);
