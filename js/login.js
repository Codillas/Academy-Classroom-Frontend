const token = localStorage.getItem("JWT");

if (token != null) {
    location.href = "/pages/people.html";
}

const loginForm = document.querySelector("#loginForm");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    await login();
});

async function login() {

    const email = emailInput.value;
    const password = passwordInput.value;

    const loginRequestBody = {
        email: email,
        password: password,
    };

    const response = await fetch("https://academy-classroom-backend-0xay.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginRequestBody),
    });

    if (response.ok) {

        const data = await response.json();

        localStorage.setItem("JWT", data.token);

        alert("Login Successful!");
        location.href = "/pages/people.html";
    } else {
        alert("Login Failed!");
    }
}