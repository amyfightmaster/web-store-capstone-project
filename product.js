document.addEventListener("DOMContentLoaded", function () {

console.log("JS file connected!");  

//variables for greeting, quantity buttons, add to cart, and size and color drop-downs//
const greeting = document.getElementById("greeting");
const plusButton = document.querySelector(".plus-button");
const minusButton = document.querySelector(".minus-button");
const quantityInput = document.getElementById("quantity-input");
const addToCartButton = document.getElementById("addToCartButton");
const sizeSelect = document.getElementById("size");
const colorSelect = document.getElementById("color");

let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let user = JSON.parse(localStorage.getItem("user")) || null; 


if (greeting) {
    if (isLoggedIn && user) {
    greeting.textContent = `Hello, ${user.username}!  Good to see you again!`;
} else {
    greeting.textContent = `Hello, Guest!  Please log in!`;
}
}

//disabling add to cart button when user is not logged in//

if (addToCartButton) {
    addToCartButton.disabled = !isLoggedIn;
    if (!isLoggedIn) {
        addToCartButton.title = "Log in to add items to your cart!"
    }
}

if (plusButton) {
    plusButton.disabled = !isLoggedIn;
    if (!isLoggedIn) {
        plusButton.title = "Log in to add items to your cart!"
    }
}

if (minusButton) {
    minusButton.disabled = !isLoggedIn;
    if (!isLoggedIn) {
        minusButton.title = "Log in to add items to your cart!"
    }
}

if (quantityInput) {
    quantityInput.disabled = !isLoggedIn;
    if (!isLoggedIn) {
        quantityInput.title = "Log in to add items to your cart!"
    }
}




console.log({ sizeSelect, colorSelect, quantityInput });
 const size     = sizeSelect  ? sizeSelect.value  : null;
 const color    = colorSelect ? colorSelect.value : null;
 const quantity = quantityInput   ? parseInt(quantityInput.value, 10) : 1;


//getting product ID for product user clicked on and displaying info, including name, description, price, etc.// 
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID:", productId);

//only displays specific product and relevant information based on which product card user clicked on index.html//
if (productId === "1") {

    const sizes = ["S", "M", "L", "XL", "2X"];
    const colors = ["Red, Blue and White", "Blue and Purple", "Green, Blue and Yellow", "Orange and Black", "Yellow and Blue"];

    document.getElementById("product-name").textContent = "Tie-Dye T-shirt";
    document.getElementById("product-description").textContent = "Available in sizes S, M, L, XL, 2X and in multiple colors.  One of a kind, hand-dyed cotton shirt.  Once dyed, the shirts were cured for 24 hours to ensure that the tie-dye color lasts.";
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

    const imageURLs = [
        "images/tiedye_tshirt_1.jpeg",
        "images/tiedye_shirt_2.jpeg",
        "images/tiedye_shirt_3.jpeg", 
        "images/tiedye_shirt_4.jpeg",
        "images/tiedye_shirt_5.jpeg"
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
});
}

if (productId === "2") {
    const colors = ["Natural", "White"];

    document.getElementById("product-name").textContent = "Macramé Pot-hangers";
    document.getElementById("product-description").textContent = "These sturdy macramé pot-hangers keep your plants suspended in style!  That way, you can hang them as you like, ensuring the best use of space and sunlight.  The pot-hangers are durable and have been tested.  The pot is included with the pot-hanger, as well.  Currently available in two colors.";
    document.getElementById("product-price").textContent = "$20";

    document.getElementById("color-container").style.display = "block";

    const colorSelect = document.getElementById("color");

    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });


    const imageURLs = [
        "images/pothanger_1.jpeg",
        "images/pothanger_2.jpeg",
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
});
}

