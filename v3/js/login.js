const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const email = emailInput.value;
    const password = passwordInput.value;

    const loginRequestBody = {
        email: email,
        password: password,
    }

    const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(loginRequestBody)
    });

    const data = await response.json();

    localStorage.setItem("JWT", data.token);

    if (response.ok) {
        alert("Login successful!");
        location.href = "/v3/people.html";
    } else {
        alert("Login failed!");
    }
});