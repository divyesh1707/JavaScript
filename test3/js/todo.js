let formRef = document.getElementById("todo-form");

let arr = [];

let update = false;

let uid = null;

const handleInsert = () => {

    let val = document.getElementById("data").value;

    let localData = JSON.parse(localStorage.getItem("todo"));

    // document.getElementById("todo-form").value = '';

    if (localData) {
        localData.push(val);
        localStorage.setItem("todo", JSON.stringify(localData));
    } else {
        arr.push(val);
        localStorage.setItem("todo", JSON.stringify(arr));
    }

    dispRemove();

    console.log("insert call");

    event.preventDefault();

}


const dispRemove = () => {
    let localData =JSON.parse(localStorage.getItem('todo'));
    console.log(localData);

    if (localData) {
        let print = '<ul>';
        let data = JSON.parse(localStorage.getItem("todo"))
        data.map((t, i) => {
            print += '<li>' + t + '<button onclick = handleRemove(' + i + ')>X</button> ' + '<button onclick = handleUpdate(' + i + ')>Update</button>' + '</li>'
        })

        print += '</ul>';

        document.getElementById('ans').innerHTML = print;

    }
    
}

const handleRemove = (i) => {
    let localData = JSON.parse(localStorage.getItem("todo"));

    console.log(i);
    localData.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(localData));
    console.log(arr);

    dispRemove();

}

const handleUpdate = (i) => {
    update = true;

    let localData = JSON.parse(localStorage.getItem('todo'));
    console.log(localData[i]);
    uid = i;
    console.log(arr[i]);

    document.getElementById("data").value = localData[i];

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
    let localData = JSON.parse(localStorage.getItem('todo'));

    let newval = document.getElementById("data").value;
    console.log(newval);

    localData[uid] = newval;
    localStorage.setItem("todo", JSON.stringify(localData));

    dispRemove();

    update = false;

    document.getElementById("data").value = "";

    event.preventDefault();

}

formRef.addEventListener("submit", handleDes);
window.onload = dispRemove;




