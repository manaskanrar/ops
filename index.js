// password show and hide program
var username = document.getElementById("username");
var password = document.getElementById("password");

function mypass(){
    if(password.type=="password"){
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}


// complete program