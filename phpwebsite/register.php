<!Doctype html>
<html>
<head>
    <title>Zaid Salman</title>
    <link rel="stylesheet" type="text/css" href="style.css">
<head/>
<body>
<div id="wrapper">
     <form method="POST" action="index.php" onsubmit="return Validate()"name="vform">
    <div>
       <input type="text" name="username" class=".textInput" placeholder="Username">
       <div id="name_error" class="val_error"><div/>
    <div/>
    <div>
       <input type="email" name="email" class=".textInput" placeholder="Email">
       <div id="email_error" class="val_error"><div/>
    <div/>
    <div>
       <input type="password" name="password" class=".textInput" placeholder="Password">
    <div/>
    <div>
       <input type="password" name="password confirmation" class=".textInput" placeholder="Password confirmation">
       <div id="password_error" class="val_error"><div/>
    <div/>
    <div>
       <input type="submit" value="Register" class="btn" name="register">
    <div/>
     </form>
     
     </form>

<div/>
<body/>


<html/>
<script type="text/javascript">
let username_document.form["vform"]["username"];
let email_document.form["vform"]["username"];
let password_document.form["vform"]["username"];
let password_confirmation document.form["vform"]["password_confirmation"];


let name_error = document.getElementById("name_error");
let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");

username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

function Validate(){
    if (username.value =="") {
        username.style.border = "lpx solid red"
        <name_error.textContent = "Username is required";
        username.focus();
        return false;
    }

if (email.value =="") {
        email.style.border = "lpx solid red"
        <email_error.textContent = "Email is required";
        email.focus();
        return false;
    }
    if (password.value =="") {
        password.style.border = "lpx solid red"
        <password_error.textContent = "Password is required";
        password.focus();
        return false;
    }

    function nameVerify(){
        if (username Value !="") {
            username.style.border = "lpx solid red"
        <username_error.innerHTML ="";
        return true

        }
    } 
    function emailVerify(){
        if (email Value !="") {
            email.style.border = "lpx solid red"
        <email_error.innerHTML ="";
        return true

        }
    }
    function passwordVerify(){
        if (password Value !="") {
            password.style.border = "lpx solid red"
        <password_error.innerHTML ="";
        return true

        }
    }  

    if (password.value != password_confirmation.value) {
        password.style.border = "1px solid red"
        password_confirmation.style.border = "1px solid red"
        password_error.innerHTML = "your password do not match the confirm password"
        return false;
    }
        
}
</script>