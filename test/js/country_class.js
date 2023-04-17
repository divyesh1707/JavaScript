function handlecountry() {

    let ans = document.getElementById("country").value;

    document.getElementById("print").innerHTML = "You Selected Country is " + ans;

    if (ans === 'in') {
        document.getElementById("print").innerHTML = "India"
        document.getElementById("mainbody").style.backgroundColor = "blue"
    } else if (ans === 'ca') {
        document.getElementById("print").innerHTML = "Canada"
        document.getElementById("mainbody").style.backgroundColor = "red"
    } else if (ans === 'us') {
        document.getElementById("print").innerHTML = "USA"
        document.getElementById("mainbody").style.backgroundColor = "green"
    } else if (ans === 'uk') {
        document.getElementById("print").innerHTML = "UK"
        document.getElementById("mainbody").style.backgroundColor = "purple"
    }

}