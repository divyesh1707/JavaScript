let budgetForm = document.getElementById("budget-form");
let expenceForm = document.getElementById("exp-form");

let expData = [];
let update = false;
let uid = null;

const handleData = () => {
    let budVal = parseInt(document.getElementById("budget-val").innerHTML);

    let sumExp = expData.reduce((acc, v, i) => acc + v.Amount, 0);

    console.log(expData, sumExp);

    let balance = budVal - sumExp;

    document.getElementById("budget-val").innerHTML = budVal;
    document.getElementById("exp-val").innerHTML = sumExp;
    document.getElementById("bal-val").innerHTML = balance;

}

const handleBudget = () => {
    let budgetVal = parseInt(document.getElementById("budget").value);
    console.log(budgetVal);

    let budgetDiv = document.getElementById("budget-div");

    let pElem = document.createElement("p");
    pElem.setAttribute("id", "budget-val");

    let pTxt = document.createTextNode(budgetVal);

    pElem.appendChild(pTxt);

    budgetDiv.appendChild(pElem);

    event.preventDefault();
}

const handleEdit = (eid) => {
    update = true;
    console.log(expData, eid);
    uid = eid;

    let fData = expData.filter((e, i) => e.id === eid);

    console.log(fData[0].Name, fData[0].Amount);

    document.getElementById("exp-name").value = fData[0].Name;
    document.getElementById("exp-amount").value = fData[0].Amount;

    event.preventDefault();
}

const handleDelete = (did) => {
    console.log(did);

    let rowRef = document.getElementById("row-" + did);

    rowRef.remove();

    expData.map((e, i) => {
        if (e.id === did) {
            expData.splice(i, 1);
        }
    })

    console.log(expData, did);

    handleData();
}

const handleExpence = () => {
    console.log("Insert Called");

    let expName = document.getElementById("exp-name").value;
    let expAmount = parseInt(document.getElementById("exp-amount").value);

    let rNo = Math.floor(Math.random() * 1000);

    expData.push({
        id: rNo,
        Name: expName,
        Amount: expAmount
    });

    let tbodyRef = document.getElementById("tbody-exp");

    let trElem = document.createElement("tr");
    trElem.setAttribute("id", "row-" + rNo);

    let td1Elem = document.createElement("td");
    let td1Txt = document.createTextNode(expName);
    td1Elem.appendChild(td1Txt);

    let td2Elem = document.createElement("td");
    let td2Txt = document.createTextNode(expAmount);
    td2Elem.appendChild(td2Txt);

    let td3Elem = document.createElement("td");

    let editElem = document.createElement("button");
    editElem.setAttribute("onclick", "handleEdit(" + rNo + ")")
    let editTxt = document.createTextNode("E");
    editElem.appendChild(editTxt);

    let deleteElem = document.createElement("button");
    deleteElem.setAttribute("onclick", "handleDelete(" + rNo + ")")
    let deleteTxt = document.createTextNode("D");
    deleteElem.appendChild(deleteTxt);

    td3Elem.appendChild(editElem);
    td3Elem.appendChild(deleteElem);

    trElem.appendChild(td1Elem);
    trElem.appendChild(td2Elem);
    trElem.appendChild(td3Elem);

    tbodyRef.appendChild(trElem);

    handleData();
    event.preventDefault();
}

const handleUpdateData = () => {
    let newExpName = document.getElementById("exp-name").value;
    let newExpAmt = parseInt(document.getElementById("exp-amount").value);

    let rowRef = document.getElementById("row-" + uid);

    rowRef.children[0].textContent = newExpName;
    rowRef.children[1].textContent = newExpAmt;

    console.log(expData, uid, newExpName, newExpAmt);

    let uData = expData.map((e, i) => {
        if (e.id === uid) {
            return {
                id: uid,
                Name: newExpName,
                Amount: newExpAmt
            }
        } else {
            return e;
        }
    });

    expData = [...uData];

    update = false;
    uid = null;

    handleData();

    event.preventDefault();
}

const handleDec = () => {
    if (update) {
        handleUpdateData()
    } else {
        handleExpence()
    }

}

budgetForm.addEventListener("submit", handleBudget);
expenceForm.addEventListener("submit", handleDec);