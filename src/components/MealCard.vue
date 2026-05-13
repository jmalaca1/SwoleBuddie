<template>
  <div
    class="opacity-0 translate-y-5 animate-fadeInUp hover:-translate-y-1 transition-all duration-400"
    :style="{ animationDelay: `${delay}s` }"
  >
    <RouterLink :to="`/meal/${meal.id}`" class="block group">
      <div class="bg-white border-2 border-black/10 overflow-hidden hover:border-[#1a1a1a] transition-all hover:shadow-xl hover:shadow-black/20 relative">
        <!-- Art Deco corner accents -->
        <div class="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <div class="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <div class="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <div class="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>

        <div :class="['relative overflow-hidden', isCompact ? 'h-48' : 'h-64']">
          <img
            :src="meal.image"
            :alt="meal.name"
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div class="absolute top-3 right-3 bg-white/95 px-3 py-1.5 border border-black/10 flex items-center gap-1.5">
            <Flame class="h-3.5 w-3.5 text-[#1a1a1a]" />
            <span class="text-xs font-medium tracking-wide">{{ meal.calories }}</span>
          </div>
        </div>

        <div :class="isCompact ? 'p-5' : 'p-6'">
          <h3 :class="[
            'font-serif font-semibold mb-2 tracking-tight',
            isCompact ? 'text-xl' : 'text-2xl'
          ]">
            {{ meal.name }}
          </h3>

          <p v-if="!isCompact" class="text-[#6b6b6b] text-sm mb-4 line-clamp-2 font-light">
            {{ meal.description }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="(tag, index) in meal.tags.slice(0, isCompact ? 2 : 3)"
              :key="tag"
              :class="[
                'px-3 py-1 border text-[#1a1a1a] text-[0.65rem] uppercase tracking-wider relative',
                index === 0 ? 'border-[#1a1a1a] bg-black/5' :
                index === 1 ? 'border-[#6b6b6b] bg-[#6b6b6b]/5' :
                'border-black/10'
              ]"
            >
              <span v-if="index === 0" class="absolute -left-1 -top-1 w-1.5 h-1.5 bg-[#1a1a1a] rotate-45"></span>
              {{ tag }}
            </span>
          </div>

          <div class="flex items-center justify-between text-sm text-[#6b6b6b] pt-3 border-t border-black/10">
            <div class="flex items-center gap-1.5">
              <Clock class="h-4 w-4" />
              <span class="text-xs tracking-wide">{{ meal.prepTime }} min</span>
            </div>
            <div class="flex items-center gap-1 font-semibold text-[#1a1a1a]">
              <DollarSign class="h-4 w-4" />
              <span class="text-sm">{{ meal.price.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Clock, DollarSign, Flame } from 'lucide-vue-next'

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

const isCompact = computed(() => props.variant === 'compact')
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out forwards;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>