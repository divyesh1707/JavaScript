function handlecountry() {

    let ans = document.getElementById("country").value;

    if (ans === 'in') {
        document.getElementById("print").innerHTML = "You Selected Country is India"
        document.getElementById("mainbody").style.backgroundColor = "blue"
    } else if (ans === 'ca') {
        document.getElementById("print").innerHTML = "You Selected Country is Canada"
        document.getElementById("mainbody").style.backgroundColor = "red"
    } else if (ans === 'us') {
        document.getElementById("print").innerHTML = "You Selected Country is USA"
        document.getElementById("mainbody").style.backgroundColor = "green"
    } else if (ans === 'uk') {
        document.getElementById("print").innerHTML = "You Selected Country is UK"
        document.getElementById("mainbody").style.backgroundColor = "purple"
    }

}