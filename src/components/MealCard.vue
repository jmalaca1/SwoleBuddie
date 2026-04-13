<template>
  <div 
    class="block transform transition-all duration-300 hover:-translate-y-2"
    :style="{ animationDelay: `${delay}s` }"
  >
    <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
      <div :class="isCompact ? 'h-40' : 'h-56'" class="relative">
        <img :src="meal.image" :alt="meal.name" class="w-full h-full object-cover" />
        <div class="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Flame class="h-4 w-4 text-orange-500" />
          <span class="text-sm font-medium">{{ meal.calories }}</span>
        </div>
      </div>
      
      <div :class="isCompact ? 'p-4' : 'p-5'">
        <h3 :class="isCompact ? 'text-lg' : 'text-xl'" class="font-semibold mb-2">
          {{ meal.name }}
        </h3>
        
        <p v-if="!isCompact" class="text-gray-600 text-sm mb-3 line-clamp-2">
          {{ meal.description }}
        </p>
        
        <div class="flex flex-wrap gap-2 mb-3">
          <span 
            v-for="tag in displayTags" 
            :key="tag"
            class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
          >
            {{ tag }}
          </span>
        </div>
        
        <div class="flex items-center justify-between text-sm text-gray-600">
          <div class="flex items-center gap-1">
            <Clock class="h-4 w-4" />
            <span>{{ meal.prepTime }} min</span>
          </div>
          <div class="flex items-center gap-1 font-semibold text-green-600">
            <DollarSign class="h-4 w-4" />
            <span>${{ meal.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Flame, Clock, DollarSign } from 'lucide-vue-next'

const props = defineProps({
  meal: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'full',
    validator: (value) => ['compact', 'full'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  }
})

const isCompact = props.variant === 'compact'
const displayTags = computed(() => {
  return isCompact ? props.meal.tags.slice(0, 2) : props.meal.tags.slice(0, 3)
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>