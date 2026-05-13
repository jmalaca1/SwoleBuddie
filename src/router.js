import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import HomePage from './Pages/HomePage.vue'
import MealGenerator from './Pages/MealGenerator.vue'
import MealDetails from './Pages/MealDetails.vue'
import ProfilePage from './Pages/ProfilePage.vue'

import Rewards from './Pages/Rewards.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'generate',
        name: 'Generate',
        component: MealGenerator
      },
      {
        path: 'meal/:id',
        name: 'MealDetails',
        component: MealDetails
      },
      {
        path: 'rewards',
        name: 'Rewards',
        component: Rewards
      },
      {
        path: 'profile',
        name: 'Profile',
        component: ProfilePage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router