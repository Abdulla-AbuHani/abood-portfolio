// Helper functions to get elements by ID and class name
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

// Getting the form elements
let userName = id("username"),
    PhoneNumber = id("Phone-Number"),
    Address = id("Address"),
    form = id("form"),
    errorMsg = classes("error"),
    Fail = classes("failure-icon"),
    Sucess = classes("success-icon");

// Form submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Validate each field
    validateField(userName, 0, "Username cannot be blank");
    validateField(PhoneNumber, 1, "Phone Number cannot be blank");
    validateField(Address, 2, "Address cannot be blank");

    // Check if all fields are valid
    if (allValid()) {
        // Redirect to the restaurant menu page
        window.location.href = "./menu.html"; // Replace with your actual URL
    }
});

// Validation function for individual fields
let validateField = (field, serial, message) => {
    if (field.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        field.style.border = "2px solid red";
        Fail[serial].style.opacity = "1";
        Sucess[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        field.style.border = "2px solid green";
        Fail[serial].style.opacity = "0";
        Sucess[serial].style.opacity = "1";
    }
};

// Function to check if all fields are valid
let allValid = () => {
    // Loop through error messages to see if any are still set
    for (let i = 0; i < errorMsg.length; i++) {
        if (errorMsg[i].innerHTML !== "") {
            return false;
        }
    }
    return true;
};























































































































































































































































/*let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let userName = id("username"),
    PhoneNumber = id("Phone-Number"),
    Address = id("Address"),
    form = id("form"),
    errorMsg = classes("error"),
    Fail = classes("failure-icon"),
    Sucess = classes("success-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation(userName, 0, "username cannot be blank");
    validation(PhoneNumber, 1, "Phone Number cannot be blank");
    validation(Address, 2, "Address cannot be blank");
    
    if (allValid()) {
        // Redirect to the restaurant menu page
        window.location.href = "http://127.0.0.1:5500/15++/index.html"; // Replace with your actual URL
    }
});

let validation = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        Fail[serial].style.opacity = "1";
        Sucess[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        Fail[serial].style.opacity = "0";
        Sucess[serial].style.opacity = "1";
    }
};

let allValid = () => {
    for (let i = 0; i < errorMsg.length; i++) {
        if (errorMsg[i].innerHTML !== "") {
            return false;
        }
    }
    return true;
};



/*let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let userName = id("username"),
    PhoneNumber = id("Phone-Number"),
    Address = id("Address"),
    form = id("form"),
    errorMsg = classes("error"),
    Fail = classes("failure-icon"),
    Sucess = classes("success-icon");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validation(userName, 0, "username cannot be blank");
    validation(PhoneNumber, 1, "Phone Number cannot be blank");
    validation(Address, 2, "Address cannot be blank");

});

let validation = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";


        Fail[serial].style.opacity = "1";
        Sucess[serial].style.opacity = "0";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";


        Fail[serial].style.opacity = "0";
        Sucess[serial].style.opacity = "1";
    }

};

*/
