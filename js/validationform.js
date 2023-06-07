function validateForm() {

    let nameVal = document.contactForm.name.value;
    let emailVal = document.contactForm.email.value;
    let mobVal = document.contactForm.mobile.value;
    let countryVal = document.contactForm.country.value;
    let genderVal = document.contactForm.gender.value;
    let hobbyVal = document.contactForm.hobbies.value;


    if (nameVal === '') {
        document.getElementById("nameErr").innerHTML = 'Pls Enter Name';
    } else {
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (nameRegex.test(nameVal)) {
            document.getElementById("nameErr").innerHTML = '';
        } else {
            document.getElementById("nameErr").innerHTML = 'Pls Enter Valid Name';
        }
    }

    if (emailVal === '') {
        document.getElementById("emailErr").innerHTML = 'Pls Enter Email Id';
    } else {
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (emailRegex.test(emailVal)) {
            document.getElementById("emailErr").innerHTML = '';
        } else {
            document.getElementById("emailErr").innerHTML = 'Pls Enter Valid Email Id';
        }
    }

    if (mobVal === '') {
        document.getElementById("mobileErr").innerHTML = "please enter mobile No."
    } else {

        const mobregex = /^\d{10}$/;

        if (mobregex.test(mobVal)) {
            document.getElementById("mobileErr").innerHTML = "";
        } else {
            document.getElementById("mobileErr").innerHTML = "please enter valid mobile No."
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
        document.getElementById("countryErr").innerHTML = 'Pls Select Country';
    } else {
        document.getElementById("countryErr").innerHTML = '';
    }

    if (genderVal === '') {
        document.getElementById("genderErr").innerHTML = 'Pls Select Gender';
    } else {
        document.getElementById("genderErr").innerHTML = '';
    }

    if (hobbyVal === '') {
        document.getElementById("hobbyErr").innerHTML = 'Pls Select Hobby';
    } else {
        document.getElementById("hobbyErr").innerHTML = '';
    }


    console.log(nameVal);
    console.log(emailVal);
    console.log(mobVal);
    console.log(countryVal);
    console.log(genderVal);
    console.log(hobbyVal);

    return false;
}