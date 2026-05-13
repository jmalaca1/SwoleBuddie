import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import MealGenerator from './pages/MealGenerator.vue'
import MealDetails from './pages/MealDetails.vue'
import Rewards from './pages/Rewards.vue'
import Layout from './components/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', name: 'home', component: HomePage },
      { path: 'generate', name: 'generate', component: MealGenerator },
      { path: 'meal/:mealId', name: 'mealDetails', component: MealDetails },
      { path: 'rewards', name: 'rewards', component: Rewards },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router