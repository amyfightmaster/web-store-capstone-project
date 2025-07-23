console.log("cart.js is loaded!  Yay!")

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
console.log("Cart items from localStorage:", cartItems);

let cartContainer = document.getElementById("cart-items");

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
    `

    cartContainer.appendChild(itemDiv);
});
}

document.getElementById("clear-cart").addEventListener("click", function () { //event listener to remove stuff from cart//
    localStorage.removeItem("cart");
    location.reload(); //this reloads page, to show cleared cart//
});

const checkOutForm = document.getElementById("check-outform");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const streetAddress = document.getElementById("streetAddress");
const city = document.getElementById("city");
const state = document.getElementById("state");
const postalCode = document.getElementById("postalCode");
const bankCard = document.getElementById("bankCard");

function validateFirstName(firstName) {
    const firstNameRegex = /[a-zA-Z]/;
    return firstNameRegex.test(firstName);  
}

function validateLastName(lastName) {
    const lastNameRegex = /[a-zA-Z]/;
    return lastNameRegex.test(lastName);
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validateStreetAddress(streetAddress) {
    const addressRegex = /^\d+\s[\w\s.-]+$/;
    return addressRegex.test(address);
}

function validateCity(city) {
    const cityRegex = /^[A-Za-z\s]+$/;
    return cityRegex.test(city);
}

function validateStateRegex(state) {
    const stateRegex = /^[A-Z]{2}/;  //2 capital letter state abbreviation//
    return stateRegex.test(state);
}

function validatePostalCode(postalCode) {
    const postalCodeRegex = /^\d{16}$|^\d{4}-\d{4}-\d{4}-\d{4}$/;  //dashes can be used or not//
    return postalCodeRegex.test(postalCode);
}

function validateBankCard(bankCard) {
    const bankCardRegex = /^\d{16}$|^\d{4}-\d{4}-\d{4}-\d{4}$/;
    return bankCardRegex.test(bankCard);
}

checkOutForm.addEventListener ("submit", checkOutFormSubmit)

function checkOutFormSubmit(event) {
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

    if (isValid) {
        alert("Thank you for 'checking out'!  Your order has been placed!");
        localStorage.removeItem("cart");
        checkOutForm.reset();
    }
}

fetch("https://dummyjson.com/users/1")
.then((res) => res.json())
.then((data) => {
    console.log("Showing up!");
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;

    if (data.address) {
        streetAddress.value = data.address.address || "";
        city.value = data.address.city || "";
        state.value = data.address.state || "";
        postalCode.value = data.address.postalCode || "";
    }
});

