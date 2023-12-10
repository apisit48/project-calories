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
  <div class="finfo">
    <h1>Food Importance</h1>
    <section>
    <p>Food is crucial for fitness as it provides the necessary nutrients to fuel and support various physiological processes in the body. A balanced diet contributes to overall health, energy levels, and optimal performance during workouts. <br> Here's a list of macronutrients and their calorie content per gram:</p>
    <ul>
        <li>Protein: 4 calories per gram</li>
        <li>Carbohydrates: 4 calories per gram</li>
        <li>Fat: 9 calories per gram</li>
    </ul>
  </section>
  </div>
    
    <div class="fproducts">
        <ProductCardFood v-for="workout in cardio" :key="workout.id" :workoutId="workout.id" />
    </div>


</template>

<style scoped>
* {
  text-decoration: none;
  font-family: 'Afacad', sans-serif;
  color: whitesmoke; 

}
.fproducts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  padding-bottom: 20px;
  outline: 5px black solid;
  border: 5px solid whitesmoke;
  border-bottom: 0;
}
.finfo{
  text-align: center;
  background-color: #212121;
  padding-bottom: 11vh;
  outline: 5px black solid;
  border: 5px solid whitesmoke;
}
section {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
    
</style>