if (productId === "3") {
    const colors = ["Purple", "Blue and Yellow", "Light Gray", "Pink", "Pink and Blue"];

    document.getElementById("product-name").textContent = "Macramé Keychains";
    document.getElementById("product-description").textContent = "With this handmade keychain, you can have both form and function.  This keychain is perfect for securing your keys, whether on your wrist, in your pocket, or in a bag!  The macramé loop is durable and eye-catching. With this, it will be rather more difficult to lose track of your keys.";
    document.getElementById("product-price").textContent = "$15";

    document.getElementById("color-container").style.display = "block";

    const colorSelect = document.getElementById("color");

     colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    const imageURLs = [
        "images/keychains_1.jpeg",
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
   });
}

if (productId === "4") {
    const sizes = ["Small", "Medium", "Large"];
    const colors = ["Rainbow", "Red and Black", "Sherbert", "Pastel", "Orange"];

    document.getElementById("product-name").textContent = "Paracord Bracelets";
    document.getElementById("product-description").textContent = "This stylish bracelet is sure to make a rugged statement!  They currently close with a plastic buckle, so they are easy to put on and remove.  The bracelets are available in three sizes, as well as multiple colors.";
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

       const imageURLs = [
        "images/paracord_bracelets.jpeg",
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
   });

}

if (productId === "5") {
    const colors = ["Green White and Blue", "Yellow and White", "White", "Green and Orange", "Green"];

    document.getElementById("product-name").textContent = "Dreamcatchers";
    document.getElementById("product-description").textContent = "These dreamcatchers are made using cotton yarn and other materials, such as pony beads and synthetic or natural feathers.  Available in 3-inch size and in multiple colors.  These dreamcatchers are a labor of love, and each one is prayed over so that the recipient might know peace and sweet dreams. (Please note, Handmade by Peg humbly asks that you not use the dreamcatchers as jewelry, as that is not the intended purpose of the item.)";
    document.getElementById("product-price").textContent = "$5";

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

    const imageURLs = [
        "images/dreamcatcher_1.jpeg",
        "images/dreamcatcher_2.jpeg"
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
   });


}

if (productId === "6") {
    const colors = ["Tan and Brown", "Light Gray and Red", "Green and Red", "Green and Orange", "Pink and Purple"];

    document.getElementById("product-name").textContent = "Potholders";
    document.getElementById("product-description").textContent = "These sturdy potholders are made from 100% cotton in a variety of colors and patterns.  They are handmade on a small loom using loops of cloth, and each one is unique.  Additionally, their composition as 100% cotton means that they will not melt at a certain temperature, unlike potholders made with synthetic fabrics.  These potholders have been hand-tested, and found to be both appealing and functional.";
    document.getElementById("product-price").textContent = "$15";

  document.getElementById("color-container").style.display = "block";


    colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    const imageURLs = [
        "images/potholders_1.jpeg",
        "images/potholders_2.jpeg",
        "images/potholders_3.jpeg"
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
   });
}

if (productId === "7") {
    const colors = ["Yellow and Orange", "Blue", "Green", "Pink and Yellow", "Purple and Yellow"];
    document.getElementById("product-name").textContent = "Suncatchers";
    document.getElementById("product-description").textContent = "These beaded suncatchers bring light and cheer, and the crystal upon the end reflects the sun's light.  May of them are made with symbols of Peg's faith, or symbols of love and positivity such as the hearts.  We here at Handmade by Peg hope that these suncatchers might bring a little light to you, too!";
    document.getElementById("product-price").textContent = "$15";

   document.getElementById("color-container").style.display = "block";

   colors.forEach(color =>{
        const option = document.createElement("option");
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });

    const imageURLs = [
        "images/suncatcher.jpeg",
        "images/suncatcher_1.jpeg",
        "images/suncatcher_2.jpeg"
    ];

   const container = document.getElementById("product-images-container");

   imageURLs.forEach(url => {
    const image = document.createElement("img");
    image.src = url;
    image.alt = "Product image";
    container.appendChild(image);
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
    let productPrice = parseFloat(document.getElementById("product-price").textContent.replace("$", ""));
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
        match.quantity = Number(match.quantity) + Number(productQuantity);
    } else {
         cart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    console.log("Cart Updated: !", cart);
};

document.getElementById("addToCart");

addToCartButton.addEventListener("click", handleAddToCart);

});
