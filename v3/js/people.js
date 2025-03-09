const jwt = localStorage.getItem("JWT");

const tableBody = document.querySelector("#peopleTableBody");

async function getPersons() {
    const response = await fetch("http://localhost:8080/persons", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${jwt}`
        },
    });

    const persons = await response.json();

    let tableBodyHtml = ``;

    if (!response.ok) {
        alert("Error while getting persons.");
        return;
    }

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

    tableBody.innerHTML = tableBodyHtml;
}

getPersons();