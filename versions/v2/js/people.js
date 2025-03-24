const token = localStorage.getItem("JWT");

if (token == null) {
    logout();
}

const logoutButton = document.querySelector("#logoutButton");

logoutButton.addEventListener("click", function() {
    logout();
});

function logout() {
    localStorage.removeItem("JWT");
    location.href = "/login.html";
}

const peopleTableBody = document.querySelector("#peopleTableBody");

async function getPeople() {
    const response = await fetch("http://localhost:8080/persons", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });

    if (response.ok) {

        const persons = await response.json();

        let tableBodyHtml = "";
        for (let i = 0; i < persons.length; i++) {
            const person = persons[i];
            tableBodyHtml += `
            <tr>
                <td>${person.id}</td>
                <td>${person.first_name}</td>
                <td>${person.last_name}</td>
                <td>${person.email}</td>
            </tr>
        `;
        }

        peopleTableBody.innerHTML = tableBodyHtml;

    } else {
        alert("Can not get people!");

        logout();
    }
}

getPeople();