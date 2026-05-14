<template>
  <div>
    <!-- Hero Section -->
    <div class="mb-10 border-b border-[#D4AF37]/30 pb-6">
      <h1 class="text-4xl font-light tracking-wide mb-2 text-[#2C1810] font-serif">Your Table</h1>
      <p class="text-[#5C3A1E] text-sm italic">Curated meal planning for the discerning palate</p>
    </div>

    <!-- Stats Row - Vintage Library Cards -->
    <div class="grid grid-cols-3 gap-3 mb-10">
      <div class="bg-white rounded-sm p-4 text-center shadow-md border-l-4 border-[#D4AF37]">
        <div class="text-2xl font-semibold text-[#2C1810]">14</div>
        <div class="text-xs text-[#5C3A1E] mt-1 uppercase tracking-wide">Day Streak</div>
      </div>
      <div class="bg-white rounded-sm p-4 text-center shadow-md border-l-4 border-[#D4AF37]">
        <div class="text-2xl font-semibold text-[#2C1810]">30</div>
        <div class="text-xs text-[#5C3A1E] mt-1 uppercase tracking-wide">This Month</div>
      </div>
      <div class="bg-white rounded-sm p-4 text-center shadow-md border-l-4 border-[#D4AF37]">
        <div class="text-2xl font-semibold text-[#2C1810]">$668</div>
        <div class="text-xs text-[#5C3A1E] mt-1 uppercase tracking-wide">Total Saved</div>
      </div>
    </div>

    <!-- Today's Selections -->
    <div class="flex justify-between items-center mb-5">
      <h2 class="text-xl font-medium text-[#2C1810] font-serif">Today's Selections</h2>
      <button 
        @click="refreshMeals"
        class="text-sm text-[#D4AF37] hover:text-[#B8960C] transition-colors"
      >
        ↻ Refresh Selections
      </button>
    </div>

    <!-- Meal Cards - Leather-bound book style -->
    <div class="space-y-3">
      <div 
        v-for="meal in meals" 
        :key="meal.id"
        class="bg-white rounded-sm p-4 shadow-md border border-[#EBE3D5] hover:shadow-lg transition-shadow cursor-pointer group"
        @click="viewMeal(meal)"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <h3 class="font-medium text-[#2C1810] group-hover:text-[#D4AF37] transition-colors">{{ meal.name }}</h3>
            <p class="text-sm text-[#5C3A1E] mt-1 italic">{{ meal.description }}</p>
            <div class="flex gap-2 mt-2">
              <span class="text-xs px-2 py-0.5 bg-[#F7F3E8] text-[#5C3A1E] rounded-sm border border-[#EBE3D5]">{{ meal.type }}</span>
              <span class="text-xs text-[#B8960C]">{{ meal.cookTime }} min</span>
            </div>
          </div>
          <span class="text-3xl ml-3 opacity-80 group-hover:opacity-100 transition-opacity">{{ meal.icon }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const mealDatabase = [
  { id: 1, name: 'Grilled Salmon with Veggies', description: 'High-protein low-carb meal', type: 'Seafood', cookTime: 25, icon: '🐟' },
  { id: 2, name: 'Mushroom Risotto', description: 'Creamy Italian classic', type: 'Vegetarian', cookTime: 35, icon: '🍄' },
  { id: 3, name: 'Chicken Buddha Bowl', description: 'Nutrient-packed grain bowl', type: 'Poultry', cookTime: 20, icon: '🥗' },
  { id: 4, name: 'Beef Stir-fry', description: 'Quick Asian-inspired dish', type: 'Beef', cookTime: 15, icon: '🥩' },
  { id: 5, name: 'Quinoa Salad', description: 'Fresh and light', type: 'Vegan', cookTime: 10, icon: '🥑' },
  { id: 6, name: 'Lemon Herb Chicken', description: 'Juicy and flavorful', type: 'Poultry', cookTime: 30, icon: '🍗' },
]

const meals = ref([])

const getRandomMeals = () => {
  const shuffled = [...mealDatabase]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  meals.value = shuffled.slice(0, 3)
}

const refreshMeals = () => {
  getRandomMeals()
}

const viewMeal = (meal) => {
  router.push(`/meal/${meal.id}`)
}

onMounted(() => {
  getRandomMeals()
})
</script>