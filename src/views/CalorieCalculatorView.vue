<script setup>
function calculateBMI() {
  var height = document.getElementById('height').value
  var weight = document.getElementById('weight').value

  if (height === '' || weight === '') {
    alert('Please enter both height and weight.')
    return
  }

  var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2)

  var result = 'Your BMI is: ' + bmi

  if (bmi < 18.5) {
    result += ' (Underweight)'
  } else if (bmi >= 18.5 && bmi < 25) {
    result += ' (Normal weight)'
  } else if (bmi >= 25 && bmi < 30) {
    result += ' (Overweight)'
  } else {
    result += ' (Obese)'
  }

  document.getElementById('result').innerHTML = result
}
</script>

<template>
  <div class="calculator">
    <h1>Calculator</h1>
  </div>
  <div id="calculator">
    <h1>BMI Calculator with Vue</h1>

    <label for="height">Height (cm): </label>
    <input type="number" v-model="height" placeholder="Enter height in cm" />

    <br />

    <label for="weight">Weight (kg): </label>
    <input type="number" v-model="weight" placeholder="Enter weight in kg" />

    <br />

    <button @click="calculateBMI">Calculate BMI</button>

    <div id="result">{{ result }}</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .calculator {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
