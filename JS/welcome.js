var logoutBtn = document.getElementById("logoutBtn");

if (localStorage.getItem(`registrationName`) != null) {
    userName = JSON.parse(localStorage.getItem(`registrationName`));
}

document.getElementById(`userName`).innerHTML = `Welcome ` + userName;
// console.log(userName);

logoutBtn.addEventListener(`click`, function logout() {
    window.location.assign(`index.html`)
})




