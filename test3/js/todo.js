let formRef = document.getElementById("todo-form");

let arr = [];

let update = false;



let uid = null;

const handleInsert = () => {

    let val = document.getElementById("data").value;

    console.log(val);

    arr.push(val);
    localStorage.setItem("todo", JSON.stringify(arr));

    console.log(arr);

    dispRemove();

    console.log("insert call");

    event.preventDefault();

}


const dispRemove = () => {
    let print = '<ul>'
    let data = JSON.parse(localStorage.getItem("todo"))
    data.map((t, i) => {
        print += '<li>' + t + '<button onclick = handleRemove(' + i + ')>X</button> ' + '<button onclick = handleUpdate(' + i + ')>Update</button>' + '</li>'
    })

    print += '</ul>'

    document.getElementById('ans').innerHTML = print;

}

const handleRemove = (i) => {
    localStorage.setItem("todo", JSON.stringify(arr));
    console.log(i);
    arr.splice(i, 1);
    console.log(arr);

    dispRemove();

}

const handleUpdate = (i) => {
    update = true;
    uid = i;
    console.log(arr[i]);

    document.getElementById("data").value = arr[i];

}

const handleDes = (i) => {
    if (update) {
        handleUpdateData();
    } else {
        handleInsert();
    }
}

const handleUpdateData = () => {
    console.log("Update call");

    let newval = document.getElementById("data").value;
    console.log(newval);

    arr[uid] = newval;
    localStorage.setItem("todo", JSON.stringify(arr));

    dispRemove();

    update = false;

    document.getElementById("data").value = "";

    event.preventDefault();

}

formRef.addEventListener("submit", handleDes);
window.onload = dispRemove;




