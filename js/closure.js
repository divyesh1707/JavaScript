// let city = 'surat';  

// const printCity = () => {
//     console.log(city);
// }

// printCity();

// city = 'baroda';

// printCity();

// city = 'vapi';

// printCity();

// let name = 'Divyesh';  // Global Variable

// const info = (salary) => {   //Outer Function   //2
//     let age = 26;  // outer function variable

//     //Inner Function Variable
//     return function printInfo(){  //3
//         console.log(name);
//         console.log(age);
//         console.log(salary);
//     }
// }

//         //Outer Function Call

// let res = info(50000);    //1    //4
// res();   //Inner Function Call  //5


//outer Function
// const handleCounter = () =>{
//     let  count = 0;
//     return function countOp(){
//         count++;
//         console.log(count);
//     }
// }

// res = handleCounter()
// res();
// res();


//outer Function
const handleCounter = () =>{  //2
    let count = 0;

    //Inner Function

    return function operation(){  //3
        count = count +1;
        console.log(count);
    };
}

let res = handleCounter();  //1  //4
res();
res();
res();

let res1 = handleCounter();
res1();
res1();