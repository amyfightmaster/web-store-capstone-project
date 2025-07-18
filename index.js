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
    const passwordRegex = /^.*(?=.{8,15})(?=.*[a-zA-Z]).*$/  //regex to determine password requirements//
    return passwordRegex.test(password);
}


loginForm.addEventListener("submit", submitLogin);

function submitLogin(event) {
    event.preventDefault();        //stops form from reloading//
    console.log("Checking to see if submitLogin function running.")
    const username = usernameInput.value;
    const password = passwordInput.value;

    const validUsername = validateUsername(username);
    const validPassword = validatePassword(password);

    if (!validUsername) {
        alert("That's an invalid username! The username needs to be 2-15 characters. Letters, numbers, and underscores are allowed!")
        return;
    } 

     if (!validPassword) {
        alert("That's an invalid password! The password needs to be 8-15 characters. It's got to include at least one number, one special character, and one uppercase and lowercase letter.  Let's make this password as strong as a macramé knot!")
            return;
    } 

    alert("Hooray!  You logged in successfully!")  //both useraname and password valid//
    loginForm.reset()  //resets login form, could be handy//
}

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
.then(console.log);