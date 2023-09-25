// Side Navbar
document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
// Side Navbar

// Order Date From Modal
function updateOrderDate() {
  var currentDate = new Date();
  var dateString = currentDate.toLocaleDateString(); // Get the current date in a readable format
  var orderDateInput = document.querySelector("input[name='orderDate']");
  orderDateInput.value = dateString; // Update the input field with the current date
}

// Update the order date initially and every second (real-time)
setInterval(updateOrderDate, 1000); // Update every 1000 milliseconds (1 second)
// Order Date From Modal

// Modal Form save in Local Storage
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addUser1Form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);

    // Convert form data to a plain object
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Store the data in localStorage
    localStorage.setItem("formData", JSON.stringify(data));

    // You can also redirect the user to another page or perform other actions here
    alert("Data saved successfully!");
  });
});
// Modal Form save in Local Storage

// Multiple Data Store in Local Storage
document.addEventListener("DOMContentLoaded", function () {
  // Select the form and the "Save" button
  const form = document.getElementById("addUser1Form");
  const saveButton = document.getElementById("saveButton");

  // Add an event listener to the "Save" button
  saveButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Create an object to store the form data
    const formData = {};

    // Loop through form elements and collect their values
    const formElements = form.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    // Generate a unique key for each entry in localStorage (you can use a timestamp or a random number)
    const uniqueKey = Date.now().toString();

    // Save the form data to localStorage
    localStorage.setItem(uniqueKey, JSON.stringify(formData));

    // Optionally, you can display a confirmation message
    alert("Form data saved successfully!");

    // Clear the form after saving
    form.reset();
  });
});
// Multiple Data Store in Local Storage

// Data Show in Table
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("addUser1Form");
  const saveButton = document.getElementById("saveButton");
  const tableBody = document.querySelector("#excel-table tbody");

  // Function to generate a 15-digit tracking number
  function generateTrackingNumber() {
    return Math.floor(100000000000000 + Math.random() * 900000000000000);
  }

  saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    const formData = {};
    // const formElements = form.elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    const uniqueKey = Date.now().toString();
    localStorage.setItem(uniqueKey, JSON.stringify(formData));

    alert("Form data saved successfully!");
    form.reset();

    // Populate the table with data from localStorage
    const trackingNumber = generateTrackingNumber();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${formData.orderRef}</td>
      <td>${trackingNumber}</td>
      <td>${formData["customerName"]}</td>
      <td>${formData["booking-weight"]} kg</td>
      <td>${formData["address"]}</td>
      <td>${formData["state-cityName"]}</td>
      <td>${formData.wallet_address || ""}</td>
      <td>${formData[" orderAmount"]} PKR</td>
      <td>Hold</td>
      <td>WearHouse</td>
    `;

    tableBody.appendChild(newRow);
  });

  // Populate the table with existing data from localStorage
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const data = JSON.parse(localStorage.getItem(key));

    const trackingNumber = generateTrackingNumber();
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${data.orderRef}</td>
      <td>${trackingNumber}</td>
      <td>${data["customerName"]}</td>
      <td>${data["booking-weight"]} kg</td>
      <td>${data["address"]}</td>
      <td>${data["state-cityName"]}</td>
      <td>${data.wallet_address || ""}</td>
      <td>${data[" orderAmount"]} PKR</td>
      <td>Hold</td>
      <td>WearHouse</td>
    `;

    tableBody.appendChild(newRow);
  }
});
// Data Show in Table
