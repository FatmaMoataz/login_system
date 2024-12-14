window.onload = function() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        var welcomeMessage = document.getElementById('username');
        welcomeMessage.innerText = `Welcome, ${currentUser.name}!`;
    } else {
        window.location.href = '../index.html';
    }
};
document.querySelector('.logout-btn').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.href = '../index.html'; 
});
