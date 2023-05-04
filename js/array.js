let rollNo  = [10,26,31,45,89,102];
let arr1 = [25,100];

// console.log(rollNo.length);

// for(let i=0; i<rollNo.length; i++){
//     console.log(rollNo[i]);
// }

// rollNo.forEach(function(v,i){
//     console.log(i,v);
// });

// rollNo.forEach((v,i) => {
//     console.log(i,v);
// });

// rollNo.map((v,i) => {
//     console.log(i,v);
// });

// rollNo.map((v,i) => console.log(i,v));


//update
// rollNo[3] = 99;
// console.log(rollNo);

//Add at Last
// rollNo.push(66);
// console.log(rollNo);

//Add at first
// rollNo.unshift(255);
// console.log(rollNo);

//Remove from last
// rollNo.pop();
// console.log(rollNo);

//Remove from first
// rollNo.shift();
// console.log(rollNo);


//Array Function

// let ans = Array.isArray(rollNo);
// console.log(ans);      // Check Pass value is array or not

// let ans = rollNo.concat(arr1);
// console.log(ans);  //Combine two or more array.


// let ans = rollNo.some((v) => v > 100);
// console.log(ans);    // find value in array and print true or false.


// let ans = rollNo.find((v) => v === 89);
// console.log(ans);  // find value and print value

// let ans = rollNo.toString();
// console.log(ans);   // convert array to string.

const alpha = ["A", "B","C","D","E"];
// alpha.splice(2,0, "G", "H");
// console.log(alpha);    // At position 2 add 2 element . output : ['A', 'B', 'G', 'H', 'C', 'D', 'E']

alpha.splice(2,2);
console.log(alpha);  // At Position 2 remove 2 items . output : ['A', 'B', 'E']

