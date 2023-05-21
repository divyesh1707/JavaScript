let cinemaformRef = document.getElementById("cinemaForm")

let update = false;
let uid = null;

const handleinsert = () => {
    let cName = document.getElementById("cinemaName").value
    let cLocation = document.getElementById("cinemalocation").value
    let cFacilites = document.getElementById("cinemafacilites").value
    
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let rno = Math.floor(Math.random() * 10);

    if (localdata) {
        localdata.push({
            id: rno,
            name: cName,
            location: cLocation,
            facilites: cFacilites
        });
        localStorage.setItem("cinema", JSON.stringify(localdata));
    } else {
        localStorage.setItem("cinema", JSON.stringify([{
            id: rno,
            name: cName,
            location: cLocation,
            facilites: cFacilites
        }]));
      
    }

    handlecinemaData(cName, cLocation, cFacilites, rno);

    document.getElementById("table").style .display ='inline-block'

    event.preventDefault();
}

const handlecinemaData = (cName, cLocation, cFacilites, rno) => {

    let tr = document.createElement("tr");
    tr.setAttribute("id","row"+rno)

    let td = document.createElement("td");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let button = document.createElement("button");
    button.setAttribute("onclick", "handleupdate(" + rno + ")")

    let button1 = document.createElement("button");
    button1.setAttribute("onclick", "handleRemove(" + rno + ")")
    let tdval = document.createTextNode(cName);
    let tdval1 = document.createTextNode(cLocation)
    let tdval2 = document.createTextNode(cFacilites)

    let btn1 = document.createTextNode("Edit");
    let btn2 = document.createTextNode("Delete");

    let tableref = document.getElementById("Tabledata")


    td.appendChild(tdval);
    tr.appendChild(td);

    td1.appendChild(tdval1);
    tr.appendChild(td1);

    td2.appendChild(tdval2);
    tr.appendChild(td2);


    button.appendChild(btn1);
    button1.appendChild(btn2);
    td3.appendChild(button);
    td3.appendChild(button1);
    tr.appendChild(td3)

    tableref.appendChild(tr);
}


const handleRemove = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let trref = document.getElementById("row" + rno)
    trref.remove()

    localdata.map((v, i) => {
        if (v.id === rno) {
            localdata.splice(i, 1);
            localStorage.setItem("cinema", JSON.stringify(localdata));
        }
    })
  
}

const handleupdate = (rno) => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
    let Fdata = localdata.filter((v, i) => v.id === rno)

    document.getElementById("cinemaName").value = Fdata[0].name
    document.getElementById("cinemalocation").value = Fdata[0].location
    document.getElementById("cinemafacilites").value = Fdata[0].facilites

    update = true;
     uid = rno;
}


const handledes = () => {
    if(update){
        handleupdateData(); 
    }else{
        handleinsert();
    }
    event.preventDefault();
}



const handleupdateData = () => {
    let localdata = JSON.parse(localStorage.getItem("cinema"));
   
    let newname = document.getElementById("cinemaName").value;
    let newlocation= document.getElementById("cinemalocation").value;
    let newfacilites = document.getElementById("cinemafacilites").value;
   
    let uData = localdata.map((a) => {
        console.log(a);
        if (a.id === uid) {
            return {
                id: uid,
                name: newname,
                location: newlocation,
                facilites: newfacilites
            }
        } else {
            return a;
        }
    })
    localdata[uid]=uData
    localStorage.setItem("cinema", JSON.stringify(uData));
    console.log(uData);

    let tr = document.getElementById("row" + uid);

    tr.children[0].innerHTML = newname
    tr.children[1].innerHTML = newlocation
    tr.children[2].innerHTML = newfacilites

   event.preventDefault();


}


const handleonload = () =>{
   
    let localdata = JSON.parse(localStorage.getItem("cinema"));

    if(localdata){
        localdata.map((a) =>{
            handlecinemaData(a.name , a.location,  a.facilites ,a.id);

            document.getElementById("table").style .display ='inline-block'
            document.getElementById("data").style .display ='block'
        })
    }
}


window.onload=handleonload();

cinemaformRef.addEventListener("submit", handledes)




// let adminCRef = document.getElementById("admin-cinema");

// let admin = [];

// let uid = null;

// let update = false;

// const AdCinema = () => {
//     document.getElementById("admin-cinema").style.display = "block";
//     event.preventDefault();

// }

// const handleCinemaData = () => {

//     let cinename = document.getElementById("cname").value;
//     let locname = document.getElementById("lname").value;
//     let facitype = document.getElementById("facility").value;

//     let rno = Math.floor(Math.random() * 100);
//     // console.log(random);

