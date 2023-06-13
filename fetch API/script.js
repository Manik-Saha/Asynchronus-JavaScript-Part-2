//reading data from a json file
fetch('./data.json')
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
    })

//reading data from a text file
fetch("./text.txt")
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
    });

//reading data from a api
function fetchUser() {
    fetch("https://random-data-api.com/api/address/random_address")
      .then((response) => response.json())
      .then((data) => {
        displayAddress(data);
      });
}

function displayAddress(data) {
  const section = document.querySelector("#show-user");
    section.innerHTML = `
  <strong>Full Address:</strong> ${data.full_address} <br>
  <strong>Street Name:</strong> ${data.street_name} <br>
  <strong>City:</strong> ${data.city} <br>
  <strong>Country:</strong> ${data.country} <br>
  <strong>Tome Zone:</strong> ${data.time_zone} <br>
  `;
}

fetchUser();
document.querySelector("#btn-address").addEventListener("click", fetchUser);