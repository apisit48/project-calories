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
</script>

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
.strength-detail img {
  max-width: 200px; /* Adjust the value as needed */
  max-height: 200px; /* Adjust the value as needed */
  object-fit: contain; /* This ensures that the aspect ratio is maintained */
}
</style>