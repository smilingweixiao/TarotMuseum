import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FortuneTellingView from '../views/FortuneTellingView.vue'
import MinorArcanaView from '../views/MinorArcanaView.vue'
import MajorArcanaView from '../views/MajorArcanaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: HomeView,
    },
    {
      path: '/fortune-telling',
      name: 'fortune-telling',
      component: FortuneTellingView,
      // component: () => import('../views/FortuneTellingView.vue'),
    },
    {
      path: '/major-arcana',
      name: 'major-arcana',
      component: MajorArcanaView,
    },

    {
      path: '/minor-arcana',
      name: 'minor-arcana',
      component: MinorArcanaView,
    },
  ],
})

export default router
