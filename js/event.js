// Mouse Event

// OnClick

function handleClick() {
    console.log("Clicked");
}


// MouseOver

function handleMouseOver() {
    console.log("mouse overed");
}

let btnMouse = document.getElementById("mouseEventOver");

btnMouse.addEventListener("mouseover", handleMouseOver);


// MouseOut

function handleMouseOut() {
    console.log("mouse out");
}

let outMouse = document.getElementById("mouseout");
outMouse.addEventListener("mouseout", handleMouseOut);


// MouseDown

function handleMouseDown() {
    console.log("mouse down");
}

let downmouse = document.getElementById("mousedown");
downmouse.addEventListener("mousedown", handleMouseDown);


// MouseUp

function handleMouseUp() {
    console.log("mouse up");
}

let upmouse = document.getElementById("mouseup");
upmouse.addEventListener("mouseup", handleMouseUp);


// Keyboard Event

//KeyUp

function handelKeyUp() {
    console.log(keyup.value);
}

let keyup = document.getElementById("fname");
keyup.addEventListener("keyup", handelKeyUp);



//KeyDown

function handleKeyDown() {
    console.log(keydown.value);
}

let keydown = document.getElementById("lname");
keydown.addEventListener("keydown", handleKeyDown);


// Form Event

//Focus

function handleFocus() {
    focus.style.borderColor = "blue";
}

let focus = document.getElementById("email");
focus.addEventListener("focus", handleFocus);


//Blur

function handleBlur() {
    blur.style.borderColor = "red";

}
let blur = document.getElementById("email");
blur.addEventListener("blur", handleBlur);


// Window/Documents Events

// load
window.onload = function () {
    console.log("Page Loaded");
}

// unload
window.onunload = function () {
    console.log("Page Unloaded");
}

// onresize
window.onresize = function () {
    console.log("Page Resize");
}