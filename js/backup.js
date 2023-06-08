const printErr = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}

function validateForm() {

    let nameVal = document.contactForm.name.value;
    let emailVal = document.contactForm.email.value;
    let mobVal = document.contactForm.mobile.value;
    let countryVal = document.contactForm.country.value;
    let genderVal = document.contactForm.gender.value;
    let hobbyVal = document.contactForm.hobbies;

    console.log(hobbyVal[0].value);

    let nameErr = true;
    let emailErr = true;
    let mobileErr = true;
    let countryErr = true;
    let genderErr = true;
    let hobbyErr = true;


    let temp = [];

    for (let i = 0; i < hobbyVal.lenght; i++) {
        if (hobbyVal[i].checked) {
            temp.push(hobbyVal[i].value);
        }
    }

    if (temp.lenght >= 2) {
        printErr("hobbyErr", '');
    } else {
        printErr("hobbyErr", "Pls Select at least 2 hobbies");
    }


    if (nameVal === '') {
        printErr("nameErr", 'Pls Enter Name');
    } else {
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (nameRegex.test(nameVal)) {
            printErr("nameErr", '');
            nameErr = false;

        } else {
            printErr("nameErr", 'Pls Enter valid Name');
        }
    }

    if (emailVal === '') {
        printErr("emailErr", "Pls Enter Email Id");
    } else {
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (emailRegex.test(emailVal)) {
            printErr("emailErr", '');
            emailErr = false;
        } else {
            printErr("emailErr", "Pls Enter Valid Email Id");
        }
    }

    if (mobVal === '') {
        printErr("mobileErr", "Pls Enter Mob No");
    } else {

        const mobregex = /^\d{10}$/;

        if (mobregex.test(mobVal)) {
            printErr("mobileErr", '');
            mobileErr = false;
        } else {
            printErr("mobileErr", "Pls Enter Valid Mob No");
        }

    }

    // if (mobVal === '') {
    //     document.getElementById("mobileErr").innerHTML = 'Pls Enter Mob No';
    // } else {
    //     const mobregex = /^(\+91|0)?[6789]\d{9}$/;

    //     if (mobregex.test(mobVal)) {
    //         document.getElementById("mobileErr").innerHTML = '';
    //     } else {
    //         document.getElementById("mobileErr").innerHTML = 'Pls Enter Mob No';
    //     }
    // }

    if (countryVal === '0') {
        printErr("countryErr", "Pls Select Country");
    } else {
        printErr("countryErr", '');
        countryErr = false;
    }

    if (genderVal === '') {
        printErr("genderErr", "Pls Select Country");
    } else {
        printErr("genderErr", '');
        genderErr = false;
    }

    if (nameErr || emailErr || mobileErr ||  countryErr || genderErr ||  hobbyErr ){
        return false;
    }else{
        return true;
    }

}