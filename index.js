const showLoginButton = document.getElementById("showLogin");

const loginContainer = document.getElementById("login-container");

showLoginButton.addEventListener("click", showLogin);

function showLogin() {
    if (loginContainer.style.display !== "none") {
        loginContainer.style.display = "none";
    } else {
        loginContainer.style.display = "block";
    }
}


const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

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

        const data = await response.text(); 
        alert(data);
    } catch (error) {
        console.error('Login failed:', error);
        alert('Something went wrong. Please try again.');
    }
});

//this section used for dummy users pulled from dummyJSON API//
fetch('https://dummyjson.com/user/login', {                
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({

        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
    }),
})
.then(res => res.json())
.then((json) => console.log(json));
