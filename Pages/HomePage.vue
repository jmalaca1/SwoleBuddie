<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Your Meals</h1>
      <StreakCounter :streak="7" size="small" />
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MealCard 
        v-for="(meal, index) in meals" 
        :key="meal.id"
        :meal="meal"
        :delay="index * 0.1"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StreakCounter from '../components/StreakCounter.vue'
import MealCard from '../components/MealCard.vue'
import { MEALS } from '../data/mData.js'

const meals = ref(MEALS)
</script>