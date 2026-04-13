import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import HomePage from './pages/HomePage.vue'
import MealGenerator from './pages/MealGenerator.vue'
import MealDetails from './pages/MealDetails.vue'
import Rewards from './pages/Rewards.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: '', component: HomePage },
      { path: 'generate', component: MealGenerator },
      { path: 'meal/:id', component: MealDetails },
      { path: 'rewards', component: Rewards }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router