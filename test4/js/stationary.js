let stationaryRef = document.getElementById("stationary-form");

const arr = [];

let sum = 0;

const handleInsert = () => {
    let val = document.getElementById("pen").value;

    arr.push(val);

    document.getElementById("pen").value = '';

    handleDisplay();

    event.preventDefault();

}

const handleDisplay = () => {
    let print = '<ul>'

    arr.map((v) => {
        print += '<li>' + v + '</li>';
    })

    console.log(arr);

    print += '</ul>'

    document.getElementById("ans").innerHTML = print;


}

const handlesum = () => {

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log(sum);

    document.getElementById("total").innerHTML = sum;

}

stationaryRef.addEventListener("submit", handleInsert);

// console.log(stationaryRef);


// stationartRef.addEventListener("submit",handleform);

