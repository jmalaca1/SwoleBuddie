<template>
  <div
    :class="[
      'relative inline-flex items-center gap-3 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a3a] border-4 border-double border-[#6b6b6b] shadow-lg shadow-black/20 cursor-pointer transition-transform hover:scale-105 active:scale-95',
      isSmall ? 'px-6 py-3' : 'px-8 py-5'
    ]"
  >
    <!-- Art Deco corner ornaments -->
    <div class="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-[#6b6b6b]"></div>
    <div class="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-[#6b6b6b]"></div>
    <div class="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-[#6b6b6b]"></div>
    <div class="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-[#6b6b6b]"></div>

    <div
      :class="[
        'transition-transform',
        isAnimating ? 'animate-bounce' : ''
      ]"
    >
      <Flame
        :class="[
          'text-white fill-white',
          isSmall ? 'h-6 w-6' : 'h-10 w-10'
        ]"
      />
    </div>

    <div class="flex flex-col">
      <span :class="[
        'font-serif font-bold text-white',
        isSmall ? 'text-3xl' : 'text-5xl'
      ]">
        {{ streak }}
      </span>
      <span :class="[
        'text-white/80 tracking-widest uppercase',
        isSmall ? 'text-[0.65rem]' : 'text-xs'
      ]">
        Day Streak
      </span>
    </div>

    <!-- Animated particles -->
    <Transition name="particle">
      <div v-if="isAnimating" class="absolute inset-0 pointer-events-none">
        <div
          v-for="i in 5"
          :key="i"
          class="absolute w-1.5 h-1.5 bg-white rounded-full animate-ping"
          :style="{
            left: '50%',
            top: '50%',
            animationDelay: `${i * 0.1}s`
          }"
        ></div>
      </div>
    </Transition>
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

const isAnimating = ref(false)
const isSmall = props.size === 'small'

watch(() => props.streak, () => {
  isAnimating.value = true
  setTimeout(() => {
    isAnimating.value = false
  }, 1000)
}, { immediate: true })
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }
  25% {
    transform: scale(1.2) rotate(8deg);
  }
  75% {
    transform: scale(1.2) rotate(-8deg);
  }
}

.animate-bounce {
  animation: bounce 0.5s ease-in-out;
}
</style>