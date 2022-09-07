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
    meta:{title: `${ process.env.VUE_APP_PORTFOLIO_NAME}`},
    component: Home
  },
  {
    path: '/Blog',
    name: 'Blog',
    meta:{title:"Blog - Ojochogwu Dickson"},
    component: Blog
  },
  {
    path: '/Resume',
    name: 'Resume',
    meta:{title:"My Resume - Ojochogwu Dickson "},
    component: Resume
  },
  {
    path: '/Work',
    name: 'Work',
    meta:{title:"Work - Ojochogwu Dickson"},
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
router.beforeEach((to, from, next)=>{
  document.title = `${to.meta.title}`
  next()
})
export default router
