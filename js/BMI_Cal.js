
const calculateButton = document.getElementById("calculate");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultSpan = document.getElementById("result");

calculateButton.addEventListener("result", function () {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height * height);


    if (bmi < 18.5) {
        classificationSpan.textContent = "Underweight";
    } else if (bmi < 25) {
        classificationSpan.textContent = "Normal weight";
    } else if (bmi < 30) {
        classificationSpan.textContent = "Overweight";
    } else {
        classificationSpan.textContent = "Obese";
    }
});

