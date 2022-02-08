function validate() {
    var email = document.forms["MainForm"]["email"].value;
    var confirmEmail = document.forms["MainForm"]["confirmEmail"].value;
    var password = document.forms["MainForm"]["password"].value;
    var month = document.getElementsByClassName("month").value;
    var day = document.getElementsById("day").value;
    var year = document.getElementsById("year").value;

    var simpleEmailRegex = /\S+@\S+\.\S+/;

    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (email != simpleEmailRegex) {
        alert("Email must be in the format of main@email.com");
        return false;
    } else if (confirmEmail == "") {
        alert("Confirm Email must be filled out");
        return false;
    } else if (confirmEmail != email) {
        alert("Email and Confirm Email must match");
        return false;
    } else if (password == "") {
        alert("Password must be filled out");
        return false;
    } else if (month == "") {
        alert("Month must be selected");
        return false;
    } else if (day == "") {
        alert("Day must be selected");
        return false;
    } else if (year == "") {
        alert("Year must be selected");
        return false;
    }
    if(recaptcha_response.length == 0) {
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
        return false;
    }

}
function verifyCaptcha(token) {
    recaptcha_response = token;
    document.getElementById('g-recaptcha-error').innerHTML = '';
}