<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { db } from '@/js/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const route = useRoute();
const workoutId = route.params.id;
const workout = ref(null);

async function fetchWorkout() {
  const workoutRef = doc(db, 'food', workoutId);
  const workoutSnap = await getDoc(workoutRef);

  if (workoutSnap.exists()) {
    workout.value = { id: workoutSnap.id, ...workoutSnap.data() };
  } else {
    console.log('No such workout!');
  }
}

onMounted(fetchWorkout);
</script>

<template>
    <div v-if="workout" class="food-detail">
      <h1>{{ workout.food }}</h1>
      <img :src="workout.image" alt="Workout Image" />
      <p>Calories: {{ workout.calories }}</p>
      <p>Carb: {{ workout.carb }}</p>
      <p>Fat: {{ workout.fat }}</p>
      <p>Protien: {{ workout.pro }}</p>
      <p>Specification: {{ workout.specification }}</p>

    </div>
  </template>

<style>
.food-detail img {
  max-width: 200px; 
  max-height: 200px; 
  object-fit: contain; 
}
.food-detail{
  background-color: #212122;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; 
  max-width: 800px;
  margin: 0 auto;
  margin-top: 1vh;
  padding: 7%;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  color: whitesmoke;
  font-size: 1.12em;
}
</style>