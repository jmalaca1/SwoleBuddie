<template>
  <div v-if="meal">
    <router-link to="/" class="inline-flex items-center gap-2 text-orange-600 mb-4 hover:underline">
      ← Back to Home
    </router-link>
    
    <div class="bg-white rounded-2xl overflow-hidden shadow-lg">
      <img :src="meal.image" :alt="meal.name" class="w-full h-64 object-cover" />
      
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-2">{{ meal.name }}</h1>
        <p class="text-gray-600 mb-4">{{ meal.description }}</p>
        
        <div class="flex gap-4 mb-6">
          <div class="flex items-center gap-1">
            <Flame class="h-5 w-5 text-orange-500" />
            <span>{{ meal.calories }} cal</span>
          </div>
          <div class="flex items-center gap-1">
            <Clock class="h-5 w-5" />
            <span>{{ meal.prepTime }} min</span>
          </div>
          <div class="flex items-center gap-1">
            <DollarSign class="h-5 w-5 text-green-600" />
            <span>${{ meal.price.toFixed(2) }}</span>
          </div>
        </div>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Ingredients</h2>
          <ul class="list-disc list-inside space-y-1">
            <li v-for="ingredient in meal.ingredients" :key="ingredient">
              {{ ingredient }}
            </li>
          </ul>
        </div>
        
        <div>
          <h2 class="text-xl font-semibold mb-3">Instructions</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li v-for="instruction in meal.instructions" :key="instruction">
              {{ instruction }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Flame, Clock, DollarSign } from 'lucide-vue-next'
import { MEALS } from '../data/mData.js'

const route = useRoute()
const meal = ref(null)

onMounted(() => {
  const mealId = route.params.id
  meal.value = MEALS.find(m => m.id === mealId)
})
</script>