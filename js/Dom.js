let h1Elem = document.createElement("h1");
let h1TxtElem = document.createTextNode("Hello");

h1Elem.appendChild(h1TxtElem);

let divRef = document.getElementById("demo");

divRef.appendChild(h1Elem);

let aElem = document.createElement("a");
let aTxtElem = document.createTextNode("Hello");

aElem.appendChild(aTxtElem);

divRef.appendChild(aElem);

aElem.setAttribute('href', '#');
aElem.setAttribute('onclick',"handleClick()");


function handleClick(){
    console.log("Clicked");
}
