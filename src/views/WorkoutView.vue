<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from "firebase/firestore";
import ProductCard from '@/components/ProductCardWorkout.vue'
import ProductCardStrength from '@/components/ProductCardStrength.vue'


const cardio = ref([])

async function getCardio() {


onSnapshot(collection(db, 'workout'), (querySnapshot) => {
  let cardioSnapshot = []
  querySnapshot.forEach((doc) => {
    let cardios = {
      "id": doc.id,
      "title": doc.data().title,
      "description": doc.data().description,
      "repetition": doc.data().repetition,
      "set": doc.data().set,
      "image": doc.data().image
    }

    cardioSnapshot.push(cardios)
  })
  cardio.value = cardioSnapshot
})
}

onMounted(async () => {
  console.log("Connecting to Firebase")
  await getCardio()
})

</script>

<template>
  <div class="workout">
    <h1>Weight Loss Workout Plan</h1>

    <div class="dropdown">
        <button class="dropdown-item">Select Workout</button>
        <div class="dropdown-content">
            <a href="#" onclick="showWorkoutInfo()">Cardiovascular Exercises</a>
            <a href="#" onclick="showWorkoutInfo()">Strength Training</a>
        </div>
        
    </div>

    <div id="cardio-info">
        <h2>Cardiovascular Exercises</h2>
        <p>
            Incorporate brisk walking, jogging, cycling, jumping rope, and high-intensity interval training (HIIT) for effective cardiovascular workouts.
        </p>
    </div>
    
    <div class="products">
        <ProductCard v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>;

    <div id="strength-info">
        <h2>Strength Traning</h2>
        <p>
            Incorporate brisk walking, jogging, cycling, jumping rope, and high-intensity interval training (HIIT) for effective cardiovascular workouts.
        </p>
    </div>

    <div class="products-strength">
        <ProductCardStrength v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>;


    </div>
</template>

<style>
.dropdown {
            display: inline-block;
        }

        .dropdown-content {
            display: none;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
            z-index: 1;
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }

        .dropdown-item {
            padding: 12px 16px;
            text-decoration: none;
            display: block;
            color: #333;
        }

        h2 {
            color: #333;
        }

        p {
            color: #666;
            line-height: 1.5;
        }
.products {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin-bottom: 10px;
  margin-left: 460px;
  justify-content: center;
  background-color: rgb(172, 179, 179);
  border: 3px solid #39495c;
}
.products-strength {
  display: flex;
  flex-wrap: wrap;
  width: 600px;
  margin-bottom: 10px;
  margin-left: 460px;
  justify-content: center;
  background-color: rgb(172, 179, 179);
  border: 3px solid #39495c;
}
    
</style>