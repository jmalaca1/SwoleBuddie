import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import HomePage from './Pages/HomePage.vue'
import MealGenerator from './Pages/MealGenerator.vue'
import MealDetails from './Pages/MealDetails.vue'
import Rewards from './Pages/Rewards.vue'

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