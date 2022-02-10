var recaptcha_response = '';
const errorName = [
    'email-error',
    'confirm-email-error',
    'password-error',
    'username-error',
    'DOB-error',
    'gender-error',
    'marketing-error',
    'g-recaptcha-error'
];
for (var i = 0; i < errorName.length; i++) {
    var error = document.getElementById(errorName[i]);
    error.classList.remove("error");
}
const inputName = [
    'email',
    'confirmEmail',
    'password',
    'username',
    'month',
    'day',
    'year',
    'gender',
    'marketing'
];
const errorPromptname = [
    'Email',
    'Confirm Email',
    'Password',
    'Username',
    'DOB',
    'Gender'
];

function validate() {

    var form = document.forms["MainForm"].elements;
    //var email = form.email.value;
    var simpleEmailRegex = /\S+@\S+\.\S+/;


    for (var i = 0; i < inputName.length; i++) {
        console.log(inputName[i]);
        if(eval('form.' + inputName[i] + '.value == ""')) {
            renderError(errorName[i]);
            document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X '+ errorPromptname[i] +' cannot be empty.</span>';
            return false;
        }else{

        }
    }
    if (recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;"> X Confirm you are not a robot.</span>';
        return false;
    }
}

function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

function noError() {
    document.forms["MainForm"].elements.email.focus();
}

function renderError(errorName) {
    var error = document.getElementById(errorName);
    error.classList.add("error");
}
function hideError(){
    
}
function validateEmail(email) {
    var simpleEmailRegex = /\S+@\S+\.\S+/;
    if (!simpleEmailRegex.test(email)) {
        return false;
    }
    return true;
}
