<template>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-rose-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <router-view />
    </div>

    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-around items-center h-20">
          <router-link 
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative flex flex-col items-center justify-center gap-1 py-2 px-6"
          >
            <div 
              v-if="route.path === item.path"
              class="absolute inset-0 bg-orange-100 rounded-2xl"
            ></div>
            <div class="relative z-10 flex flex-col items-center gap-1">
              <component 
                :is="item.icon" 
                :class="route.path === item.path ? 'text-orange-600' : 'text-gray-600'"
                class="h-6 w-6"
              />
              <span 
                :class="route.path === item.path ? 'text-orange-600 font-medium' : 'text-gray-600'"
                class="text-xs"
              >
                {{ item.label }}
              </span>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Home, Sparkles, Trophy } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/generate', icon: Sparkles, label: 'Generate' },
  { path: '/rewards', icon: Trophy, label: 'Rewards' }
]
</script>