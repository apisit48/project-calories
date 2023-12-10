<script setup>
import { ref, onMounted } from 'vue';
import { db } from '@/js/firebase.js';
import { doc, getDoc } from 'firebase/firestore';

const props = defineProps({
  workoutId: {
    type: String,
    required: true,
  }
});

const workout = ref(null);

async function fetchWorkout() {
  const workoutRef = doc(db, 'workout', props.workoutId);
  const workoutSnap = await getDoc(workoutRef);

  if (workoutSnap.exists()) {
    workout.value = { id: workoutSnap.id, ...workoutSnap.data() };
  } else {
    console.log('No such workout!');
  }
}

onMounted(() => {
  fetchWorkout();
});
</script>

<template>
    <RouterLink :to="{ name: 'workout-detail', params: { id: workoutId } }">
      <div v-if="workout" class="product-card">
        <img :src="workout.image" alt="Workout Image" />
        <h2>{{ workout.title }}</h2>
      </div>
    </RouterLink>
  </template>

<style scoped>

.product-card {
  padding: 10px; 
  width:200px; 
  height: 200px; 
  box-sizing: border-box; 
  cursor: pointer;
  border: 4px solid black;
  margin-top:  18px;
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center; 
  gap:10%;
  background-color:black;
  color:whitesmoke;
}

.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.product-card img {
  max-width: 100px; 
  max-height: 100px; 
}
</style>