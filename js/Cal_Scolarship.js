function calculate_Scolarship() {
    let feesinput = parseInt(document.getElementById("fess").value);
    let cgpainput = document.getElementById("CGPA").value;
    let castinput = document.getElementById("cast").value;

    console.log(feesinput);
    console.log(cgpainput);
    console.log(castinput);

    document.getElementById("Fees").innerHTML = "Your Fess is :" + feesinput;


    if (cgpainput >= 9) {
        document.getElementById("Grade").innerHTML = "Your Grade is : A";
    } else if (cgpainput >= 8.5 && cgpainput < 9) {
        document.getElementById("Grade").innerHTML = "Your Grade is : B";
    } else if (cgpainput >= 8 && cgpainput < 8.5) {
        document.getElementById("Grade").innerHTML = "Your Grade is : C";
    } else if (cgpainput >= 7.5 && cgpainput < 8) {
        document.getElementById("Grade").innerHTML = "Your Grade is : D";
    } else {
        document.getElementById("Grade").innerHTML = "FAIL";
    }

    let scolarship = document.getElementById("Scolarship").value;

    if (castinput === "open") {
        scolarship = (feesinput * 0) / 100;
        total = feesinput - scolarship;
        document.getElementById("Scolarship").innerHTML = "Your Scolarship is : " + scolarship;
    } else if (castinput === "obc" && cgpainput >= 8.5) {
        scolarship = (feesinput * 25) / 100;
        total = feesinput - scolarship;
        document.getElementById("Scolarship").innerHTML = "Your Scolarship is : " + scolarship;
    } else if (castinput === "sc" && cgpainput >= 8.5) {
        scolarship = (feesinput * 50) / 100;
        total = feesinput - scolarship;
        document.getElementById("Scolarship").innerHTML = "Your Scolarship is : " + scolarship;
    } else if (castinput === "st" && cgpainput >= 8.5) {
        scolarship = (feesinput * 100) / 100;
        total = feesinput - scolarshipt;
        document.getElementById("Scolarship").innerHTML = "Your Scolarship is : " + scolarship;
    }

    document.getElementById("Pay_fees").innerHTML = "You have to pay fees of Rs : " + total;
}
