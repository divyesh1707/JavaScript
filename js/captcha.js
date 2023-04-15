let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

let ans = n1 + n2;

document.getElementById("n1").innerHTML = n1;
document.getElementById("n2").innerHTML = n2;

function captchaHandle() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let correctAns = parseInt(document.getElementById("ans").value);

    if (ans === correctAns) {
        alert("Correct");
    } else {
        alert("Wrong! Correct Ans is " + ans);
    }
}