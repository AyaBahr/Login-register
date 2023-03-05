var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var btnLogin = document.getElementById("btnLogin");
var errorMessage = document.getElementById('errorMessage');

var signInData = [];

// console.log(btnLogin);
if (localStorage.getItem(`registration`) != null) {
    signInData = JSON.parse(localStorage.getItem(`registration`));
}

function fieldEmpty() {
    if (signInEmail.value == "" || signInPassword.value == "") {
        return false
    }
}

// login

btnLogin.addEventListener('click', function login() {
    if (fieldEmpty() == false) {
        document.getElementById('errorMessage').classList.remove('d-none');
        document.getElementById('errorMessage').innerHTML = "All inputs are required";
    }
    else {
        var email = signInEmail.value;
        var password = signInPassword.value;

        for (var i = 0; i < signInData.length; i++) {
            if (signInData[i].email.toLowerCase() == email.toLowerCase() && signInData[i].password.toLowerCase() == password.toLowerCase()) {
                localStorage.setItem('registration', JSON.stringify(signInData))
                localStorage.setItem(`registrationName`, JSON.stringify(signInData[i].name))
                window.location.assign(`welcome.html`)
                // console.log(signInData[i].email);
            }
            else {
                document.getElementById('errorMessage').classList.remove('d-none');
                document.getElementById('errorMessage').innerHTML = "Incorrect Email or Password";
            }
        }

    }
}

)

// console.log(signInData[0].email);

