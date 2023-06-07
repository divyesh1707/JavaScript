function validateForm() {
    console.log('dhdhd');

    let nameVal = document.contactForm.name.value;
    let emailVal = document.contactForm.email.value;
    let mobVal = document.contactForm.mobile.value;
    let countryVal = document.contactForm.country.value;
    let genderVal = document.contactForm.gender.value;
    let hobbyVal = document.contactForm.hobbies.value;


    if (nameVal === '') {
        document.getElementById("nameErr").innerHTML = 'Pls Enter Name';
    } else {
        document.getElementById("nameErr").innerHTML = '';
    }

    if (emailVal === '') {
        document.getElementById("emailErr").innerHTML = 'Pls Enter Valid Email Id';
    } else {
        document.getElementById("emailErr").innerHTML = '';
    }

    if (mobVal === '') {
        document.getElementById("mobileErr").innerHTML = 'Pls Enter Valid Mob No';
    } else {
        document.getElementById("mobileErr").innerHTML = '';
    }

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