<template>
  <div class="space-y-12 py-12">
    <!-- Masthead - Art Deco -->
    <div class="animate-fadeIn relative -translate-y-5 space-y-4 pb-10 text-center opacity-0">
      <div class="space-y-2">
        <p class="text-[0.7rem] font-light tracking-[0.3em] text-[#6b6b6b] uppercase">
          Culinary Excellence
        </p>
        <h1
          class="relative font-serif text-5xl font-bold tracking-tight text-[#1a1a1a] md:text-6xl"
        >
          Your Table
          <!-- Art Deco corner ornaments -->
          <span class="absolute -top-4 -left-8 hidden text-2xl text-[#1a1a1a] md:block">◆</span>
          <span class="absolute -top-4 -right-8 hidden text-2xl text-[#1a1a1a] md:block">◆</span>
        </h1>
        <p class="mx-auto mt-2 max-w-md text-sm font-light tracking-wide text-[#6b6b6b]">
          Curated meal planning for the discerning palate
        </p>
      </div>
      <!-- Art Deco geometric divider -->
      <div class="flex items-center justify-center gap-2 pt-4">
        <div class="h-px w-12 bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent"></div>
        <div class="h-2 w-2 rotate-45 bg-[#1a1a1a]"></div>
        <div class="h-px w-16 bg-[#1a1a1a]"></div>
        <div class="h-2 w-2 rotate-45 bg-[#1a1a1a]"></div>
        <div class="h-px w-12 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a] to-transparent"></div>
      </div>
    </div>

    <!-- Streak Counter -->
    <div
      class="animate-fadeIn flex justify-center opacity-0"
      style="animation-delay: 0.1s"
    >
      <StreakCounter :streak="streak" />
    </div>

    <!-- Stats - Art Deco Grid -->
    <div
      class="animate-fadeInUp relative grid translate-y-5 grid-cols-2 gap-px bg-black/10 opacity-0"
      style="animation-delay: 0.2s"
    >
      <!-- Art Deco corner accents -->
      <div class="absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-[#1a1a1a]"></div>
      <div class="absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-[#1a1a1a]"></div>
      <div class="absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#1a1a1a]"></div>
      <div class="absolute -right-2 -bottom-2 h-4 w-4 border-r-2 border-b-2 border-[#1a1a1a]"></div>

      <div class="relative overflow-hidden bg-white p-8 text-center">
        <div
          class="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#1a1a1a] via-[#6b6b6b] to-transparent opacity-20"
        ></div>
        <p class="mb-3 text-[0.65rem] tracking-[0.2em] text-[#6b6b6b] uppercase">This Month</p>
        <p class="font-serif text-4xl font-semibold text-[#1a1a1a]">
          {{ todaysMeals.length * 15 }}
        </p>
        <p class="mt-2 text-[0.7rem] tracking-wide text-[#6b6b6b]">Meals Curated</p>
      </div>

      <div class="relative overflow-hidden bg-white p-8 text-center">
        <div
          class="absolute top-0 right-0 h-1 w-full bg-gradient-to-l from-[#1a1a1a] via-[#6b6b6b] to-transparent opacity-20"
        ></div>
        <p class="mb-3 text-[0.65rem] tracking-[0.2em] text-[#6b6b6b] uppercase">Investment</p>
        <p class="font-serif text-4xl font-semibold text-[#1a1a1a]">
          ${{ monthlyCost.toFixed(0) }}
        </p>
        <p class="mt-2 text-[0.7rem] tracking-wide text-[#6b6b6b]">Per Month</p>
      </div>
    </div>

    <!-- Generate Meal CTA -->
    <div
      class="animate-fadeIn opacity-0"
      style="animation-delay: 0.3s"
    >
      <RouterLink to="/generate">
        <button
          class="flex w-full items-center justify-center gap-3 border border-black/20 bg-[#1a1a1a] py-6 text-sm font-medium tracking-widest text-white uppercase transition-all hover:bg-black active:scale-99"
        >
          <Sparkles class="h-4 w-4" />
          Discover New Cuisine
        </button>
      </RouterLink>
    </div>

    <!-- Today's Selections -->
    <div class="space-y-6">
      <div class="border-t border-black/10 pt-8">
        <h2 class="mb-2 text-center font-serif text-3xl font-semibold text-[#1a1a1a]">
          Today's Selections
        </h2>
        <p class="text-center text-[0.7rem] tracking-widest text-[#6b6b6b] uppercase">
          {{ todaysMeals.length }} Courses
        </p>
      </div>

      <div
        v-if="todaysMeals.length > 0"
        class="grid gap-6"
      >
        <MealCard
          v-for="(meal, index) in todaysMeals"
          :key="meal.id"
          :meal="meal"
          variant="compact"
          :delay="0.4 + index * 0.1"
        />
      </div>
      <div
        v-else
        class="animate-fadeIn border border-black/10 bg-white p-12 text-center opacity-0"
        style="animation-delay: 0.4s"
      >
        <p class="font-light text-[#6b6b6b]">No selections planned</p>
        <p class="mt-2 text-xs tracking-wide text-[#6b6b6b] uppercase">
          Begin your culinary journey above
        </p>
      </div>
    </div>

    <!-- Progress Section - Art Deco -->
    <div
      class="animate-fadeInUp relative translate-y-5 overflow-hidden border-4 border-double border-[#6b6b6b] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a3a] p-8 text-white opacity-0"
      style="animation-delay: 0.6s"
    >
      <!-- Art Deco sunburst pattern -->
      <div class="absolute top-0 left-1/2 h-16 w-32 -translate-x-1/2 opacity-5">
        <div
          class="absolute top-0 left-1/2 h-full w-px origin-top rotate-[0deg] bg-gradient-to-b from-white to-transparent"
        ></div>
        <div
          class="absolute top-0 left-1/2 h-full w-px origin-top rotate-[15deg] bg-gradient-to-b from-white to-transparent"
        ></div>
        <div
          class="absolute top-0 left-1/2 h-full w-px origin-top rotate-[-15deg] bg-gradient-to-b from-white to-transparent"
        ></div>
        <div
          class="absolute top-0 left-1/2 h-full w-px origin-top rotate-[30deg] bg-gradient-to-b from-white to-transparent"
        ></div>
        <div
          class="absolute top-0 left-1/2 h-full w-px origin-top rotate-[-30deg] bg-gradient-to-b from-white to-transparent"
        ></div>
      </div>

      <h3 class="relative mb-6 text-center text-[0.7rem] tracking-[0.25em] text-white uppercase">
        <span class="inline-block px-4">Your Journey</span>
        <div class="absolute top-1/2 right-0 left-0 -z-10 h-px bg-white/30"></div>
      </h3>
      <div class="space-y-5">
        <div>
          <div class="mb-2 flex justify-between text-xs tracking-wider uppercase">
            <span class="text-white">Weekly Goal</span>
            <span class="text-white/80">5 of 7 Days</span>
          </div>
          <div class="h-1 overflow-hidden border-r-2 border-l-2 border-white/50 bg-white/10">
            <div
              class="animate-progressBar h-full bg-gradient-to-r from-white via-[#d4d4d4] to-white"
              style="width: 71%"
            ></div>
          </div>
        </div>
        <div>
          <div class="mb-2 flex justify-between text-xs tracking-wider uppercase">
            <span class="text-[#d4d4d4]">Refined Selections</span>
            <span class="text-white/80">22 of 30 Meals</span>
          </div>
          <div class="h-1 overflow-hidden border-r-2 border-l-2 border-[#d4d4d4]/50 bg-white/10">
            <div
              class="animate-progressBar h-full bg-gradient-to-r from-[#d4d4d4] via-white to-[#d4d4d4]"
              style="width: 73%; animation-delay: 0.1s"
            ></div>
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
import { MEALS } from '../data/mData'

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
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  from {
    width: 0;
  }
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
