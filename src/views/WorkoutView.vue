<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from 'firebase/firestore'
import ProductCard from '@/components/ProductCardWorkout.vue'
import ProductCardStrength from '@/components/ProductCardStrength.vue'


const cardio = ref([])

async function getCardio() {


  onSnapshot(collection(db, 'workout'), (querySnapshot) => {
    let cardioSnapshot = []
    querySnapshot.forEach((doc) => {
      let cardios = {
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        repetition: doc.data().repetition,
        set: doc.data().set,
        image: doc.data().image
      }

      cardioSnapshot.push(cardios)
    })
    cardio.value = cardioSnapshot
  })
}

onMounted(async () => {
  console.log('Connecting to Firebase')
  await getCardio()
})

</script>

<template>
  <div class="workout">
    <h1>Weight Loss Workout Plan</h1>

    <div class="dropdown">
      <button class="dropdown-item">Select Workout</button>
      <div class="dropdown-content">
        <a href="#cardio-info">Cardiovascular Exercises</a>
        <a href="#strength-info">Strength Training</a>
      </div>
    </div>

    <div id="cardio-info">
      <h1>Cardiovascular Exercises</h1>
      <p>
        Incorporate brisk walking, jogging, cycling, jumping rope, and high-intensity interval
        training (HIIT) for effective cardiovascular workouts.
      </p>
    </div>

    <div class="products">
      <ProductCard v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>

    <div id="strength-info">
      <h1>Strength Traning</h1>
      <p>
        Incorporate compound movements like squats, deadlifts, and presses to build overall muscle strength and enhance your physical performance.
      </p>
    </div>

    <div class="products-strength">
      <ProductCardStrength v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>
  </div>
</template>

<style scoped>
* {
  text-decoration: none;
  font-family: 'Afacad', sans-serif;
  color: whitesmoke;
}
.workout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  background-color: #212121;
  border-radius: 7px/7px;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-item {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #333;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropdown-item {background-color: #3e8e41;}

p {
  color: #ddd;
  line-height: 1.5;
}
.products {
  color: black;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin-bottom: 10px;
  justify-content: center;
  background-color: #212121;
  border: 3px solid black;
}
.products {
  color: #212121;
}

.products-strength {
  color: black;
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin-bottom: 10px;
  justify-content: center;
  background-color: #212121;
  border: 3px solid black;
}
h2{
  color: #212121;
}
</style>
