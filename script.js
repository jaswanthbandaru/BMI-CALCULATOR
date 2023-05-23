function calculateBMI() {
  const age = parseInt(document.getElementById("age").value);
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);

  const bmi = weight / ((height / 100) ** 2);

  let message = "";

  if (age < 18) {
    message = "BMI calculations are not accurate for people under 18 years old.";
  } else if (bmi < 18.5) {
    message = "Underweight";
  } else if (bmi < 25) {
    message = "Normal weight";
  } else if (bmi < 30) {
    message = "Overweight";
  } else {
    message = "Obese";
  }

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<h2>BMI Result</h2>
    <p>Your BMI is <strong>${bmi.toFixed(1)}</strong> (${message})</p>`;
}
