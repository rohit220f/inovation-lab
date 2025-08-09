function validateName(name) {
    const regex = /^[A-Za-z\s]+$/;
    if (name.trim() ===" ") {
        return "Name cannot be empty";
    }
    if (!regex.test(name)) {
        return "Name can only contain letters and spaces";
    }
    return "Name is valid";
}

function validateName(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.trim() ===" ") {
        return "email cannot be empty";
    }
    if (!regex.test(email)) {
        return "Invaild email format";
    }
    return "email is valid";
}


function validateName(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (password.trim() ===" ") {
        return " password cannot be empty";
    }
    if (!regex.test(password)) {
        return "password must be at least 8 character long,contain an upper letter,and a number";
    }
    return "password is valid";
}

function validateName(phonenumber) {
    const regex = /^[0-9]{10}$/;
    if (phonenumber.trim() ===" ") {
        return "phonenumber cannot be empty";
    }
    if (!regex.test(phonenumber)) {
        return "phonenumber must be 10 digit long";
    }
    return "phonenumber is valid";
}

function validateform() {
    const name = document.getElementById("name").Value;
    const email = document.getElementById("email").Value;
    const password = document.getElementById("password").Value;
    const phonenumber = document.getElementById("phonenumber").Value;

    const nameError = validateName(name);
    const emailError = validateemail(email);
    const passwordError = validatepassword(password);
    const phonenumberError = validatephonenumber(phonenumber);

    if (
        nameError === "Name is valid"&&
        emailError === "Email is valid"&&
        passwordError === "Password is valid"&&
        phonenumberError === "Phonenumber is valid"
    ) {
        return true;
    }

    document.getElementById("nameError").innerText=
     nameError === "Name is valid" ? "" : nameError;
    document.getElementById("emailError").innerText=
     emailError === "Email is valid" ? "" : emailError;
    document.getElementById("passwordError").innerText=
     passwordError === "Password is valid" ? "" : passwordError;
    document.getElementById("phonenumberError").innerText=
     phonenumberError === "Phonenumber is valid" ? "" : phonenumberError;

     return false;
}