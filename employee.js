
var selectedRow = null
const admin_code=1234

// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store employee data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New Employee Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New Employee Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["eid"] = document.getElementById("eid").value;
    formData["ename"] = document.getElementById("ename").value;
    formData["eemail"] = document.getElementById("eemail").value;
    formData["age"] = document.getElementById("age").value;
    formData["erole"] = document.getElementById("erole").value;

    // return Form Data
    return formData;
}
// Insert New Employee Record
function insertNewRecord(data) {
    var table = document.getElementById("emplist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.eid;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.eemail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.age;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.erole;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}

// Reset Function
function resetForm() {
    document.getElementById("eid").value = "";
    document.getElementById("ename").value = "";
    document.getElementById("eemail").value = "";
    document.getElementById("age").value = "";
    document.getElementById("erole").value = "";
    selectedRow = null;
}

// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("eid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ename").value = selectedRow.cells[1].innerHTML;
    document.getElementById("eemail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("erole").value = selectedRow.cells[4].innerHTML;
}

// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.eid;
    selectedRow.cells[1].innerHTML = formData.ename;
    selectedRow.cells[2].innerHTML = formData.eemail;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.erole;
}

// Delete Function
function onDelete(td) {
    var num = prompt("If you want to delete a record, enter your admin code.");
    if(num==admin_code){
        if (confirm('Are you sure to delete this record ?')) {
            row = td.parentElement.parentElement;
            document.getElementById("emplist").deleteRow(row.rowIndex);
            resetForm();
        }
    }else{
        alert("You cannot delete this record since you are not the admin.");
    }
}

// Check Employee validation
function validate() {
    isValid = true;

    // Employee ID validation
    if (document.getElementById("eid").value == "") {
        isValid = false;
        document.getElementById("eidvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("eidvalidationError").classList.contains("hide"))
        {
            document.getElementById("eidvalidationError").classList.add("hide");
        }
    }

    // Employee Name validation
    if (document.getElementById("ename").value == "") {
        isValid = false;
        document.getElementById("enamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("enamevalidationError").classList.contains("hide"))
        {
            document.getElementById("enamevalidationError").classList.add("hide");
        }
    }

    // Employee Email validation
    if (document.getElementById("eemail").value == "") {
        isValid = false;
        document.getElementById("eemailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("eemailvalidationError").classList.contains("hide"))
        {
            document.getElementById("eemailvalidationError").classList.add("hide");
        }
    }
    
    // Employee Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }

    // Employee Designation validation
    if (document.getElementById("erole").value == "") {
        isValid = false;
        document.getElementById("erolevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("erolevalidationError").classList.contains("hide"))
        {
            document.getElementById("erolevalidationError").classList.add("hide");
        }
    }
    return isValid;
}