
let x = 0;

document.getElementById("x").innerHTML = x;

function decrement() {
    x--;
    document.getElementById("count").innerHTML = x;
}

function increment() {
    x++;
    document.getElementById("count").innerHTML = x;
}