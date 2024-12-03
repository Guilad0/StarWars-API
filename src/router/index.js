import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PersonajesView from '@/views/PersonajesView.vue'
import NavesView from '@/views/NavesView.vue'
import VehiculosView from '@/views/VehiculosView.vue'
import EspeciesView from '@/views/EspeciesView.vue'
import PlanetasView from '@/views/PlanetasView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/personajes',
      name: 'personajes',
      component: PersonajesView
    },
    {
      path: '/naves',
      name: 'naves',
      component: NavesView
    },
    {
      path: '/vehiculos',
      name: 'vehiculos',
      component: VehiculosView
    },
    {
      path: '/especies',
      name: 'especies',
      component: EspeciesView
    },
    {
      path: '/planetas',
      name: 'planetas',
      component: PlanetasView
    }
  ]
})

export default router
