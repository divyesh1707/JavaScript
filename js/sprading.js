let arr1 = [10,20,30];

//copy

let arr2 = [...arr1];
console.log(arr2);

//Merging
let arr3 = ['amit',56,...arr2,'surat'];
console.log(arr3);

//Merging
let arr9 = [99,100];
let ans = [...arr9,...arr1];
console.log(ans);

//Destructuring
let [id, age, per] = arr1;
console.log(age);