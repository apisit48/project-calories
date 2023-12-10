<script setup>
import { ref } from 'vue'

const gender = ref('male')
const age = ref(null)
const weight = ref(null)
const height = ref(null)
const activityLevel = ref('sedentary')
const calories = ref(null)

const calculateCalories = () => {
  let bmr

  if (gender.value === 'male') {
    bmr = 88.362 + 13.397 * weight.value + 4.799 * height.value - 5.677 * age.value
  } else {
    bmr = 447.593 + 9.247 * weight.value + 3.098 * height.value - 4.33 * age.value
  }

  switch (activityLevel.value) {
    case 'sedentary':
      calories.value = bmr * 1.2
      break
    case 'lightlyActive':
      calories.value = bmr * 1.375
      break
    case 'moderatelyActive':
      calories.value = bmr * 1.55
      break
    case 'veryActive':
      calories.value = bmr * 1.725
      break
    case 'extraActive':
      calories.value = bmr * 1.9
      break
    default:
      calories.value = null
  }
}

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
      <h1>BMI Calculator</h1>
      <div class="settings">
        <label for="height">Height (cm) </label>
        <input type="number" v-model="height" placeholder="Enter height in cm" />

        <label for="weight">Weight (kg) </label>
        <input type="number" v-model="weight" placeholder="Enter weight in kg" />
      </div>
      <button @click="calculateBMI">Calculate BMI</button>

      <div id="result">{{ result }}</div>
    </div>
  </div>
  <div class="calorie">
    <h1>Calorie Calculator</h1>

    <label for="gender">Gender:</label>
    <select v-model="gender" id="gender">
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <div class="settings">
      <label for="age">Age</label>
      <input type="number" v-model="age" id="age" placeholder="Enter age" />

      <label for="weight">Weight (kg)</label>
      <input type="number" v-model="weight" id="weight" placeholder="Enter height in cm" />

      <label for="height">Height (cm)</label>
      <input type="number" v-model="height" id="height" placeholder="Enter height in cm" />
    </div>
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
  <footer>
    <h3>&copy; 2023 Project Calories. All rights reserved.</h3>
  </footer>
</template>

<style scoped>
* {
  font-family: 'Afacad', sans-serif;
  font-size: 18px;
}
.calculator {
  height: 32vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  background-color: #212121;
  color: whitesmoke;
}
.calorie {
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  background-color: #212121;
  color: whitesmoke;
}
.calorie select {
  padding: 5px;
  margin: 10px;
}
.calorie button{
  margin-bottom: 20px;
}

div.settings {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 5px;
  margin-bottom: 15px;
}
div.settings label {
  text-align: right;
}
div.settings label:after {
  content: ':';
}

footer {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #212121;
  color: whitesmoke;
  height: 150px;
  width: 99%;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
}
</style>
