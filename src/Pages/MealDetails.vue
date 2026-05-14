<template>
  <div class="max-w-4xl mx-auto">
    <!-- Meal details content here -->
    
    <!-- Add this button at the bottom -->
    <div class="mt-6 pt-6 border-t border-gray-100">
      <h3 class="font-medium mb-3">Find this meal near you</h3>
      <div class="flex gap-3">
        <router-link 
          :to="`/restaurants/${meal.id}`"
          class="flex-1 text-center py-2.5 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
        >
          🍽️ Find Restaurants
        </router-link>
        <router-link 
          to="/grocery-stores"
          class="flex-1 text-center py-2.5 border border-gray-900 text-gray-900 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          🛒 Find Ingredients
        </router-link>
      </div>
    </div>
  </div>
</template>