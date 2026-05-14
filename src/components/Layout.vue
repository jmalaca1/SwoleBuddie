<template>
  <div class="min-h-screen bg-[#F7F3E8]">
    <main class="pb-24 pt-6 px-4 sm:px-6">
      <div class="max-w-4xl mx-auto">
        <RouterView />
      </div>
    </main>

    <!-- Dark Wood Library Navigation -->
    <nav class="fixed bottom-0 left-0 right-0 z-50 wood-nav-library">
      <div class="flex justify-around items-center h-16 max-w-4xl mx-auto px-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex flex-col items-center gap-1 px-2 py-1 transition-all duration-200 rounded-lg"
          :class="isActive(item.path) ? 'text-[#D4AF37] scale-105' : 'text-[#D4AF37]/50 hover:text-[#D4AF37]'"
        >
          <component :is="item.icon" class="h-5 w-5" />
          <span class="text-[0.6rem] tracking-wide font-medium">{{ item.label }}</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { Home, Sparkles, Trophy, User, ShoppingBag, Utensils } from 'lucide-vue-next'

const route = useRoute()

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/generate', icon: Sparkles, label: 'Generate' },
  { path: '/grocery-stores', icon: ShoppingBag, label: 'Groceries' },
  { path: '/restaurants', icon: Utensils, label: 'Eat Out' },
  { path: '/rewards', icon: Trophy, label: 'Rewards' },
  { path: '/profile', icon: User, label: 'Profile' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  if (path === '/restaurants') return route.path.startsWith('/restaurants')
  return route.path === path
}
</script>

<style scoped>
/* Library Dark Wood texture - Rich Mahogany */
.wood-nav-library {
  background: linear-gradient(
    145deg,
    #2C1810 0%,
    #1A0F0A 15%,
    #2C1810 30%,
    #1A0F0A 50%,
    #2C1810 70%,
    #1A0F0A 85%,
    #2C1810 100%
  );
  box-shadow: 
    0 -6px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(212, 175, 55, 0.15),
    inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

/* Wood grain lines */
.wood-nav-library::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 2px,
    rgba(0, 0, 0, 0.15) 4px,
    transparent 4px,
    transparent 6px,
    rgba(212, 175, 55, 0.05) 6px,
    rgba(212, 175, 55, 0.05) 7px
  );
  pointer-events: none;
}

/* Wood knot effect */
.wood-nav-library::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  width: 20px;
  height: 20px;
  background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* Second wood knot */
.wood-nav-library .knot {
  position: absolute;
  top: 25%;
  right: 15%;
  width: 15px;
  height: 15px;
  background: radial-gradient(circle, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 70%);
  border-radius: 50%;
  pointer-events: none;
}

/* Active state glow - Gold library light */
:deep(.router-link-active) {
  text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
  position: relative;
}

:deep(.router-link-active)::before {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #D4AF37, #F3E5AB, #D4AF37, transparent);
  border-radius: 2px;
}
</style>