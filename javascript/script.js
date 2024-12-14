// & GLOBAL LOGIN VARIABLES
var loginEmail= document.getElementById("loginEmail");
var loginPassword= document.getElementById("loginPassword");
var btn= document.getElementById("btn");
btn.addEventListener("click",login);
//^ LOGIN EMPTY FUNCTION
function isLoginEmpty() {
    if(loginEmail.value=="" || loginPassword.value=="") {
        return false;
    }
    else {
        return true;
    }
}
//^ LOGIN FUNCTION
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false;
    }
    else {
        checkLocalStorage();
    }
}
// ^ CHECK LOCAL STORAGE
function checkLocalStorage() {
    var storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    var foundUser = storedUsers.find(user => user.email === loginEmail.value && user.password === loginPassword.value);

    if (foundUser) {
        document.getElementById('incorrect').innerHTML = '<span class="text-success m-3">Login Successful!</span>';
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        setTimeout(() => {
            window.location.href = '../html/profile.html';
        }, 1000);
    } else {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">Incorrect Email or Password</span>';
    }
}

