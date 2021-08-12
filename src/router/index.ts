import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Workout from '../views/Workout.vue'
import EditExercise from '../views/EditExercise.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/workout',
    name: 'Workout',
    component: Workout
  },
  {
  path: '/edit-exercise',
  name: 'EditExercise',
  component: EditExercise
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
