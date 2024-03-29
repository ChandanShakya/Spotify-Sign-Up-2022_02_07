const d = new Date();
var recaptcha_response = '';
var form = document.forms["MainForm"].elements;
const errorName = [
    'email-error',
    'confirm-email-error',
    'password-error',
    'username-error',
    'Month-error',
    'Day-error',
    'Year-error',
    'gender-error',
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
    'gender'
];
const errorPromptName = [
    'Email',
    'Confirm Email',
    'Password',
    'Username',
    'Month',
    'Day',
    'Year',
    'Gender'
];

function validate() {
    var invalid = false;
    for (var i = 0; i < errorPromptName.length; i++) {
        if (i < 7) {
            if (eval('form.' + inputName[i] + '.value == ""')) {
                renderError(errorName[i]);
                document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X ' + errorPromptName[i] + ' cannot be empty.</span>';
            } else if (i == 0) {
                if (!validateEmail(eval('form.' + inputName[i] + '.value'))) {
                    renderError(errorName[i]);
                    document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X ' + errorPromptName[i] + ' is not valid.</span>';
                    invalid = true;
                } else {
                    hideError(errorName[i]);
                    document.getElementById(errorName[i]).innerHTML = '';
                }

            } else if (i == 1) {
                if (invalid == false) {
                    if (eval('form.' + inputName[i] + '.value') != eval('form.' + inputName[0] + '.value')) {
                        renderError(errorName[i]);
                        document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X ' + errorPromptName[i] + ' does not match.</span>';
                    } else {
                        hideError(errorName[i]);
                        document.getElementById(errorName[i]).innerHTML = '';
                    }
                }else{
                    renderError(errorName[i]);
                        document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X ' + errorPromptName[i-1] + ' is not valid.</span>';
                }
            } else if (i == 6) {
                var mo = parseInt(eval('form.' + inputName[i - 2] + '.value'));
                var da = parseInt(eval('form.' + inputName[i - 1] + '.value'));
                var yr = parseInt(eval('form.' + inputName[i] + '.value'));
                var monthe = new Date(yr, mo, da);
                if (monthe > d) {
                    renderError(errorName[i]);
                    document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X Date of Birth cannot be of future.</span>';
                } else {
                    hideError(errorName[i]);
                    document.getElementById(errorName[i]).innerHTML = '';
                }
            } else {
                hideError(errorName[i]);
                document.getElementById(errorName[i]).innerHTML = '';
            }
        }
        if (i == 7) {
            if (eval('form.' + inputName[i] + '.value == ""')) {
                renderError(errorName[i]);
                document.getElementById(errorName[i]).innerHTML = '<span style="color:red;"> X ' + errorPromptName[i] + ' cannot be empty.</span>';
            } else {
                hideError(errorName[i]);
                document.getElementById(errorName[i]).innerHTML = '';
            }
        }
    }

    if (recaptcha_response.length == 0) {
        renderError(errorName[8]);
        document.getElementById(errorName[8]).innerHTML = '<span style="color:red;"> X Confirm you are not a robot.</span>';
        return false;
    }
}
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}

function renderError(errorName) {
    var error = document.getElementById(errorName);
    error.classList.add("error");
}
function hideError(errorName) {
    var error = document.getElementById(errorName);
    error.classList.remove("error");
}

function validateEmail(email) {
    var simpleEmailRegex = /\S+@\S+\.\S+/;
    if (!simpleEmailRegex.test(email)) {
        return false;
    }
    return true;
}
