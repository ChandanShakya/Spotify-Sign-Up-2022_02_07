var recaptcha_response = '';

function validate() {
    
    var form = document.forms["MainForm"];
    var email = form.elements.email.value;
    
    var simpleEmailRegex = /\S+@\S+\.\S+/;

    if (email == "") {
        document.getElementById("email-error").innerHTML = '<span style="color:red;"> X Email cannot be empty.</span>';
        return false;
    }
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;"> X Confirm you are not a robot.</span>';
        return false;
    }
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

function noError(errorName){
    var error = document.getElementById($errorName);
    error.classList.remove("error");
}