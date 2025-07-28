const loginButton = document.getElementById("loginButton");
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const greeting = document.getElementById("greeting");

let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let user = JSON.parse(localStorage.getItem("user")) || null; 

if (isLoggedIn && user) {
    greeting.textContent = `Hello, ${user.username}!  Good to see you again!`;
    loginButton.style.display = "none";
} else {
    greeting.textContent = `Hello, Guest!  Please log in!`;
    loginButton.style.display = "block";
}

loginButton.addEventListener("click", showLogin);

function showLogin() {
    if (loginContainer.style.display !== "none") {
        loginContainer.style.display = "none";
    } else {
        loginContainer.style.display = "block";
    }
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
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

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
        } else {
            alert("Login failed!")
        }
    } catch (error) {
        console.error(error);
        alert('It looks like something went wrong. Please try again.');
    }
});

