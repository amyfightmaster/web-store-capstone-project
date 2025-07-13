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
    document.getElementById("product-name").textContent = "Macramé Pot-hangers";
    document.getElementById("product-descripton").textContent = "These sturdy macramé pot-hangers keep your plants suspended in style!  The pot is included.";
    document.getElementById("product-price").textContent = "$20";
}

if (productId === "3") {
    document.getElementById("product-name").textContent = "Macramé Keychains";
    document.getElementById("product-descripton").textContent = "his keychain is perfect for securing your keys, and its vibrant colors draw the eye well (and also help you remember where you put your keys).";
    document.getElementById("product-price").textContent = "$20";
}

if (productId === "4") {
    document.getElementById("product-name").textContent = "Paracord Bracelets";
    document.getElementById("product-descripton").textContent = "This stylish bracelet is sure to make a rugged statement.  Available in three sizes.";
    document.getElementById("product-price").textContent = "$15";
}

if (productId === "5") {
    document.getElementById("product-name").textContent = "Dreamcatchers";
    document.getElementById("product-descripton").textContent = "These dreamcatchers are made using cotton yarn and other materials.  Available in 'baby' sizes, small, medium.";
    document.getElementById("product-price").textContent = "$15";
}

if (productId === "6") {
    document.getElementById("product-name").textContent = "Potholders";
    document.getElementById("product-descripton").textContent = "These sturdy potholders are made from 100% cotton, meaning that they are both fine and functional.";
    document.getElementById("product-price").textContent = "$15";
}

if (productId === "7") {
    document.getElementById("product-name").textContent = "Suncatchers";
    document.getElementById("product-descripton").textContent = "These beaded suncatchers bring light and cheer, and the crystal upon the end reflects the sun's light.";
    document.getElementById("product-price").textContent = "$15";
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