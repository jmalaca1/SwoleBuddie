import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import HomePage from './Pages/HomePage.vue'
import MealGenerator from './Pages/MealGenerator.vue'
import MealDetails from './Pages/MealDetails.vue'
import ProfilePage from './Pages/ProfilePage.vue'
import Rewards from './Pages/Rewards.vue'
import GroceryStores from './Pages/GroceryStores.vue'
import Restaurants from './Pages/Restaurants.vue'

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
      },
      {
        path: 'grocery-stores',
        name: 'GroceryStores',
        component: GroceryStores
      },
      {
        path: 'restaurants/:mealId?',
        name: 'Restaurants',
        component: Restaurants
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router