console.log("JS file connected!");

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
console.log("Product ID:", productId);

if (productId === "1") {
    document.getElementById("product-name").textContent = "Tie-Dye T-shirt";
    document.getElementById("product-descripton").textContent = "Available in sizes S, M, L, XL, 2X.  One of a kind, hand-dyed cotton shirt.";
    document.getElementById("product-price").textContent = "$25";
}