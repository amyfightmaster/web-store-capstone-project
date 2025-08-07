document.addEventListener("DOMContentLoaded", () => {
    updateLogin();
});

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logout")
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const greeting = document.getElementById("greeting");

let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let user = JSON.parse(localStorage.getItem("user")) || null; 

//shows/hides login button and changes greeting based on whether user is logged in or guest//

function updateLogin() {
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let user = JSON.parse(localStorage.getItem("user")) || null; 

if (isLoggedIn && user) {
    greeting.textContent = `Hello, ${user.username}!  Good to see you again!`;
    loginButton.style.display = "none";
    logoutButton.style.display = "block";
    loginContainer.style.display = "none";
} else {
    greeting.textContent = `Hello, Guest!  Please log in!`;
    loginButton.style.display = "block";
    logoutButton.style.display = "none";
}
}

loginButton.addEventListener("click", showLogin);

function showLogin() {
    if (loginContainer.style.display !== "none") {
        loginContainer.style.display = "none";
    } else {
        loginContainer.style.display = "block";
    }
}

//logs user out when clicked//

logoutButton.addEventListener("click", logoutUser);

function logoutUser() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");

        updateLogin();

        greeting.textContent = `Hello, Guest!  Please log in!`;
        loginButton.style.display = "block";
        logoutButton.style.display = "none";
}

function validateUsername(username){
    const usernameRegex = /^[a-zA-Z0-9_]{2,15}$/;  //regex to determine username requirements //
    return usernameRegex.test(username);            
}

function validatePassword(password) {
    const passwordRegex = /^.*(?=.{6,})(?=.*[a-zA-Z]).*$/  //regex to determine password requirements//
    return passwordRegex.test(password);
}

loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();                //keeps form from reloading//

    const username = usernameInput.value;
    const password = passwordInput.value;

    //fetch request to node.js server to allow login; utilizes username and password from dummyJSON user list//

    try {                                  //try-catch block to hopefully catch any sneaky errors//
        const response = await fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", JSON.stringify({ username }));
            greeting.textContent = `Hello, ${username}!  Good to see you again!`;

            updateLogin();
        } else {
            alert("Login failed!")
        }
    } catch (error) {
        console.error(error);
        alert('It looks like something went wrong. Please try again.');
    }
});


