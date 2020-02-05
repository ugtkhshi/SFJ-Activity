function mainForm() {
    var forms  = document.forms["mainForm"]["job"]["arrival"]["burst"].value;
    if (forms == "") {
        alert("Name must be filled out");
        return false;
    }