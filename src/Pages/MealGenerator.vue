<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Generate Meal</h1>
    
    <div class="bg-white rounded-2xl p-6 shadow-md mb-8">
      <h2 class="text-xl font-semibold mb-4">Select Your Goals</h2>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="goal in GOAL_OPTIONS"
          :key="goal.id"
          @click="selectGoal(goal.id)"
          :class="[goal.color, selectedGoal === goal.id ? 'ring-2 ring-orange-500' : '']"
          class="px-4 py-2 rounded-full transition-all"
        >
          {{ goal.label }}
        </button>
      </div>
      
      <button 
        @click="generateMeal"
        class="mt-6 w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all"
      >
        Generate Meal
      </button>
    </div>
    
    <div v-if="generatedMeal" class="mt-6">
      <h2 class="text-2xl font-semibold mb-4">Your Generated Meal</h2>
      <MealCard :meal="generatedMeal" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MealCard from '../components/MealCard.vue'
import { MEALS, GOAL_OPTIONS } from '../data/mData.js'

const selectedGoal = ref(null)
const generatedMeal = ref(null)

const selectGoal = (goalId) => {
  selectedGoal.value = goalId
}

const generateMeal = () => {
  if (!selectedGoal.value) {
    alert('Please select a goal first!')
    return
  }
  
  const filteredMeals = MEALS.filter(meal => 
    meal.goals.includes(selectedGoal.value)
  )
  
  if (filteredMeals.length > 0) {
    const randomIndex = Math.floor(Math.random() * filteredMeals.length)
    generatedMeal.value = filteredMeals[randomIndex]
  } else {
    generatedMeal.value = MEALS[Math.floor(Math.random() * MEALS.length)]
  }
}
</script>