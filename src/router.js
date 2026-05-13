import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Home from '../pages/Home.vue'
import MealGenerator from '../pages/MealGenerator.vue'
import MealDetails from '../pages/MealDetails.vue'
import Rewards from '../pages/Rewards.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'Home', component: Home },
        { path: 'generate', name: 'Generate', component: MealGenerator },
        { path: 'meal/:mealId', name: 'MealDetails', component: MealDetails },
        { path: 'rewards', name: 'Rewards', component: Rewards }
      ]
    }
  ]
})

export default router