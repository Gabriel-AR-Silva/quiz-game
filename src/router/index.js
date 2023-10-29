import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const DEFAULT_NAME = 'QuizGame';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: DEFAULT_NAME }, 
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import(/* webpackChunkName: "quiz" */ '../views/QuizView.vue'),
    meta: { title: 'Quiz' + DEFAULT_NAME },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
