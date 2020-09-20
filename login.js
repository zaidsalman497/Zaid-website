
var element = document.getElementById("submit-button");
alert(element);
element.onclick = function() { 
    if(document.getElementsByName("user").value === "zaidsalman497") {
        window.location.href = "index.html";
    }
    
    alert('unable to login');
 }
alert('zaid');