import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
const routes = [
{path: '/multi-step/', component: Home},
{path: '/multi-step/about', component: About},
 ]

  const router = createRouter({
  
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      // always scroll to top
      return { top: 0 }
    },
  })
  
  export default router