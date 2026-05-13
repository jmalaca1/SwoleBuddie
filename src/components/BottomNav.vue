<template>
  <div class="bottom-nav">
    <div 
      v-for="item in navItems" 
      :key="item.path"
      class="nav-item"
      :class="{ active: currentRoute === item.path }"
      @click="navigate(item.path)"
    >
      <span class="nav-icon">{{ item.icon }}</span>
      <span class="nav-label">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => route.path)

const navItems = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/generate', label: 'Generate', icon: '⚡' },
  { path: '/rewards', label: 'Rewards', icon: '🎁' },
  { path: '/profile', label: 'Profile', icon: '👤' }
]

const navigate = (path) => {
  router.push(path)
}
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0 20px 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  z-index: 1000;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 10px;
  transition: all 0.3s;
}

.nav-icon {
  font-size: 1.5rem;
}

.nav-label {
  font-size: 0.75rem;
  color: #666;
}

.nav-item.active {
  background: #f0f0f0;
}

.nav-item.active .nav-label {
  color: #4CAF50;
  font-weight: bold;
}

.nav-item:hover {
  background: #f5f5f5;
}
</style>