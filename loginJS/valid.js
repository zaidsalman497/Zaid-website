var email = document.forms['form']['email']
var password = document.forms['form']['password']

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
var invalid_user =  document.getElementById('invalid_login');

email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);

function validated(){
    if (email.value.length < 10) {
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

    if (!isUserNameAndPasswordValid(email.value, password.value)) {
        invalid_user.style.display = "block";
        email.focus();
        return false;
    }
  
    
}

function isUserNameAndPasswordValid(username, password) {
    var isValid = false;
    var listOfValidUserNameAndPassword = validUserNamesAndPasswords();
    listOfValidUserNameAndPassword.forEach(obj => {
        if(obj.username == username && obj.password == password) {
            isValid = true;
        }
    });

    return isValid;
}

function validUserNamesAndPasswords() {

    return [ 
                { username: 'zaidsalman497@gmail.com', password: 'spic@pop123'},
                { username: 'zoyasalman497@gmail.com', password: 'spic@pop123'},
                { username: 'salman497@hotmail.com', password: '1234567'}
          ];
}


function email_Verify(){
    if (email.value.length >= 10)
    email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
}

function password_Verify(){
    if (password.value.length >= 6)
    password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
}

