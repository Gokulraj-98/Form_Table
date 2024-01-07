function clearForm() {
  document.getElementById("formData").reset();
}

/*var tableCells = document
  .getElementById("dataTable")
  .getElementsByTagName("tbody");

var tableRow = document.createElement("tr");

var tableData1 = document.createElement("td");
tableData1.innerHTML = document.getElementById("Firstname").value;
document.body.append(tableCells)
tableCells.append(tableRow, tableData1);

function displayData() {
  var tableCells = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody");

  var tableRow = document.createElement("tr");

  var tableData1 = document.createElement("td");
  tableData1.innerHTML = document.getElementById("Firstname").value;
  tableCells.append(tableRow, tableData);
}*/

const tableBody = document.getElementById("tableBody");
document
  .getElementById("formData")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fname = document.getElementById("Firstname").value;
    console.log(fname);
    const lastname = document.getElementById("Lastname").value;
    const address = document.getElementById("Address").value;
    const pincode = document.getElementById("Pincode").value;
    const gender = document.getElementById("gender").value;
    const food = document.getElementById("food").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
    <td>${fname}</td>
    <td>${lastname}</td>
    <td>${address}</td>
    <td>${pincode}</td>
    <td>${gender}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>
    `;

    formData.reset();
  });
