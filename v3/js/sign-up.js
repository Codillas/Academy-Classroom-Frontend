const signUpForm = document.querySelector("#signUpForm")

signUpForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const firstNameInput = document.querySelector("#firstName");
    const lastNameInput = document.querySelector("#lastName");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const signUpRequestBody = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
    }

    const response = await fetch("http://localhost:8080/sign-up", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(signUpRequestBody)
    });

    if (response.ok) {
        alert("Sign Up successful!");
        location.href = "/v3/login.html";
    } else {
        alert("Sign Up failed!");
    }
});