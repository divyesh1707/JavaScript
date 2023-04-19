// Email ID

function handlefocus() {

    let r = document.getElementById("email").value;

}

let focus = document.getElementById("email");
focus.addEventListener("focus", handlefocus);


/*blur*/

function handleblur() {

    let r = document.getElementById("email").value;

    if (r === '') {
        blur.style.borderColor = "red"
        document.getElementById("ErrorMsg").innerHTML = "Please Enter Your Email Id";
    }

}

let blur = document.getElementById("email");
blur.addEventListener("blur", handleblur);


/*keydown*/

function handleKeyDown() {
    let r = document.getElementById("email").value;


    if (r === '') {
        document.getElementById("ErrorMsg").innerHTML = "Please Enter Your Email Id";
        keyDown.style.borderColor = "red"
    } else if (r != "") {
        document.getElementById("ErrorMsg").innerHTML = "";
        keyDown.style.borderColor = "green"
    }

}

let keyDown = document.getElementById("email");
keyDown.addEventListener("keydown", handleKeyDown);


// Password

function handlefocusp() {
    let p = document.getElementById("password").value;
}

let pass = document.getElementById("password");
pass.addEventListener("focus", handlefocusp);


// Blur

function handleblurp() {

    let p = document.getElementById("password").value;

    if (p === '') {
        blurp.style.borderColor = "red"
        document.getElementById("ErrorP").innerHTML = "Please Enter Your Password";
    }
}

let blurp = document.getElementById("password");
blurp.addEventListener("blur",handleblurp);


/*keydown*/

function handleKeyDownp() {
    let p = document.getElementById("password").value;


    if (p === '') {
        document.getElementById("ErrorP").innerHTML = "Please Enter Your Password";
        keyDownp.style.borderColor = "red"
    } else if (p != "") {
        document.getElementById("ErrorP").innerHTML = "";
        keyDownp.style.borderColor = "green"
    }

}
let keyDownp = document.getElementById("password");
keyDownp.addEventListener("keydown", handleKeyDownp);


//Pass ShowHide

function pass_show(){
    let passfield = document.getElementById("password");

    if(passfield.type === "password"){
        passfield.type = "text";
    }else{
        passfield.type = "password";
    }
}