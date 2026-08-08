function togglePw() {

    let password = document.getElementById("password");
    let button = document.getElementById("toggleButton");

    if (password.type === "password") {

        password.type = "text";
        button.textContent = "Hide";

    } else {

        password.type = "password";
        button.textContent = "Show";

    }
}


function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "pass123") {

        alert("Login successful!");

        window.location.href = "ecomm.html";

    } else {

        alert("Invalid username or password!");

    }
}