// Function Declaration

// function greeting(){
//     console.log("Good Morning");
// }


// Function Call

// greeting();

// function calculateAge(dobYear){

//     let year;

//     year = 2023 - dobYear;

//     return year;
// }

// let y = calculateAge(1992);
// console.log("Your Age is : " + y);

// let Z = calculateAge(1995);
// console.log("Your Age is : " + Z);


// Arrow Function (ES6)
// const greeting = () =>{
//     console.log("Good Morning");
// }

// greeting();


// Package Function

const package = (trip) => {
    let a = 10000;
    let b = 20000;
    if(trip == "goa"){
        console.log("Goa Package is " + a);
    }else if(trip == "bali"){
        console.log("Bali Package is " + b);
    }
    
    return trip;


    // console.log("Goa Package Price is Rs 10,000");
}


let a = package("goa");

let b = package("bali");

