// & GLOBAL VARIABLES
var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var btn = document.getElementById("btn");
btn.addEventListener("click", signUp);

// ^ SIGN UP EMPTY FUNCTION
function isSignUpEmpty() {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        return false;
    } else {
        return true;
    }
}

// ^ SIGN UP FUNCTION
function signUp() {
    if (isSignUpEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    } else {
        var userData = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var isExisting = users.some(user => user.email === signUpEmail.value);
        if (isExisting) {
            document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">Email is already registered</span>';
            return false;
        }
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('incorrect').innerHTML = '<span class="text-success m-3">Signup successful!</span>';
        signUpName.value = "";
        signUpEmail.value = "";
        signUpPassword.value = "";
    }
}
