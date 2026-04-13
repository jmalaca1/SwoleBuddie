<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Rewards & Badges</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="badge in badges" 
        :key="badge.id"
        :class="badge.unlocked ? 'bg-white' : 'bg-gray-100 opacity-60'"
        class="rounded-2xl p-4 shadow-md"
      >
        <div class="text-4xl mb-2">{{ badge.icon }}</div>
        <h3 class="font-semibold text-lg">{{ badge.name }}</h3>
        <p class="text-sm text-gray-600 mb-2">{{ badge.description }}</p>
        <div v-if="badge.progress !== undefined" class="mt-2">
          <div class="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              class="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all"
              :style="{ width: `${(badge.progress / badge.requirement) * 100}%` }"
            ></div>
          </div>
          <p class="text-xs text-gray-500 mt-1">
            Progress: {{ badge.progress }}/{{ badge.requirement }}
          </p>
        </div>
        <div v-else class="mt-2 text-green-600 text-sm">
          ✓ Unlocked
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { BADGES } from '../data/mData.js'

const badges = ref(BADGES)
</script>