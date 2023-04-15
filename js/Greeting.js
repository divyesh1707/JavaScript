// Function Declaration

function greeting(){
    console.log("Good Morning");
}
greeting();


// Function Call

function calculateAge(dobYear){

    let year;

    year = 2023 - dobYear;

    return year;
}

let y = calculateAge(1992);
console.log("Your Age is : " + y);

let Z = calculateAge(1995);
console.log("Your Age is : " + Z);


// Arrow Function (ES6)

const greeting = () =>{
    console.log("Good Morning");
}

greeting();


