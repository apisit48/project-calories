<script setup>
import { ref } from 'vue';

const gender = ref('male');
const age = ref(null);
const weight = ref(null);
const height = ref(null);
const activityLevel = ref('sedentary');
const calories = ref(null);

const calculateCalories = () => {
  let bmr;

  if (gender.value === 'male') {
    bmr = 88.362 + 13.397 * weight.value + 4.799 * height.value - 5.677 * age.value;
  } else {
    bmr = 447.593 + 9.247 * weight.value + 3.098 * height.value - 4.33 * age.value;
  }

  switch (activityLevel.value) {
    case 'sedentary':
      calories.value = bmr * 1.2;
      break;
    case 'lightlyActive':
      calories.value = bmr * 1.375;
      break;
    case 'moderatelyActive':
      calories.value = bmr * 1.55;
      break;
    case 'veryActive':
      calories.value = bmr * 1.725;
      break;
    case 'extraActive':
      calories.value = bmr * 1.9;
      break;
    default:
      calories.value = null;
  }
};

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
    <div id="calc">
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
  </div>
  <div class="calorie">
    <h2>Calorie Calculator</h2>

    <label for="gender">Gender:</label>
    <select v-model="gender" id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <label for="age">Age:</label>
    <input type="number" v-model="age" id="age" />

    <label for="weight">Weight (kg):</label>
    <input type="number" v-model="weight" id="weight" />

    <label for="height">Height (cm):</label>
    <input type="number" v-model="height" id="height" />

    <label for="activityLevel">Activity Level:</label>
    <select v-model="activityLevel" id="activityLevel">
      <option value="sedentary">Sedentary</option>
      <option value="lightlyActive">Lightly Active</option>
      <option value="moderatelyActive">Moderately Active</option>
      <option value="veryActive">Very Active</option>
      <option value="extraActive">Extra Active</option>
    </select>

    <button @click="calculateCalories">Calculate Calories</button>

    <div v-if="calories !== null">
      <h3>Your estimated daily calories: {{ calories.toFixed(2) }}</h3>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .calculator {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;                          
  }
  .calorie{
  min-height: 100vh;
  align-items: center;
  text-align: center;
}
}
</style>
