function tipcal(){
    let BA = parseInt(document.getElementById("Bill_Amount").value);
    let PT = parseInt(document.getElementById("Per_Tip").value);
    let TA = parseInt(document.getElementById("Tip_Amount").value);

    TA = BA * PT / 100;

    TBA = BA + TA; 

    document.getElementById("Tip_Amount").value = TA;
    document.getElementById("Total_Bill").value = TBA;

    console.log(TA, TBA);

}