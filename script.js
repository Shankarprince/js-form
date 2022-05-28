let persons = [];
let choice = [];

let table = document.getElementById('table');

currentObjIndex = null;

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const pincode = document.getElementById('pincode')
const gender = document.getElementById('gender')
const state = document.getElementById('state')
const country = document.getElementById('country')

function getElements() {
    let obj = {
        firstName: firstName.value,
        lastName: lastName.value,
        address: address.value,
        pincode: pincode.value,
        gender: gender.value,
        state: state.value,
        country: country.value
    }
    return obj;
}

function addRow() {
    let newObj = getElements();

    var checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

    for (var i = 0; i < checkboxes.length; i++) {
        choice.push(checkboxes[i].value);
    }
    
    if (choice.length !== 2) {
        if (!newObj.firstName || !newObj.lastName || !newObj.address || !newObj.pincode || !newObj.gender || !newObj.state || !newObj.country) {
            alert("please fill all the input");
            return;
        }
        choice=[];
        alert("Please select exactly 2 choices!!!");
        return;
    }

    persons.push(newObj)

    loadTableData(persons)


}


function loadTableData(personsData) {

    let dataHtml = `
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Gender</th>
            <th>Choice of Food</th>
            <th>State</th>
            <th>Country</th>
        </tr>`;


    for (let person of personsData) {
        dataHtml += `
                <tr>
                <td>${person.firstName}</td>
                <td>${person.lastName}</td>
                <td>${person.address}</td>
                <td>${person.pincode}</td>
                <td>${person.gender}</td>
                <td>${choice[0]}, ${choice[1]}</td>
                <td>${person.state}</td>
                <td>${person.country}</td>
                </tr>`;
    }

    table.innerHTML = dataHtml;
    choice = [];
}