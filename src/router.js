import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import MealGenerator from './pages/MealGenerator.vue'
import MealDetails from './pages/MealDetails.vue'
import Rewards from './pages/Rewards.vue'
import Layout from './components/Layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'generate', component: MealGenerator },
      { path: 'meal/:mealId', component: MealDetails },
      { path: 'rewards', component: Rewards },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router