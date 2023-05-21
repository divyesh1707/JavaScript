let subRef = document.getElementById("register");

const addform = () => {
    console.log("add");

    let Formref = document.getElementById("formdata");

    let divRef = document.createElement("div");

    let rNo = Math.floor(Math.random() * 1000);

    divRef.setAttribute("id", "row-" + rNo);

    console.log(Formref);

    event.preventDefault();

    let fname = document.createElement("input");
    fname.setAttribute("placeholder", "First Name");
    fname.setAttribute("name", "fname");

    let lname = document.createElement("input");
    lname.setAttribute("placeholder", "Last Name");
    lname.setAttribute("name", "lname");


    let plus = document.createElement("button");
    let plusTxt = document.createTextNode("+");
    plus.setAttribute("type", "button");
    plus.setAttribute("onclick", "addform()");

    let minus = document.createElement("button");
    let minusTxt = document.createTextNode("-");
    minus.setAttribute("type", "button");
    minus.setAttribute("onclick", "Removeform(" + rNo + ")");


    plus.appendChild(plusTxt);
    minus.appendChild(minusTxt);

    divRef.appendChild(fname);
    divRef.appendChild(lname);
    divRef.appendChild(plus);
    divRef.appendChild(minus);

    Formref.appendChild(divRef);

    console.log(rNo);
}

const Removeform = (id) => {

    let rowref = document.getElementById("row-" + id);
    rowref.remove();
    console.log("Remove");
}

const handlesubmit = () => {

    let fname = document.getElementsByName("fname");
    let lname = document.getElementsByName("lname");

    let arr = [];   

    for (let i = 0; i < fname.length; i++) {
        arr.push({ fname: fname[i].value, lname: lname[i].value });

    }

    console.log(arr);

    event.preventDefault();
}

subRef.addEventListener("submit", handlesubmit);