//     let trref = document.createElement("tr");
//     trref.setAttribute("id", "row" + rno);

//     let td1ref = document.createElement("td");
//     let td2ref = document.createElement("td");
//     let td3ref = document.createElement("td");
//     let td4ref = document.createElement("td");

//     let button1 = document.createElement("button");
//     button1.setAttribute("onclick", "handleUpdate(" + rno + ")");

//     let button2 = document.createElement("button");
//     button2.setAttribute("onclick", "handleRemove(" + rno + ")");

//     let td1Tax = document.createTextNode(cinename);
//     let td2Tax = document.createTextNode(locname);
//     let td3Tax = document.createTextNode(facitype);
//     let btn1 = document.createTextNode("Update");
//     let btn2 = document.createTextNode("Remove");

//     td4ref.appendChild(button1);
//     td4ref.appendChild(button2);

//     td1ref.appendChild(td1Tax);
//     td2ref.appendChild(td2Tax);
//     td3ref.appendChild(td3Tax)
//     button1.appendChild(btn1);
//     button2.appendChild(btn2);

//     trref.appendChild(td1ref);
//     trref.appendChild(td2ref);
//     trref.appendChild(td3ref);
//     trref.appendChild(td4ref);

//     let cinemaFormRef = document.getElementById("tabledata");

//     document.getElementById("cinetable").style.display = "inline-block";

//     cinemaFormRef.appendChild(trref);

//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//     if (localdata) {
//         localdata.push({
//             id: rno,
//             name: cinename,
//             location: locname,
//             facilites: facitype
//         });
//         localStorage.setItem("cinema", JSON.stringify(localdata));
//     } else {
//         admin.push({
//             id: rno,
//             name: cinename,
//             location: locname,
//             facilites: facitype
//         });
//         localStorage.setItem("cinema", JSON.stringify(admin));
//     }

//     event.preventDefault();

//     console.log(cinename, locname, facitype);
//     event.preventDefault();
// }

// const handleRemove = (rno) => {

//     let trref = document.getElementById("row" + rno);

//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//     trref.remove();

//     localdata.map((v, i) => {
//         if (v.cid === rno) {
//             localdata.splice(i, 1);
//             localStorage.setItem("cinema", JSON.stringify(localdata));
//         }
//     });

//     console.log(localdata);

//     event.preventDefault();
// };

// const handleUpdate = (rno) => {

//     console.log("abc");

//     update = true;

//     let localdata = JSON.parse(localStorage.getItem("cinema"));

//     uid = rno;

//     let Fdata = localdata.filter((a) => a.cid === rno);

//     console.log(Fdata);

//     // let upcName = Fdata[0].name;
//     // let upcLocation = Fdata[0].location;
//     // let upcFacilites = Fdata[0].facilites;

//     document.getElementById("cname").value = Fdata[0].name;
//     document.getElementById("lname").value = Fdata[0].location;
//     document.getElementById("facility").value = Fdata[0].facilites;

//     event.preventDefault();

// }

// const handleDes = () => {

//     if (update) {
//         handleupdateData();
//     } else {
//         handleCinemaData();
//     }

//     event.preventDefault();

// }

// const handleupdateData = () => {

//     console.log("Update call");

//     let localdata = JSON.parse(localStorage.getItem('cinema'));

//     let newName = document.getElementById("cname").value;
//     let newLocation = document.getElementById("lname").value;
//     let newFacilites = document.getElementById("facility").value;

//     let newname = newName;
//     let newlocation = newLocation;
//     let newfacilites = newFacilites;

//     console.log(newname, newlocation, newfacilites);

//     //    uid = rno;

//     let uData = localdata.map((a) => {
//         if (a.cid === uid) {
//             return {
//                 cid: uid,
//                 name: newname,
//                 location: newlocation,
//                 facilites: newfacilites
//             }
//         } else {
//             return a;
//         }

//     })

//     console.log(uData);

//     localStorage.setItem("cinema", JSON.stringify(uData));

//     update = false;

//     let tr = document.getElementById("row" + uid);

//     tr.children[0].innerHTML = newname;
//     tr.children[1].innerHTML = newlocation;
//     tr.children[2].innerHTML = newfacilites;

//     event.preventDefault();

// }

// const handleOnload = () => {

//     let localdata = JSON.parse(localStorage.getItem("cinetable"));

//     if (localdata) {
//         localdata.map((value) => {
//             handleCinemaData(value.name, value.location, value.facilites)
//         });
//     };

// }

// adminCRef.addEventListener("submit", handleCinemaData);
// window.onload = handleOnload;






