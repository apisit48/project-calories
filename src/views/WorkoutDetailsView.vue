<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { db } from '@/js/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const route = useRoute();
const workoutId = route.params.id;
const workout = ref(null);

async function fetchWorkout() {
  const workoutRef = doc(db, 'workout', workoutId);
  const workoutSnap = await getDoc(workoutRef);

  if (workoutSnap.exists()) {
    workout.value = { id: workoutSnap.id, ...workoutSnap.data() };
  } else {
    console.log('No such workout!');
  }
}

onMounted(fetchWorkout);
</script >
<template>
    <div v-if="workout" class="strength-detail">
      <h1>{{ workout.title }}</h1>
      <img :src="workout.image" alt="Workout Image" />
      <p>Description: {{ workout.description }}</p>
      <p>Repetition: {{ workout.repetition }}</p>
      <p>Set: {{ workout.set }}</p>
    </div>
  </template>
  
<style>
*{
  font-family: 'Afacad', sans-serif;
}
.strength-detail img {
  max-width: 200px; 
  max-height: 200px; 
  object-fit: contain; 
  border: 10px whitesmoke solid;
  outline: 5px black solid;
}
.strength-detail{
  background-color: #212122;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; 
  max-width: 800px;
  margin: 0 auto;
  margin-top: 1vh;
  padding: 200px;
  border: 10px whitesmoke solid;
  outline: 5px black solid;
  color: whitesmoke;
  font-size: 1.12em;
}
</style>