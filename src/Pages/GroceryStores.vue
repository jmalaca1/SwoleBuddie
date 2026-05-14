<template>
  <div class="max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-6">
      <h1 class="text-3xl font-light tracking-tight mb-2">Grocery Stores</h1>
      <p class="text-gray-500 text-sm">Find stores near you</p>
    </div>

    <!-- Location Search -->
    <div class="bg-white rounded-lg p-4 shadow-sm border border-gray-100 mb-6">
      <div class="flex gap-2">
        <input 
          v-model="location" 
          type="text" 
          placeholder="Enter your zip code or city..."
          class="flex-1 border border-gray-200 rounded-lg p-2.5 text-sm focus:outline-none focus:border-gray-400"
          @keyup.enter="searchStores"
        />
        <button 
          @click="searchStores"
          class="px-6 py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </div>
      <button 
        @click="useCurrentLocation"
        class="mt-3 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        📍 Use my current location
      </button>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="text-center py-12">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      <p class="text-gray-500 text-sm mt-3">Finding stores near you...</p>
    </div>

    <!-- Store Results -->
    <div v-else-if="stores.length > 0" class="space-y-3">
      <div class="flex justify-between items-center mb-3">
        <p class="text-sm text-gray-500">{{ stores.length }} stores found near {{ displayLocation }}</p>
        <button @click="sortByDistance" class="text-xs text-gray-500 hover:text-gray-900">Sort by distance</button>
      </div>

      <div 
        v-for="store in stores" 
        :key="store.id"
        class="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div class="flex justify-between items-start">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xl">{{ store.icon }}</span>
              <h3 class="font-medium text-gray-900">{{ store.name }}</h3>
              <span v-if="store.distance" class="text-xs text-gray-400">{{ store.distance }} miles</span>
            </div>
            <p class="text-sm text-gray-500">{{ store.address }}</p>
            <div class="flex gap-4 mt-2">
              <span class="text-xs text-gray-400">{{ store.hours }}</span>
              <span class="text-xs text-gray-400">⭐ {{ store.rating }}</span>
            </div>
          </div>
          <div class="flex flex-col gap-2 ml-3">
            <button 
              @click="getDirections(store)"
              class="text-xs px-3 py-1.5 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Directions
            </button>
            <button 
              @click="viewStoreDetails(store)"
              class="text-xs px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors"
            >
              Details
            </button>
          </div>
        </div>
        
        <!-- Special offers -->
        <div v-if="store.offers" class="mt-3 pt-3 border-t border-gray-100">
          <p class="text-xs text-green-600">🎉 {{ store.offers }}</p>
        </div>
      </div>
    </div>

    <!-- No Results -->
    <div v-else-if="searched && stores.length === 0" class="text-center py-12 bg-white rounded-lg border border-gray-100">
      <p class="text-gray-400 text-sm">No stores found near {{ displayLocation }}</p>
      <p class="text-gray-400 text-xs mt-1">Try a different location</p>
    </div>

    <!-- Default State -->
    <div v-else class="text-center py-12 bg-white rounded-lg border border-gray-100">
      <p class="text-gray-400 text-sm">Enter a location to find grocery stores near you</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const location = ref('')
const displayLocation = ref('')
const stores = ref([])
const loading = ref(false)
const searched = ref(false)

// Mock store data - In production, this would come from Google Places API
const storeDatabase = {
  '90210': [
    { id: 1, name: 'Whole Foods Market', address: '123 Main St, Beverly Hills, CA', distance: 0.8, rating: 4.5, hours: '7am - 10pm', icon: '🛒', offers: '10% off organic produce today!' },
    { id: 2, name: 'Trader Joe\'s', address: '456 Oak Ave, Beverly Hills, CA', distance: 1.2, rating: 4.7, hours: '8am - 9pm', icon: '🏪', offers: 'New seasonal items in stock!' },
    { id: 3, name: 'Safeway', address: '789 Pine Rd, Los Angeles, CA', distance: 2.1, rating: 4.2, hours: '6am - 11pm', icon: '🏬', offers: 'Buy one get one free on select items' },
  ],
  '10001': [
    { id: 4, name: 'Whole Foods Market', address: '10 Columbus Cir, New York, NY', distance: 0.5, rating: 4.6, hours: '7am - 10pm', icon: '🛒', offers: '' },
    { id: 5, name: 'Trader Joe\'s', address: '142 E 14th St, New York, NY', distance: 1.0, rating: 4.8, hours: '8am - 9pm', icon: '🏪', offers: 'New snacks just arrived!' },
  ]
}

const searchStores = () => {
  if (!location.value.trim()) return
  
  loading.value = true
  searched.value = true
  displayLocation.value = location.value
  
  // Simulate API call
  setTimeout(() => {
    const zipCode = location.value.replace(/\D/g, '')
    stores.value = storeDatabase[zipCode] || storeDatabase['90210']
    loading.value = false
  }, 1000)
}

const useCurrentLocation = () => {
  if (navigator.geolocation) {
    loading.value = true
    navigator.geolocation.getCurrentPosition((position) => {
      // In production, use lat/lng to find nearby stores via API
      location.value = '90210' // Mock zip for demo
      searchStores()
    }, () => {
      alert('Unable to get your location')
      loading.value = false
    })
  } else {
    alert('Geolocation is not supported by this browser')
  }
}

const sortByDistance = () => {
  stores.value.sort((a, b) => a.distance - b.distance)
}

const getDirections = (store) => {
  // In production, open Google Maps
  window.open(`https://maps.google.com/?q=${encodeURIComponent(store.address)}`, '_blank')
}

const viewStoreDetails = (store) => {
  alert(`Store: ${store.name}\nHours: ${store.hours}\nRating: ${store.rating}`)
}
</script>