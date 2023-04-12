// function calculateGrade() {
//     var Name = parseInt(prompt("Pls Enter Your Name"));
//     var maths = parseFloat(prompt("Enter Mathematics Marks"));
//     var english = parseFloat(prompt("Enter English Marks"));
//     var science = parseFloat(prompt("Enter Science Marks"));
//     var social = parseFloat(prompt("Enter Social Studies Marks"));

//     var total = maths + english + science + social;
//     var percentage = (total / 400) * 100;

//     document.getElementById("Name").innerHTML =  Name;
//     document.getElementById("mathsMarks").innerHTML = maths;
//     document.getElementById("englishMarks").innerHTML = english;
//     document.getElementById("scienceMarks").innerHTML = science;
//     document.getElementById("socialMarks").innerHTML = social;
//     document.getElementById("totalMarks").innerHTML = total;
//     document.getElementById("percentage").innerHTML = percentage.toFixed(2) + "%";

//     if (percentage >= 90) {
//         document.getElementById("grade").innerHTML = "A+";
//     } else if (percentage >= 80 && percentage < 90) {
//         document.getElementById("grade").innerHTML = "A";
//     } else if (percentage >= 70 && percentage < 80) {
//         document.getElementById("grade").innerHTML = "B+";
//     } else if (percentage >= 60 && percentage < 70) {
//         document.getElementById("grade").innerHTML = "B";
//     } else if (percentage >= 50 && percentage < 60) {
//         document.getElementById("grade").innerHTML = "C";
//     }else {
//         document.getElementById("garde").innerHTML = "FAIL";
//     }
// }

function calculateGrade() {
  let name = parseInt.(document.getElementById("name").value);
  let maths = parseInt(document.getElementById("maths").value);
  let english = parseInt(document.getElementById("english").value);
  let science = parseInt(document.getElementById("science").value);

  let totalMarks = maths + english + science;
  let averageMarks = totalMarks / 3;
  let grade;

  if (averageMarks >= 90) {
    grade = "A+";
  } else if (averageMarks >= 80) {
    grade = "A";
  } else if (averageMarks >= 70) {
    grade = "B+";
  } else if (averageMarks >= 60) {
    grade = "B";
  } else if (averageMarks >= 50) {
    grade = "C+";
  } else if (averageMarks >= 40) {
    grade = "C";
  } else {
    grade = "F";
  }

  let result = document.getElementById("result");
  result.innerHTML = "<h2>Name: " + name + "</h2>" +
    "<h2>Total Marks: " + totalMarks + "</h2>" +
    "<h2>Average Marks: " + averageMarks.toFixed(2) + "</h2>" +
    "<h2>Grade: " + grade + "</h2>";
}

