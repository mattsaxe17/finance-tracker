import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/cash'
  },
  {
    path: '/cash',
    name: 'Cash',
    component: () => import('../views/Cash.vue'),
    meta: {
      title: 'Cash | Finance Tracker'
    }
  },
  {
    path: '/credit',
    name: 'Credit',
    component: () => import('../views/Credit.vue'),
    meta: {
      title: 'Credit | Finance Tracker'
    }
  },
  {
    path: '/investments',
    name: 'Investments',
    component: () => import('../views/Investments.vue'),
    meta: {
      title: 'Investments | Finance Tracker'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
