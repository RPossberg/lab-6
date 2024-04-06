console.log("Hello from index.js");

/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

// getContacts function
function getContacts() {
  fetch("public/data/contacts.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderContacts(data);
    });
}

// renderContacts function
function renderContacts(contacts) {
  const contactsDiv = document.getElementById("contacts");
  contactsDiv.innerHTML = "";
  contacts.forEach((contact) => {
    const template = `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${contact.name}</h5>
        </div>
        <small>${contact.email}</small>
      </div>
    `;
    contactsDiv.innerHTML += template;
  });
}

getContacts();
