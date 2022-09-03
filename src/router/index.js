import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detailed-description.vue'
import Blog from '@/views/Pages/Blog.vue'
import Projects from '@/views/Pages/Projects.vue'
import Resume from '../views/Pages/Resume/Resume.vue'
import workplaces from './workplaces'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/Resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Detailed-description',
    name: 'Detailed-description',
    component: Detail,
    children: workplaces,
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
