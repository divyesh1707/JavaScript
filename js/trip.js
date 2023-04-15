const costing = (dest) => {  //4
    if(dest === 'Goa'){
        return 35000;       //5
    }else if(dest === 'Bali'){
        return 50000;       
    }else if(dest === 'Manali'){
        return 40000;
    }
}
const packages = (dest1,dest2) => {  //2
    let c1 = costing(dest1); //3  //6
    let c2 = costing(dest2);

    let msg = dest1 + " cost you " + c1 + " and " + dest2 + " cost you " + c2;    //7

    return msg;      //8
}

let res = packages("Goa", "Bali");  //1    //9
console.log(res);    //10