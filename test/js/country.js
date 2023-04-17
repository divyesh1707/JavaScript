function country() {
    let country = document.getElementById("mycontry").value;

    document.getElementById("answer").innerHTML = "The Selected Country is " + country ;

    if (country === 'Select') {
        document.body.style.backgroundColor = 'white';
    } else if (country === 'US') {
        document.body.style.backgroundColor = 'Blue';
    } else if (country ==='UK') {
        document.body.style.backgroundColor = 'red';
    } else if (country === 'London') {
        document.body.style.backgroundColor = 'gray';
    } else if (country === 'India') {
        document.body.style.backgroundColor = 'orange';
    }
}