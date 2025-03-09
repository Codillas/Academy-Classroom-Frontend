document.querySelector("#loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    let loginRequestBody = {
        email: email,
        password: password,
    }

    console.log(loginRequestBody)
})