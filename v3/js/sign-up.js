document.querySelector("#signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.querySelector("#firstName").value
    let lastName = document.querySelector("#lastName").value
    let email = document.querySelector("#email").value
    let password = document.querySelector("#password").value

    let signUpRequestBody = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
    }

    console.log(signUpRequestBody)
})