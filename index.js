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