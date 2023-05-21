let regRef = document.getElementById("user-reg");

let reg = [];

const handleReg = () => {
    let uname = document.getElementById("name").value;
    let uemail = document.getElementById("email").value;
    let upass = document.getElementById("password").value;
    let udob = document.getElementById("dob").value;

    let uId = Math.floor(Math.random() * 1000);
    console.log(uId);

    let localData = JSON.parse(localStorage.getItem("userdata"));
    console.log('>> localData >> ', localData);

    if (localData) {
        localData.push({ uname, uemail, upass, udob });
        localStorage.setItem("userdata", JSON.stringify(localData));
        // window.location = "/index.html"
    } else {
        reg.push({ uname, uemail, upass, udob });
        localStorage.setItem("userdata", JSON.stringify(reg));
    }

    if (regRef != "") {
        window.location = "/index.html"
    } else {
        alert("Pls Enter Details!");
    }
    console.log(uname, uemail, upass, udob);
    event.preventDefault();
}


regRef.addEventListener("submit", handleReg);