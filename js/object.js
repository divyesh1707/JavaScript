// let person1 = {
//     name: 'Divyesh',
//     age: 27
// }
// // console.log(person1);
// // console.log(person1.name,person1.age);

// for (let k in person1){
//     console.log(person1[k]);
// }


// let myInfo = [{
//     name: 'Divyesh',
//     age: 27
// },
// {
//     lname: 'Ramoliya',
//     age: 25
// }];

// // console.log(myInfo);
// // myInfo.map((v, i) => console.log(v.name,v.age,v.lname));


// const person = [
//     {
//         name: "Amit",
//         age: 25,
//         course: [
//             "c",
//             "html"
//         ]
//     }

// ]

// console.log(person);


// person.map((p, i) => {
//     console.log(p.name, p.age, p.course);
//     p.course.map((p1) => {
//         console.log(p1);
//     });
// });


const myObj = {
    name: "jd",
    age: 20,
    cars: {
        car1: "ford",
        car2: "breza",
        car3: "BMW"
    }
}

// console.log(myObj.name,myObj.age);
// console.log(myObj.cars.car1,myObj.cars.car2,myObj.cars.car3);

// for(let k in myObj){
//     if(myObj === 'cars'){
//         console.log(myObj[k]);
//     }else{
//         console.log(k);
//     }
// }


// const person = [
//     {
//         name: "amit",
//         age: 19,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     },
//     {
//         name: "mayur",
//         age: 20,
//         course: {
//             c1: "c",
//             c2: "html"
//         }
//     }
// ];

// person.map((v,i) => {
//     for(v.name,v.age,v.course)
//     console.log();
// });




let data = {
    personal_info: {
        name: 'amit',
        age: 25,
        city: 'surat'
    },
    courses: ["C", "JavaScript", "React"],
    branches: {
        b1: {
            admission: 50,
            vacant_seat: 10
        },
        b2: {
            admission: 30,
            vacant_seat: 20
        },
        b3: {
            admission: 25,
            vacant_seat: 25
        },
        b4: {
            admission: 40,
            vacant_seat: 10
        }
    }
}

for (let k in data) {
    if (k === 'personal_info') {
        console.log(data[k].name, data[k].age, data[k].city);
    } else if (k === 'courses') {
        data[k].map((v) => {
            console.log(v);
        })
    }
    //console.log(data[k]);
}

// console.log(data.personal_info.name,data.personal_info.age,data.personal_info.city);
// console.log(data.courses.map((v) => {
//             console.log(v);
//         }));
// console.log(data.branches.b1.admission,data.branches.b1.vacant_seat);
// console.log(data.branches.b2.admission,data.branches.b2.vacant_seat);
// console.log(data.branches.b3.admission,data.branches.b3.vacant_seat);
// console.log(data.branches.b4.admission,data.branches.b4.vacant_seat);