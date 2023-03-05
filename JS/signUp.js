var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var btnSignUp = document.getElementById("btnSignUp");
var errorMessage = document.getElementById('errorMessage');

signUpData = [];
// var registerName = [];
// var userName = localStorage.getItem(`registrationName`);
// console.log(signUpData);

if (localStorage.getItem(`registration`) != null) {
    signUpData = JSON.parse(localStorage.getItem(`registration`));
}

// Sign Up

function emailExist() {
    for (var i = 0; i < signUpData.length; i++) {
        if (signUpData[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}
function errorMsg() {
    errorMessage.classList.replace('text-success', 'text-danger');
    errorMessage.classList.remove('d-none');

}
btnSignUp.addEventListener('click', function signUp() {

    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        errorMsg()
        errorMessage.innerHTML = "All inputs are required";
    }
    else {
        if (validationPass() == true) {
            var signUp = {
                name: signUpName.value,
                email: signUpEmail.value,
                password: signUpPassword.value,
            }

            if (emailExist() == false) {
                errorMsg();
                errorMessage.innerHTML = "Email Already Exists";

            }
            else {
                signUpData.push(signUp)
                localStorage.setItem('registration', JSON.stringify(signUpData))
                errorMessage.classList.remove('d-none');
                errorMessage.classList.replace('text-danger', 'text-success');
                errorMessage.innerHTML = "Success";

            }
        }
        else {
            errorMsg();
            errorMessage.innerHTML = "Password min 8 Char. ,contains UpperCase , LowerCase & one Special Character";
        }
    }


})

//Password
function validationPass() {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(signUpPassword.value) == true) {
        return true
    }
    else {
        return false
    }
}
// console.log(validationPass());