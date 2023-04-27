// let tc = document.getElementById("tc").value;
// let fs = document.getElementById("fs").value;
// let rct = document.getElementById("rct").value;
// let rc = document.getElementById("rc").value;
// let bi = document.getElementById("bi").value;

let tcs = 1, fss = 2, rcts = 4, rcs = 6, bis = 12;

let tcc = 500; fsc = 1500, rctc = 2500, rcc = 12000, bic = 35000;

function change() {
    let main = document.getElementById("treat").value;
    document.getElementById("submit_treat").style.display = "inline-block";
    document.getElementById("table").style.display = "inline-block";
    document.getElementById("Book_Appo").style.display = "inline-block";
    document.getElementById("App_Date").style.display = "inline-block";

    if (main === "st") {
        document.getElementById("table").style.display = "none";
        document.getElementById("App_Date").style.display = "none";
        document.getElementById("submit_treat").style.display = "none";
        document.getElementById("Book_Appo").style.display = "none";
        document.getElementById("sad").style.display = "none";
        document.getElementById("treatment_div").style.display = "none";
    } else if (main === "tc") {
        document.getElementById("ans").innerHTML = "Teeth Cleanings ";
        document.getElementById("seat").innerHTML = tcs;
        document.getElementById("cost").innerHTML = tcc;
    } else if (main === "fs") {
        document.getElementById("ans").innerHTML = "Fillings";
        document.getElementById("seat").innerHTML = fss;
        document.getElementById("cost").innerHTML = fsc;
    } else if (main === "rct") {
        document.getElementById("ans").innerHTML = "Root Canal Treatment";
        document.getElementById("seat").innerHTML = rcts;
        document.getElementById("cost").innerHTML = rctc;
    } else if (main === "rc") {
        document.getElementById("ans").innerHTML = "RCT  Cover";
        document.getElementById("seat").innerHTML = rcs;
        document.getElementById("cost").innerHTML = rcc;
    } else if (main === "bi") {
        document.getElementById("ans").innerHTML = "Braces/Invisalign";
        document.getElementById("seat").innerHTML = bis;
        document.getElementById("cost").innerHTML = bic;
    }

}

// function Appo_Date() { // http://127.0.0.1:5500/Dental_Treatment.html#
//     alert("Your Treatment Selected has been Successfully...!! Pls Select Appointment Date!!");
// }

function bookapp() {
    alert("Your Treatment Selected has been Successfully...!! Pls Select Appointment Date!!");
    document.getElementById("sad").style.display = "inline-block";
    document.getElementById("Book_Appo").style.display = "inline-block";

}

function Appo_Booked() {
    alert("Your Appointment Date has been Booked");
    document.getElementById("treatment_div").style.display = "block";
    document.getElementById("treatment_schdule").style.display = "inline-block";

    let selectedTreat = document.getElementById("treat").value;
    let settingCount = 0;
    let totalAmount = 0;
    if (selectedTreat === "tc") {
        settingCount = tcs;
        totalAmount = tcc;
    } else if (selectedTreat === "fs") {
        settingCount = fss;
        totalAmount = fsc;
    } else if (selectedTreat === "rct") {
        settingCount = rcts;
        totalAmount = rctc;
    } else if (selectedTreat === "rc") {
        settingCount = rcs;
        totalAmount = rcc;
    } else if (selectedTreat === "bi") {
        settingCount = bis;
        totalAmount = bic;
    }
    
    const amountPerSetting = totalAmount/settingCount;
    let appDate = document.getElementById("App_Date").value;
    appDate = new Date(appDate);
    for (let i = 1; i <= settingCount; i++) {
        document.getElementById("show"+i).style.display = "table-row";
        document.getElementById("sr"+i).innerHTML = i;
        document.getElementById("pa"+i).innerHTML = amountPerSetting;
        document.getElementById("ad"+i).innerHTML = appDate.getDate() + "-" + (appDate.getMonth() + 1) + "-" + appDate.getFullYear();

        appDate.setDate(appDate.getDate() + 7);
    }
}


