class validation {
    constructor(n,e,m,c,g,h) {
        this.nameVal = n;
        this.emailVal = e;
        this.mobVal = m;
        this.countryVal = c;
        this.genderVal = g;
        this.hobbyVal = h;


    }
    printErr = (id, msg) => {
        document.getElementById(id).innerHTML = msg;
    }

    checkvalidation() {

      

        // console.log(hobbyVal[0].value);

        let nameErr = true;
        let emailErr = true;
        let mobileErr = true;
        let countryErr = true;
        let genderErr = true;
        let hobbyErr = true;


        let temp = [];

        for (let i = 0; i < this.hobbyVal.length; i++) {
            if (this.hobbyVal[i].checked) {
                temp.push(this.hobbyVal[i].value);
            }
        }

        if (temp.length >= 2) {
            this.printErr("hobbyErr", '');
        } else {
            this.printErr("hobbyErr", "Pls Select at least 2 hobbies");
        }


        if (this.nameVal === '') {
            this.printErr("nameErr", 'Pls Enter Name');
        } else {
            const nameRegex = /^[a-zA-Z\s]+$/;

            if (nameRegex.test(this.nameVal)) {
                this.printErr("nameErr", '');
                nameErr = false;

            } else {
                this.printErr("nameErr", 'Pls Enter valid Name');
            }
        }

        if (this.emailVal === '') {
            this.printErr("emailErr", "Pls Enter Email Id");
        } else {
            const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

            if (emailRegex.test(this.emailVal)) {
                this.printErr("emailErr", '');
                emailErr = false;
            } else {
                this.printErr("emailErr", "Pls Enter Valid Email Id");
            }
        }

        if ( this.mobVal === '') {
            this.printErr("mobileErr", "Pls Enter Mob No");
        } else {

            const mobregex = /^\d{10}$/;

            if (mobregex.test(this.mobVal)) {
                this.printErr("mobileErr", '');
                mobileErr = false;
            } else {
                this.printErr("mobileErr", "Pls Enter Valid Mob No");
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

        if (this.countryVal === '0') {
            this.printErr("countryErr", "Pls Select Country");
        } else {
            this.printErr("countryErr", '');
            countryErr = false;
        }

        if (this.genderVal === '') {
            this.printErr("genderErr", "Pls Select Country");
        } else {
            this.printErr("genderErr", '');
            genderErr = false;
        }

        if (nameErr || emailErr || mobileErr || countryErr || genderErr || hobbyErr) {
            return false;
        } else {
            return true;
        }

    }
}

const validateForm = () => {
    let nameVal = document.contactForm.name.value;
    let emailVal = document.contactForm.email.value;
    let mobVal = document.contactForm.mobile.value;
    let countryVal = document.contactForm.country.value;
    let genderVal = document.contactForm.gender.value;
    let hobbyVal = document.contactForm.hobbies;

    const v1 = new validation(nameVal,emailVal,mobVal,countryVal,genderVal,hobbyVal);
   let res= v1.checkvalidation();

   if(res){
    return true
   }else{
    return false
   }
}



