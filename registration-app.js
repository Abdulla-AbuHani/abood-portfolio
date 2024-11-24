let id = (id) => document.getElementById(id);
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
    validateField(userName, 0, "Username cannot be blank");
    validateField(PhoneNumber, 1, "Phone Number cannot be blank");
    validateField(Address, 2, "Address cannot be blank");

    if (allValid()) {
        window.location.href = "./menu.html"; 
    }
});

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

let allValid = () => {
    for (let i = 0; i < errorMsg.length; i++) {
        if (errorMsg[i].innerHTML !== "") {
            return false;
        }
    }
    return true;
};

