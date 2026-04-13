<template>
  <div 
    class="relative inline-flex items-center gap-2" 
    :class="isSmall ? 'px-4 py-2' : 'px-6 py-4'"
    style="background: linear-gradient(to right, #f97316, #ef4444); border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div :class="isAnimating ? 'animate-bounce' : ''">
      <Flame :class="isSmall ? 'w-6 h-6' : 'w-12 h-12'" class="text-yellow-300 fill-yellow-300" />
    </div>
    
    <div class="flex flex-col">
      <span :class="isSmall ? 'text-2xl' : 'text-4xl'" class="font-bold text-white">
        {{ streak }}
      </span>
      <span :class="isSmall ? 'text-xs' : 'text-sm'" class="text-orange-100">
        day streak
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Flame } from 'lucide-vue-next'

const props = defineProps({
  streak: {
    type: Number,
    required: true
  },
  size: {
    type: String,
    default: 'small',
    validator: (value) => ['small', 'large'].includes(value)
  }
})

const isSmall = props.size === 'small'
const isAnimating = ref(false)
const hover = ref(false)

watch(() => props.streak, () => {
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 1000)
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3) rotate(10deg); }
}
.animate-bounce {
  animation: bounce 0.5s ease-in-out;
}
</style>