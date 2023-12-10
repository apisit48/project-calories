import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '@/js/firebase'


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
      path: '/food-detail:id',
      name: 'food-detail',
      component: () => import('../views/FoodDetailView.vue')
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
    {
      path: '/usersettings',
      name: 'usersettings',
      component: () => import('../views/UserSettingsView.vue')
    },
  ]

})
router.beforeEach( (to) => {
  console.log("Before each is executed")
  console.log("to :" + to.name)
  if(to.name === "workout" & !auth.currentUser) {
    console.log("login users only")
    router.push('/login')
  }
  if(to.name === "food" & !auth.currentUser) {
    console.log("login users only")
    router.push('/login')
  }
  if(to.name === "calorie" & !auth.currentUser) {
    console.log("login users only")
    router.push('/login')
  }
  if(to.name === "usersettings" & !auth.currentUser) {
    console.log("login users only")
    router.push('/login')
  }
  if(to.name === "guide" & !auth.currentUser) {
    console.log("login users only")
    router.push('/login')
  }
})
export default router
