import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/calorie',
      name: 'calorie',
      component: () => import('../views/CalorieCalculatorView.vue')
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/GuideView.vue')
    },
    {
      path: '/food',
      name: 'food',
      component: () => import('../views/FoodView.vue')
    },
    {
      path: '/workout',
      name: 'workout',
      component: () => import('../views/WorkoutView.vue')
    },
    {
      path: '/workout-detail:id',
      name: 'workout-detail',
      component: () => import('../views/WorkoutDetailsView.vue')
    },
    {
      path: '/strength-detail/:id', 
      name: 'strength-detail',
      component: () => import('../views/StrengthDetailView.vue')
    },
  ]

})

export default router
