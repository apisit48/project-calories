<script setup>
import { ref, onMounted } from 'vue'
import { db } from '@/js/firebase.js'
import { collection, onSnapshot } from "firebase/firestore";
import ProductCardFood from '@/components/ProductCardFood.vue'


const cardio = ref([])

async function getCardio() {


onSnapshot(collection(db, 'food'), (querySnapshot) => {
  let cardioSnapshot = []
  querySnapshot.forEach((doc) => {
    let cardios = {
      "id": doc.id,
      "food": doc.data().food,
      "carb": doc.data().carb,
      "fat": doc.data().fat,
      "pro": doc.data().pro,
      "calories": doc.data().calories,
      "specification": doc.data().specification,
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
    
    <div class="products">
        <ProductCardFood v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>;


</template>

<style>
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
    
</style>