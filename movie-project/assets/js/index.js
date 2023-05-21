let submitRef = document.getElementById("register");

const handleform = () => {

    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    console.log(email, pass);
    event.preventDefault();

    let userdataObj = JSON.parse(localStorage.getItem("userdata"));
    console.log('>> userdataObj login >> ', userdataObj);


    if (email === "abc@gmail.com" && pass === '123') {
        alert("Login Sucessfully");
        window.location = "../admin/admin-homepage.html"
    } else {
        if(userdataObj && userdataObj.length > 0) {
            const loginSuccess = userdataObj.find((udo) => {
                if (udo.uemail == email && udo.upass == pass) return true;
            })
            console.log('loginSuccess > ', loginSuccess);
            if (loginSuccess) {
                alert("Login Sucessfully");
                window.location = "../user/user-home.html"
            } else {
                alert("Pls Enter Valid Email and Password!");
            }
        } else {
            alert("Pls Enter Valid Email and Password!");
        }
    }

}

submitRef.addEventListener("submit", handleform);
