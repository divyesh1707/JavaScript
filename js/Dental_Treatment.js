// let tc = document.getElementById("tc").value;
// let fs = document.getElementById("fs").value;
// let rct = document.getElementById("rct").value;
// let rc = document.getElementById("rc").value;
// let bi = document.getElementById("bi").value;


let tcs = 1, fss = 2, rcts = 4, rcs = 6, bis = 12;

let tcc = 500; fsc = 1500, rctc = 2500, rcc = 12000, bic = 35000;

function change() {

    let main = document.getElementById("treat").value;
    let SAD = document.getElementById("App_Date").value;

    if (main === "st") {
        document.getElementById("table").style.display = "none";
        document.getElementById("App_Date").style.display = "none";
        document.getElementById("submit_treat").style.display = "none";
        document.getElementById("Book_Appo").style.display = "none";

    } else if (main === "tc") {
        document.getElementById("ans").innerHTML = "Teeth Cleanings ";
        document.getElementById("seat").innerHTML = tcs;
        document.getElementById("cost").innerHTML = tcc;
        document.getElementById("table").style.display = "inline-block";
        document.getElementById("submit_treat").style.display = "inline-block";
        document.getElementById("App_Date").style.display = "none";
        document.getElementById("Book_Appo").style.display = "none";

        // document.getElementById("table").style.display = "none";
    } else if (main === "fs") {
        document.getElementById("ans").innerHTML = "Fillings";
        document.getElementById("seat").innerHTML = fss;
        document.getElementById("cost").innerHTML = fsc;
        document.getElementById("table").style.display = "inline-block"
        document.getElementById("App_Date").style.display = "none";
    } else if (main === "rct") {
        document.getElementById("ans").innerHTML = "Root Canal Treatment";
        document.getElementById("seat").innerHTML = rcts;
        document.getElementById("cost").innerHTML = rctc;
        document.getElementById("table").style.display = "inline-block"
        document.getElementById("App_Date").style.display = "none";
    } else if (main === "rc") {
        document.getElementById("ans").innerHTML = "RCT  Cover";
        document.getElementById("seat").innerHTML = rcs;
        document.getElementById("cost").innerHTML = rcc;
        document.getElementById("table").style.display = "inline-block"
        document.getElementById("App_Date").style.display = "none";
    } else if (main === "bi") {
        document.getElementById("ans").innerHTML = "Braces/Invisalign";
        document.getElementById("seat").innerHTML = bis;
        document.getElementById("cost").innerHTML = bic;
        document.getElementById("table").style.display = "inline-block"
        document.getElementById("App_Date").style.display = "none";
    }

}

function Appo_Date() {
    alert("Your Treatment Selected has been Successfully...!! Pls Select Appointment Date!!");
}

function Appo_Booked() {
    alert("Your Appointment Date has been Booked");
}


