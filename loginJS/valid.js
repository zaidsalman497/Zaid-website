var email = document.forms['form']['email']
var password = document.forms['form']['password']

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var invalid_user =  document.getElementById('invalid_login');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);

function validated(){
    if (email.value.indexOf('@') == -1) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

    if (email.value != 'zaidsalman497@gmail.com' && password.value != 'spic@pop123') {
        invalid_user.style.display = "block";
        email.focus();
        return false;
    }
  
    
}


function email_Verify(){
    if (email.value.length >= 8)
    email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
}

function password_Verify(){
    if (password.value.length >= 8)
    password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
}

