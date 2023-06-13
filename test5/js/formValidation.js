const printErr = (id, msg) => {
    document.getElementById(id).innerHTML = msg;
}

function regForm() {
    let ageVal = document.registration.age.value;
    let addressVal = document.registration.address.value;
    let dobVal = document.registration.dob.value;
    let hobbyVal = document.registration.hobby;
    let checkVal = document.registration.check;

    let temp = [];

    console.log(ageVal);
    console.log(addressVal);
    console.log(dobVal);
    console.log(hobbyVal);

    if (ageVal === '') {
        printErr("ageErr", 'Pls Enter Your Age')
    } else {
        if (isNaN(ageVal)) {
            printErr("ageErr", 'Pls Enter valid Age')
        } else if (ageVal < 0 || ageVal > 150) {
            printErr("ageErr", 'Pls Enter Valid Age')
        } else {
            printErr("ageErr", '')
        }
    }
    // const parseAge =  ageVal;

    // if(isNaN(parseAge) || parseAge > 1 || parseAge < 150 ){
    //     return false;
    // }
    // return true;

    if (addressVal === '') {
        printErr("addressErr", 'Pls Enter Address')
    } else {
        printErr("addressErr", '')
    }

    if (dobVal === '') {
        printErr("dobErr", 'Pls Select Date of Birth')
    } else {
        printErr("dobErr", '')
    }

    for (let i = 0; i < hobbyVal.length; i++) {
        if (hobbyVal[i].checked) {
            temp.push(hobbyVal[i].value);
        }
    }

    if (temp.length >= 2) {
        printErr("hobbyErr", '');
    } else {
        printErr("hobbyErr", "Pls Select at least 2 hobbies");
    }

    if (checkVal.checked) {
        printErr("checkErr", '');
    } else {
        printErr("checkErr", 'Pls Select Terms & Condition');
    }

    return false;
}