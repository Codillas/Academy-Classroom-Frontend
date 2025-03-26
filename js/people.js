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
    location.href = "/pages/login.html";
}

const peopleTableBody = document.querySelector("#peopleTableBody");

async function getPeople() {
    const response = await fetch("https://academy-classroom-backend-0xay.onrender.com/persons", {
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
            <tr id="${person.id}">
                <td>${person.id}</td>
                <td>${person.first_name}</td>
                <td>${person.last_name}</td>
                <td>${person.email}</td>
                <td>
                    <button class="btn btn-danger" onclick="deletePerson('${person.id}')">Delete</button>
                </td>
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


async function deletePerson(personId) {
    const response = await fetch(`https://academy-classroom-backend-0xay.onrender.com/persons/${personId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    });

    if (response.ok) {
        alert("Person deleted successfully.");
        // If you get an error that query selector has invalid CSS selector please use getElementById instead of querySelector
        document.getElementById(personId).remove();
    } else {
        alert("Person was not deleted!");
    }
}