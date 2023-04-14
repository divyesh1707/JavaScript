function calculate(){
    let w = parseInt(document.getElementById("Weight").value);
    let h = parseInt(document.getElementById("Height").value);

    let m = h/100;

    let bmi = w/(m*m);

    // console.log(w);
    // console.log(h);
    // console.log(m);
    // console.log(bmi);

    let ans = document.getElementById("ans").innerHTML = bmi;


    if(bmi<18.5){
        document.getElementById("msg").innerHTML="Underweight";
    }else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById("msg").innerHTML="Normal";
    }else if(bmi>25 && bmi<29.9){
        document.getElementById("msg").innerHTML="Overweight";
    }else{
        document.getElementById("msg").innerHTML="Obesity";
    }
}