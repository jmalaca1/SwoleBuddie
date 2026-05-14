<template>
  <div>
    <!-- Header -->
    <div class="mb-8 border-b border-[#D4AF37]/30 pb-6">
      <h1 class="text-4xl font-light tracking-wide mb-2 text-[#2C1810] font-serif">Rewards</h1>
      <p class="text-[#5C3A1E] text-sm italic">Your earned treasures</p>
    </div>

    <!-- Points Card - Vintage Ledger -->
    <div class="bg-white rounded-sm p-6 shadow-md border border-[#EBE3D5] text-center mb-6">
      <p class="text-xs text-[#5C3A1E] uppercase tracking-wider">Total Points</p>
      <p class="text-5xl font-light text-[#2C1810] my-2 font-serif">1,250</p>
      <div class="w-full bg-[#EBE3D5] h-1 mt-3">
        <div class="bg-[#D4AF37] h-1" style="width: 45%"></div>
      </div>
      <p class="text-xs text-[#5C3A1E] mt-2 italic">455 points to next level</p>
    </div>

    <!-- Rewards List - Antique Collection -->
    <div class="space-y-3">
      <div 
        v-for="reward in rewards" 
        :key="reward.id"
        class="bg-white rounded-sm p-4 shadow-md border border-[#EBE3D5] flex items-center justify-between"
        :class="{ 'opacity-60': !reward.unlocked }"
      >
        <div class="flex items-center gap-3">
          <span class="text-2xl">{{ reward.icon }}</span>
          <div>
            <h3 class="font-medium text-sm text-[#2C1810]">{{ reward.title }}</h3>
            <p class="text-xs text-[#5C3A1E] italic">{{ reward.description }}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="text-xs font-medium text-[#D4AF37]">{{ reward.points }} pts</span>
          <button 
            v-if="reward.unlocked"
            class="ml-3 text-xs px-3 py-1 bg-[#2C1810] text-[#D4AF37] rounded-sm hover:bg-[#3D2B1F] transition-colors"
          >
            Claim
          </button>
          <span v-else class="ml-3 text-xs text-[#5C3A1E]">Locked</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rewards = ref([
  { id: 1, title: '7 Day Streak', description: 'Unlocked recipe pack', points: 500, icon: '🏆', unlocked: true },
  { id: 2, title: '10 Meals Generated', description: '50 bonus points', points: 250, icon: '⭐', unlocked: true },
  { id: 3, title: 'Elite Chef', description: 'Exclusive recipes', points: 1000, icon: '🎖️', unlocked: false },
  { id: 4, title: 'Master Collection', description: 'All recipes unlocked', points: 2500, icon: '👑', unlocked: false },
])
</script>