// step-1: add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('btn-submit clicked');


    // step-2: get the email address  inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    // step-3: get the email password
    // set id on the html element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);


    // step-4:variy email and password
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Toke ami teijjo sontan ghosona korlam.');
    }
})