console.log("cart.js is loaded!  Yay!")

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Cart items from localStorage:", cartItems);