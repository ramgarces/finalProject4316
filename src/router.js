import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/user', name: 'User', component: () => import('@/views/UserPage.vue'), meta: { requiresAuth: true }  },
  { path: '/teamSelect', name: 'Team Select', component: () => import('@/views/TeamSelectPage.vue') },
  { path: '/pokedex', name: 'Pokedex', component: () => import('@/views/PokedexPage.vue') },
  { path: '/pokemon/:name', name: 'Pokemon', component: () => import('@/views/PokemonStats.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router
