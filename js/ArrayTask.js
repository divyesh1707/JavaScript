
let arr1 = [10, 85, 67, 24, 100, 96, 120, 150];

// 1.    Finding the maximum element in an array.

// const findmax = (arr) => {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log("Maximum Number is", max);

// }

// findmax(arr1);

// 2.    Finding the minimum element in an array.

// const findMin = (arr) => {
//     let min = arr[0]
//     for (let i = 0; i > arr.lenght; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     console.log("Minimum Number is", min);
// }
// findMin(arr1);


// 3.    Sorting an array in ascending order.

// const arrAsc = (arr) => {
//     arr.sort((a, b) => (a - b));
//     console.log(arr);
// }
// arrAsc(arr1);


// 4.    Sorting an array in descending order.

// const arrDec = (arr) => {
//     arr.sort((a, b) => (b - a));
//     console.log(arr);
// }
// arrDec(arr1);

// 5.    Reversing an array.

// const arrRev = (arr) => {
//     arr.reverse();
//     console.log(arr);

// }
// arrRev(arr1);

// 6.    Finding the sum of all elements in an array.

// const arrSum = (arr) => {
//     let sum = 0;
//     arr.map((a)=>sum = sum + a);
//     console.log(sum);
// }
// arrSum(arr1);

// 7.    Finding the average of all elements in an array.

// const arrAvg = (arr) =>{
//     let sum = 0, avg = 0;
//     arr.map((a)=>sum =sum + a);
//     avg = sum / arr.length;
//     console.log(avg);

// }
// arrAvg(arr1);

// 8.    Checking if an array contains a specific element.

// const checkArr = (arr,elem) => {
//     let ans  = arr.includes(elem);
//     console.log(ans);
// }
// checkArr(arr1);

// 9.    Removing duplicates from an array.

// const removeDup = (arr) => {
//     let uniqueElem = [];
//     arr.map = (a) => {
//         if (!uniqueElem.includes(a)) {
//             uniqueElem.push(a);
//         };

//     }
// }
// removeDup(arr1);

// 10.    Merging two arrays into a new array.

// const ar1 = [10,20,30,40,50];
// const ar2 = [60,70,80,90,100];

// const ans =  ar1.concat(ar2);
// console.log(ans);

// 11.    Splitting an array into two arrays based on a condition.

// const splittingArrcon = (arr) => {
//     let a1 = [];
//     let a2 = [];

//     arr1.map((a) => {
//         if (a > 50) {
//             a1.push(a);
//         } else {
//             a2.push(a);
//         }
//     })
//     console.log(a1);
//     console.log(a2);
// }
// splittingArrcon(arr1);


// const SplittingArrcon = (arr) => {
//     let a3 = [];
//     let a4 = [];

//     arr1.map((a) => {
//         if (a > 0) {
//             a3.push(a);
//         } else {
//             a4.push(a);
//         }
//     })
//     console.log(a3);
//     console.log(a4);
// }
// SplittingArrcon(arr1);


// 13.    Rotating an array by a given number of positions.

// const roatingarrcon = (arr, ind) => {
//     let a = arr.slice(arr);
//     let b = arr.slice(ind);

//     let ans = b.concat(a);
//     console.log(ans);
// }
// roatingarrcon(arr1,3);

// 14.    Finding the second largest element in an array.

// const secmax = (arr, ind) => {
//     arr.sort((a, b) => b - a);

//     console.log(arr[ind - 1]);
// }
// secmax(arr1, 2);

// 15. Finding the k-th smallest element in an array.

// const smallest = (arr, ind) =>{
//   arr.sort((a,b) => a - b);

//   console.log(arr[ind-1]);
// }
// smallest(arr1,2);


// 17. Finding the median of an array.

const findMedian = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    console.log(sortedArr);
    let i = Math.floor(sortedArr.length / 2);
    if (sortedArr.length % 2 === 0) {
        let ans = (sortedArr[i] + sortedArr[i - 1]) / 2;
        console.log(ans);
    } else {
        console.log(sortedArr[i]);
    }

}
findMedian(arr1);

// 19.    Checking if two arrays are equal or not.

// const a1 = [10, 20, 30, 40, 50];
// const a2 = [10, 201, 30, 40, 50];

// const arrEqual = (arr1, arr2) => {
//     if (arr1.length === arr2.length) {
//         let flag = 0;
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] !== arr2[i]) {
//                 flag = 1;
//                 break;
//             }
//         }
//         if (flag === 0) {
//             console.log('equal');
//         } else {
//             console.log('not equal');
//         }
//     } else {
//         console.log('not equal');
//     }
// }
// arrEqual(a1, a2);

