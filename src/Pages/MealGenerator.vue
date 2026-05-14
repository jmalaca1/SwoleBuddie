<template>
  <div>
    <!-- Header -->
    <div class="mb-8 border-b border-[#D4AF37]/30 pb-6">
      <h1 class="text-4xl font-light tracking-wide mb-2 text-[#2C1810] font-serif">Generate</h1>
      <p class="text-[#5C3A1E] text-sm italic">Discover your next culinary adventure</p>
    </div>

    <!-- Filter Section - Vintage Card -->
    <div class="bg-white rounded-sm p-5 shadow-md border border-[#EBE3D5] mb-6">
      <h3 class="text-sm font-medium text-[#2C1810] mb-4 uppercase tracking-wider border-l-2 border-[#D4AF37] pl-3">Preferences</h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <select v-model="filters.cuisine" class="border border-[#EBE3D5] rounded-sm p-2 text-sm bg-white focus:outline-none focus:border-[#D4AF37] text-[#2C1810]">
          <option value="">All Cuisines</option>
          <option>Italian</option>
          <option>Asian</option>
          <option>Mexican</option>
          <option>American</option>
        </select>

        <select v-model="filters.dietary" class="border border-[#EBE3D5] rounded-sm p-2 text-sm bg-white focus:outline-none focus:border-[#D4AF37] text-[#2C1810]">
          <option value="">All Dietary</option>
          <option>High-Protein</option>
          <option>Vegetarian</option>
          <option>Vegan</option>
        </select>

        <select v-model="filters.time" class="border border-[#EBE3D5] rounded-sm p-2 text-sm bg-white focus:outline-none focus:border-[#D4AF37] text-[#2C1810]">
          <option value="0">Any Time</option>
          <option value="15">Under 15 min</option>
          <option value="30">Under 30 min</option>
        </select>
      </div>

      <button 
        @click="generateMeals"
        class="w-full mt-5 py-2.5 bg-[#2C1810] text-[#D4AF37] text-sm rounded-sm hover:bg-[#3D2B1F] transition-colors uppercase tracking-wider"
      >
        Generate Meals
      </button>
    </div>

    <!-- Results -->
    <div v-if="generatedMeals.length > 0" class="space-y-3">
      <div 
        v-for="(meal, index) in generatedMeals" 
        :key="index"
        class="bg-white rounded-sm p-4 shadow-md border border-[#EBE3D5] hover:shadow-lg transition-shadow cursor-pointer"
        @click="viewMeal(meal)"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-medium text-[#2C1810]">{{ meal.name }}</h3>
            <p class="text-sm text-[#5C3A1E] mt-1 italic">{{ meal.description }}</p>
            <div class="flex gap-2 mt-2">
              <span class="text-xs px-2 py-0.5 bg-[#F7F3E8] rounded-sm border border-[#EBE3D5]">{{ meal.type }}</span>
              <span class="text-xs text-[#B8960C]">{{ meal.cookTime }} min</span>
            </div>
          </div>
          <span class="text-3xl">{{ meal.icon }}</span>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else class="text-center py-12 bg-white rounded-sm border border-[#EBE3D5]">
      <p class="text-[#5C3A1E] text-sm italic">Select preferences and click generate</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const allMeals = [
  { id: 1, name: 'Grilled Salmon', description: 'With roasted vegetables', type: 'Seafood', cookTime: 25, icon: '🐟', cuisine: 'American', dietary: 'High-Protein' },
  { id: 2, name: 'Mushroom Risotto', description: 'Creamy arborio rice', type: 'Vegetarian', cookTime: 35, icon: '🍄', cuisine: 'Italian', dietary: 'Vegetarian' },
  { id: 3, name: 'Chicken Bowl', description: 'Buddha bowl with quinoa', type: 'Poultry', cookTime: 20, icon: '🥗', cuisine: 'American', dietary: 'High-Protein' },
  { id: 4, name: 'Beef Stir-fry', description: 'With bell peppers', type: 'Beef', cookTime: 15, icon: '🥩', cuisine: 'Asian', dietary: 'High-Protein' },
  { id: 5, name: 'Quinoa Salad', description: 'Fresh herbs and lemon', type: 'Vegan', cookTime: 10, icon: '🥑', cuisine: 'American', dietary: 'Vegan' },
  { id: 6, name: 'Vegetable Curry', description: 'Coconut and spices', type: 'Vegetarian', cookTime: 30, icon: '🍛', cuisine: 'Asian', dietary: 'Vegetarian' },
]

const filters = ref({ cuisine: '', dietary: '', time: 0 })
const generatedMeals = ref([])

const generateMeals = () => {
  let filtered = [...allMeals]
  
  if (filters.value.cuisine) {
    filtered = filtered.filter(m => m.cuisine === filters.value.cuisine)
  }
  if (filters.value.dietary) {
    filtered = filtered.filter(m => m.dietary === filters.value.dietary)
  }
  if (filters.value.time > 0) {
    filtered = filtered.filter(m => m.cookTime <= filters.value.time)
  }
  
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[filtered[i], filtered[j]] = [filtered[j], filtered[i]]
  }
  
  generatedMeals.value = filtered.slice(0, 3)
}

const viewMeal = (meal) => {
  router.push(`/meal/${meal.id}`)
}
</script>