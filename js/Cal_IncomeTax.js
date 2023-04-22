function taxcal(){
    let inc = parseInt(document.getElementById("income").value);
    console.log(inc);

    let netincome = parseInt(document.getElementById("msg").value);
    console.log(netincome);

    // document.getElementById("income").innerHTML = "Your Income is : " + inc;

    if(income < 300000){
        document.getElementById("income").innerHTML = "Your Income is : " + inc;
    }else if(income > 300000 && income <= 600000){
        netincome = (income - 300000) * 0.05;
    }else if(income > 600000 && income <= 900000){
        netincome = income - 300000 * 0.05 + (income - 600000 * 0.10);
    }else if (income > 900000 && income <= 12000){
        netincome = income - 300000 * 0.5 + income - 600000 * 0.10 + (income - 900000 * 0.15);
    }else if(income > 1200000 && income <= 1500000){
        netincome = income - 300000 * 0.5 + income - 600000 *0.10 + income - 900000 * 0.15 + (income - 1200000 * 0.20);
    }else if (income > 1500000){
        netincome = income - 300000 * 0.5 + income - 600000 *0.10 + income - 900000 * 0.15 + income - 1200000 * 0.20 + (income - 1500000 * 0.30);
    }
}