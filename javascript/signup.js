function validate() { //this function will validate the signup form
    var password = document.forms["regform"]["psw"]; //grab the first password
    var passwordrpt = document.forms["regform"]["psw-repeat"]; //grab the repeat

    if (document.getElementById('valida').checked) { //see if the radio head for agree is checked
        document.getElementById("val2").style.display = "none"; //if it is then hide the messsage
    }

    if (password.value == passwordrpt.value) { //see if the password matches
        document.getElementById("val").style.display = "none"; //if it does then hide the message
    }

    if (password.value != passwordrpt.value) { //see if the password doesnt match
        document.getElementById("val").style.display = "flex"; //if they dont match then show the error message
        password.focus();
        return false; //prevent the form from moving on
    }

    if (document.getElementById('validd').checked) { //see if the decline button is checked
        document.getElementById("val2").style.display = "flex"; //if it is then show the error message
        return false; //prevent the form from moving on
    }

    return true; //move on
}
