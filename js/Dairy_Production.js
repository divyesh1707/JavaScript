let bm = 2;
let crd = 3;
let pnr = 6;
let chs = 10;

function handleproduct(){
    let avlmilk = parseInt(document.getElementById("avl_milk").value);
    let buttermilk = parseInt(document.getElementById("butter_milk").value);
    let curd = parseInt(document.getElementById("curd").value);
    let paneer = parseInt(document.getElementById("paneer").value);
    let cheese = parseInt(document.getElementById("cheese").value);

    // console.log(avlmilk);
    // console.log(buttermilk);
    // console.log(curd);
    // console.log(paneer);
    // console.log(cheese);

    BM = buttermilk * bm;
    console.log(BM);

    CRD = curd * crd;
    console.log(CRD);

    PNR = paneer * pnr;
    console.log(PNR);

    CHS = cheese * chs;
    console.log(CHS);

    netavlmilk = avlmilk - BM - CRD - PNR - CHS;
    console.log(netavlmilk);

    // let netavlmilk = document.getElementById("submit").value;

    // if(BM >= netavlmilk){
    //     document.getElementById("avl_milk").innerHTML = "Ready"
    // }else(netavlmilk <= BM){
    //     document.getElementById("avl_milk").innerHTML = "Not Ready"
    // }

}