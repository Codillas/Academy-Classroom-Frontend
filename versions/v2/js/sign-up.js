const token = localStorage.getItem("JWT");

if (token != null) {
    location.href = "/people.html";
}

const signUpForm = document.querySelector("#signUpForm");

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

signUpForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    await signUp();
});

async function signUp() {

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const signUpRequestBody = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
    };

    const response = await fetch("http://localhost:8080/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signUpRequestBody),
    });

    if (response.ok) {
        alert("Sign Up Successfully!");
        location.href = "/login.html";
    } else {
        alert("Sign Up Failed!");
    }
}