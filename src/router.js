import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/user', name: 'User', component: () => import('@/views/UserPage.vue'), meta: { requiresAuth: true }  },
  { path: '/teamSelect', name: 'Team Select', component: () => import('@/views/TeamSelectPage.vue') },
  { path: '/teams', name: 'Teams', component: () => import('@/views/TeamsPage.vue') },
  { path: '/pokemonStats', name: 'Pokemon Stats', component: () => import('@/views/PokemonStatsPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'Login', query: { redirect: to.fullPath} }
  }
})

export default router
