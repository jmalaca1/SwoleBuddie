<template>
  <div class="py-12 space-y-12">
    <!-- Masthead - Art Deco -->
    <div class="text-center space-y-4 pb-10 relative opacity-0 -translate-y-5 animate-fadeIn">
      <div class="space-y-2">
        <p class="text-[0.7rem] tracking-[0.3em] uppercase text-[#6b6b6b] font-light">
          Culinary Excellence
        </p>
        <h1 class="text-5xl md:text-6xl font-serif font-bold text-[#1a1a1a] tracking-tight relative">
          Your Table
          <!-- Art Deco corner ornaments -->
          <span class="absolute -top-4 -left-8 text-[#1a1a1a] text-2xl hidden md:block">◆</span>
          <span class="absolute -top-4 -right-8 text-[#1a1a1a] text-2xl hidden md:block">◆</span>
        </h1>
        <p class="text-sm tracking-wide text-[#6b6b6b] mt-2 font-light max-w-md mx-auto">
          Curated meal planning for the discerning palate
        </p>
      </div>
      <!-- Art Deco geometric divider -->
      <div class="flex items-center justify-center gap-2 pt-4">
        <div class="w-12 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"></div>
        <div class="w-2 h-2 bg-[#1a1a1a] rotate-45"></div>
        <div class="w-16 h-px bg-[#1a1a1a]"></div>
        <div class="w-2 h-2 bg-[#1a1a1a] rotate-45"></div>
        <div class="w-12 h-px bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent"></div>
      </div>
    </div>

    <!-- Streak Counter -->
    <div class="flex justify-center opacity-0 animate-fadeIn" style="animation-delay: 0.1s">
      <StreakCounter :streak="streak" />
    </div>

    <!-- Stats - Art Deco Grid -->
    <div class="grid grid-cols-2 gap-px bg-black/10 relative opacity-0 translate-y-5 animate-fadeInUp" style="animation-delay: 0.2s">
      <!-- Art Deco corner accents -->
      <div class="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-[#1a1a1a]"></div>
      <div class="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-[#1a1a1a]"></div>
      <div class="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-[#1a1a1a]"></div>
      <div class="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-[#1a1a1a]"></div>

      <div class="bg-white p-8 text-center relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a1a1a] via-[#6b6b6b] to-transparent opacity-20"></div>
        <p class="text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">This Month</p>
        <p class="text-4xl font-serif font-semibold text-[#1a1a1a]">{{ todaysMeals.length * 15 }}</p>
        <p class="text-[0.7rem] tracking-wide text-[#6b6b6b] mt-2">Meals Curated</p>
      </div>

      <div class="bg-white p-8 text-center relative overflow-hidden">
        <div class="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#1a1a1a] via-[#6b6b6b] to-transparent opacity-20"></div>
        <p class="text-[0.65rem] tracking-[0.2em] uppercase text-[#6b6b6b] mb-3">Investment</p>
        <p class="text-4xl font-serif font-semibold text-[#1a1a1a]">${{ monthlyCost.toFixed(0) }}</p>
        <p class="text-[0.7rem] tracking-wide text-[#6b6b6b] mt-2">Per Month</p>
      </div>
    </div>

    <!-- Generate Meal CTA -->
    <div class="opacity-0 animate-fadeIn" style="animation-delay: 0.3s">
      <RouterLink to="/generate">
        <button class="w-full bg-[#1a1a1a] text-white py-6 flex items-center justify-center gap-3 font-medium text-sm tracking-widest uppercase border border-black/20 transition-all hover:bg-black active:scale-99">
          <Sparkles class="h-4 w-4" />
          Discover New Cuisine
        </button>
      </RouterLink>
    </div>

    <!-- Today's Selections -->
    <div class="space-y-6">
      <div class="border-t border-black/10 pt-8">
        <h2 class="text-3xl font-serif font-semibold text-[#1a1a1a] text-center mb-2">
          Today's Selections
        </h2>
        <p class="text-[0.7rem] tracking-widest uppercase text-center text-[#6b6b6b]">
          {{ todaysMeals.length }} Courses
        </p>
      </div>

      <div v-if="todaysMeals.length > 0" class="grid gap-6">
        <MealCard
          v-for="(meal, index) in todaysMeals"
          :key="meal.id"
          :meal="meal"
          variant="compact"
          :delay="0.4 + index * 0.1"
        />
      </div>
      <div v-else class="bg-white border border-black/10 p-12 text-center opacity-0 animate-fadeIn" style="animation-delay: 0.4s">
        <p class="text-[#6b6b6b] font-light">No selections planned</p>
        <p class="text-xs tracking-wide text-[#6b6b6b] mt-2 uppercase">
          Begin your culinary journey above
        </p>
      </div>
    </div>

    <!-- Progress Section - Art Deco -->
    <div class="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a3a] text-white p-8 border-4 border-double border-[#6b6b6b] relative overflow-hidden opacity-0 translate-y-5 animate-fadeInUp" style="animation-delay: 0.6s">
      <!-- Art Deco sunburst pattern -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 opacity-5">
        <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white to-transparent rotate-[0deg] origin-top"></div>
        <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white to-transparent rotate-[15deg] origin-top"></div>
        <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white to-transparent rotate-[-15deg] origin-top"></div>
        <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white to-transparent rotate-[30deg] origin-top"></div>
        <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-white to-transparent rotate-[-30deg] origin-top"></div>
      </div>

      <h3 class="text-[0.7rem] tracking-[0.25em] uppercase mb-6 text-white text-center relative">
        <span class="inline-block px-4">Your Journey</span>
        <div class="absolute top-1/2 left-0 right-0 h-px bg-white/30 -z-10"></div>
      </h3>
      <div class="space-y-5">
        <div>
          <div class="flex justify-between text-xs tracking-wider uppercase mb-2">
            <span class="text-white">Weekly Goal</span>
            <span class="text-white/80">5 of 7 Days</span>
          </div>
          <div class="bg-white/10 h-1 overflow-hidden border-l-2 border-r-2 border-white/50">
            <div class="bg-gradient-to-r from-white via-[#d4d4d4] to-white h-full animate-progressBar" style="width: 71%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs tracking-wider uppercase mb-2">
            <span class="text-[#d4d4d4]">Refined Selections</span>
            <span class="text-white/80">22 of 30 Meals</span>
          </div>
          <div class="bg-white/10 h-1 overflow-hidden border-l-2 border-r-2 border-[#d4d4d4]/50">
            <div class="bg-gradient-to-r from-[#d4d4d4] via-white to-[#d4d4d4] h-full animate-progressBar" style="width: 73%; animation-delay: 0.1s"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Sparkles } from 'lucide-vue-next'
import StreakCounter from '../components/StreakCounter.vue'
import MealCard from '../components/MealCard.vue'
import { MEALS } from '../data/mockData'

const streak = ref(14)
const todaysMeals = ref([])
const monthlyCost = ref(0)

onMounted(() => {
  // Load today's meals (simulate with first 2 meals)
  const savedMeals = MEALS.slice(0, 2)
  todaysMeals.value = savedMeals

  // Calculate monthly cost (simulate)
  const avgDailyCost = savedMeals.reduce((sum, meal) => sum + meal.price, 0)
  monthlyCost.value = avgDailyCost * 30
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

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

@keyframes progressBar {
  from { width: 0; }
}

.animate-fadeIn {
  animation: fadeIn 0.4s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out forwards;
}

.animate-progressBar {
  animation: progressBar 1s ease-out forwards;
}
</style>