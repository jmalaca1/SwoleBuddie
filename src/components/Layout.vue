<template>
  <div class="min-h-screen bg-[#fafaf8]">
    <div class="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pb-28">
      <RouterView />
    </div>

    <!-- Bottom Navigation - Art Deco Style -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-double border-black/20 z-50 shadow-xl shadow-black/10 relative">
      <!-- Art Deco top accent -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>

      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-around items-center h-20">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="relative flex flex-col items-center justify-center gap-1.5 py-2 px-6 transition-all group"
          >
            <Transition name="fade">
              <div
                v-if="isActive(item.path)"
                class="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent"
              ></div>
            </Transition>
            <!-- Art Deco accent lines -->
            <div
              v-if="isActive(item.path)"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#1a1a1a]"
            ></div>
            
            <div class="relative z-10 flex flex-col items-center gap-1.5">
              <component
                :is="item.icon"
                :class="[
                  'h-5 w-5 transition-colors',
                  isActive(item.path) ? 'text-[#1a1a1a]' : 'text-[#6b6b6b]'
                ]"
              />
              <span
                :class="[
                  'text-[0.65rem] tracking-widest uppercase transition-colors',
                  isActive(item.path) ? 'text-[#1a1a1a] font-medium' : 'text-[#6b6b6b] font-normal'
                ]"
              >
                {{ item.label }}
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Home, Sparkles, Trophy } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/generate', icon: Sparkles, label: 'Generate' },
  { path: '/rewards', icon: Trophy, label: 'Rewards' }
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>