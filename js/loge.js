document.getElementById('login-btn').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get password
    const passwordField = document.getElementById('user-pass');
    const userPass = passwordField.value;

    if (userEmail == 'sontan@bap.com' && userPass == 'secret') {
        window.location.href = 'banking.html';

    }
});