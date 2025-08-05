console.log("cart.js is loaded!  Yay!")

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

console.log("Cart items from localStorage:", cartItems);

let cartContainer = document.getElementById("cart-items");
let grandTotal = 0;

if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is currently empty.</p>"
} else {
    cartItems.forEach((item) => {    //grabs info depending on what item user clicked on//
    let itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");

    itemDiv.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        ${item.size ? `<p>Size: ${item.size}</p>` : ""}
        ${item.color ? `<p>Color: ${item.color}</p>` : ""}
        <p>Quantity: ${item.quantity}</p>
        
    `
    cartContainer.appendChild(itemDiv);
});
}

cartItems.forEach((item) => {
    grandTotal += Number(item.quantity) * Number(item.price);
});

let finalTotal = grandTotal + (grandTotal * .07);

let totalDiv = document.createElement("div");
totalDiv.classList.add("cart-total");
totalDiv.innerHTML = `
<p>Final price, with tax: $${finalTotal.toFixed(2)}</p>
`;
cartContainer.appendChild(totalDiv);

document.getElementById("clear-cart").addEventListener("click", function () { //event listener to remove stuff from cart//
    localStorage.removeItem("cart");
    location.reload(); //this reloads page, to show cleared cart//
});


//variables for checkout form//
const checkOutForm = document.getElementById("check-outform");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const streetAddress = document.getElementById("streetAddress");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const bankCard = document.getElementById("bankCard");

//regex to validate checkout orm info//
function validateFirstName(firstName) {
    const firstNameRegex = /^[A-Z][a-z]+$/;  //allows only capital and lowercase letters, with first letter being capital//
    return firstNameRegex.test(firstName);  
}

function validateLastName(lastName) {
    const lastNameRegex = /^[A-Z][a-z]+$/;  //allows only capital and lowercase letters, with first letter being capital//
    return lastNameRegex.test(lastName);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  //allows capital and lowercase letters, numbers, certain special characters, the @ symbol. the stuff you'd expect an email to have//
    return emailRegex.test(email);
}

function validateStreetAddress(streetAddress) {
    const addressRegex = /^\d+\s[\w\s.-]+$/;
    return addressRegex.test(streetAddress);
}

function validateCity(city) {
    const cityRegex = /^[A-Za-z\s]+$/;
    return cityRegex.test(city);
}

function validateState(state) {
    const stateRegex = /^[A-Z]{2}/;  //2 capital letter state abbreviation//
    return stateRegex.test(state);
}

function validatePostalCode(postalCode) {
    const postalCodeRegex = /^\d{5}(-\d{4})?$/;  //dashes can be used or not//
    return postalCodeRegex.test(postalCode);
}

function validateBankCard(bankCard) {
    const bankCardRegex = /^\d{16}$|^\d{4}-\d{4}-\d{4}-\d{4}$/;  //allows either card number with no dashes or with dashes//
    return bankCardRegex.test(bankCard);
}

//event listener to submit checkout form//
checkOutForm.addEventListener ("submit", checkOutFormSubmit)

function checkOutFormSubmit(event) {
    console.log("Checkout form listener attached", checkOutForm)
    event.preventDefault();                           //this stops form from submitting automatically//
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const streetAddressValue = streetAddress.value;
    const cityValue = city.value;
    const stateValue = state.value;
    const postalCodeValue = postalCode.value;
    const bankCardValue = bankCard.value;

    let isValid = true 

    if (!validateFirstName(firstNameValue)) {
        alert("Invalid first name!");
        isValid = false;
    }

    if (!validateLastName(lastNameValue)) {
        alert("Invalid last name!");
        isValid = false;
    }

    if (!validateEmail(emailValue)) {
        alert("Invalid email address!");
        isValid = false;
    }

    if (!validateStreetAddress(streetAddressValue)) {
        alert("Invalid address!");
        isValid = false;
    }

    if (!validateCity(cityValue)) {
        alert("Invalid city!");
        isValid = false;
    }

    if (!validateState(stateValue)) {
        alert("Invalid state!")
        isValid = false;
    }

    if (!validatePostalCode(postalCodeValue)) {
        alert("Invalid postal code!");
        isValid = false;
    }

    if (!validateBankCard(bankCardValue)) {
        alert("Invalid credit card number!");
        isValid = false;
    }

    if (isValid == true) {
        alert("Thank you for 'checking out'!  Your order has been placed!");
        localStorage.removeItem("cart");
        checkOutForm.reset();
    }
}

//fetching dummy user data to use, but user needs to actually input that data. autofill felt not great--it isn't interactive.  use tooltips to indicate info that should be typed in.//

let userData = {};

fetch("https://dummyjson.com/users/1") //this needs to be outside function otherwise it'll call every time which is not great//
.then((res) => res.json())
.then((data) => {
    userData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        address: data.address.address,
        city: data.address.city, 
        state: data.address.state,
        postalCode: data.address.postalCode,
        bankCard: data.bank.cardNumber
    }
});
