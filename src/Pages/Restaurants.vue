<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-light tracking-tight mb-2">Restaurants</h1>
      <p class="text-gray-500 text-sm">Find restaurants serving meals from your plan</p>
    </div>

    <!-- Meal Selection (if coming from a specific meal) -->
    <div v-if="currentMeal" class="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-4">
      <p class="text-sm text-gray-600">Showing restaurants that serve:</p>
      <p class="font-medium text-gray-900 mt-1">{{ currentMeal.name }}</p>
      <button @click="clearMealFilter" class="text-xs text-gray-500 mt-2">Clear filter</button>
    </div>

    <!-- Location Search -->
    <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-6">
      <div class="flex gap-2">
        <input 
          v-model="location" 
          type="text" 
          placeholder="Enter your zip code or city..."
          class="flex-1 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-gray-400"
          @keyup.enter="searchRestaurants"
        />
        <button 
          @click="searchRestaurants"
          class="px-6 py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </div>
    </div>

    <!-- Filters -->
    <div v-if="restaurants.length > 0" class="flex gap-2 mb-4 overflow-x-auto pb-2">
      <button 
        v-for="filter in filters" 
        :key="filter"
        @click="activeFilter = filter"
        class="px-3 py-1.5 text-xs rounded-full transition-colors"
        :class="activeFilter === filter ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200'"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p class="text-gray-500 text-sm mt-3">Finding restaurants...</p>
    </div>

    <!-- Restaurant Results -->
    <div v-else-if="filteredRestaurants.length > 0" class="space-y-3">
      <div 
        v-for="restaurant in filteredRestaurants" 
        :key="restaurant.id"
        class="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xl">{{ restaurant.icon }}</span>
              <h3 class="font-medium text-gray-900">{{ restaurant.name }}</h3>
              <span class="text-xs text-gray-400">{{ restaurant.distance }} miles</span>
            </div>
            <p class="text-sm text-gray-500">{{ restaurant.address }}</p>
            <div class="flex flex-wrap gap-4 mt-2">
              <span class="text-xs text-gray-400">⭐ {{ restaurant.rating }} ({{ restaurant.reviews }}+)</span>
              <span class="text-xs text-gray-400">💰 {{ restaurant.priceRange }}</span>
              <span class="text-xs text-gray-400">{{ restaurant.cuisine }}</span>
            </div>
            
            <!-- Meal matches -->
            <div class="mt-2 flex flex-wrap gap-1">
              <span 
                v-for="meal in restaurant.matchingMeals" 
                :key="meal"
                class="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
              >
                {{ meal }}
              </span>
            </div>
          </div>
          <div class="flex flex-col gap-2 ml-3">
            <button 
              @click="getDirections(restaurant)"
              class="text-xs px-3 py-1.5 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Directions
            </button>
            <button 
              @click="viewMenu(restaurant)"
              class="text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              View Menu
            </button>
            <button 
              @click="makeReservation(restaurant)"
              class="text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="searched && filteredRestaurants.length === 0" class="text-center py-12 bg-white rounded-lg border border-gray-100">
      <p class="text-gray-400 text-sm">No restaurants found near {{ displayLocation }}</p>
      <p class="text-gray-400 text-xs mt-1">Try adjusting your filters or location</p>
    </div>

    <!-- Default State -->
    <div v-else class="text-center py-12 bg-white rounded-lg border border-gray-100">
      <p class="text-gray-400 text-sm">Enter a location to find restaurants near you</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const location = ref('')
const displayLocation = ref('')
const restaurants = ref([])
const loading = ref(false)
const searched = ref(false)
const activeFilter = ref('All')
const currentMeal = ref(null)

const filters = ['All', 'Delivery', 'Pickup', 'Dine-in', 'Open Now']

// Mock restaurant data
const restaurantDatabase = {
  '90210': [
    { id: 1, name: 'The Golden Spoon', address: '123 Rodeo Dr, Beverly Hills, CA', distance: 0.3, rating: 4.8, reviews: 234, priceRange: '$$$', cuisine: 'Italian', icon: '🍝', matchingMeals: ['Grilled Salmon', 'Mushroom Risotto'], delivery: true, pickup: true, dinein: true, openNow: true },
    { id: 2, name: 'Fresh Kitchen', address: '456 Wilshire Blvd, Los Angeles, CA', distance: 1.1, rating: 4.5, reviews: 189, priceRange: '$$', cuisine: 'Healthy', icon: '🥗', matchingMeals: ['Chicken Bowl', 'Quinoa Salad'], delivery: true, pickup: true, dinein: true, openNow: true },
    { id: 3, name: 'Asian Fusion', address: '789 Santa Monica Blvd, Beverly Hills, CA', distance: 1.8, rating: 4.6, reviews: 342, priceRange: '$$', cuisine: 'Asian', icon: '🥢', matchingMeals: ['Beef Stir-fry', 'Vegetable Curry'], delivery: true, pickup: false, dinein: true, openNow: false },
  ],
  '10001': [
    { id: 4, name: 'The Modern Vegan', address: '123 Broadway, New York, NY', distance: 0.4, rating: 4.7, reviews: 456, priceRange: '$$$', cuisine: 'Vegan', icon: '🌱', matchingMeals: ['Quinoa Salad', 'Vegetable Curry'], delivery: true, pickup: true, dinein: true, openNow: true },
  ]
}

const filteredRestaurants = computed(() => {
  if (activeFilter.value === 'All') return restaurants.value
  
  return restaurants.value.filter(r => {
    if (activeFilter.value === 'Delivery') return r.delivery
    if (activeFilter.value === 'Pickup') return r.pickup
    if (activeFilter.value === 'Dine-in') return r.dinein
    if (activeFilter.value === 'Open Now') return r.openNow
    return true
  })
})

const searchRestaurants = () => {
  if (!location.value.trim()) return
  
  loading.value = true
  searched.value = true
  displayLocation.value = location.value
  
  setTimeout(() => {
    const zipCode = location.value.replace(/\D/g, '')
    restaurants.value = restaurantDatabase[zipCode] || restaurantDatabase['90210']
    loading.value = false
  }, 1000)
}

const getDirections = (restaurant) => {
  window.open(`https://maps.google.com/?q=${encodeURIComponent(restaurant.address)}`, '_blank')
}

const viewMenu = (restaurant) => {
  alert(`Viewing menu for ${restaurant.name}\nCuisine: ${restaurant.cuisine}\nPrice: ${restaurant.priceRange}`)
}

const makeReservation = (restaurant) => {
  alert(`Reservation requested for ${restaurant.name}\nThey will contact you shortly.`)
}

const clearMealFilter = () => {
  currentMeal.value = null
  // In production, refetch all restaurants
  searchRestaurants()
}

const sortByDistance = () => {
  restaurants.value.sort((a, b) => a.distance - b.distance)
}

onMounted(() => {
  const mealId = route.params.mealId
  if (mealId) {
    // Fetch meal details based on ID
    currentMeal.value = { id: mealId, name: 'Grilled Salmon' }
  }
})
</script>