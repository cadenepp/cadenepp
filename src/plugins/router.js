import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Skills from '../views/Skills.vue'
import Personal from '../views/Personal.vue'
import Projects from '../views/Projects.vue'
import Resume from '../views/Resume.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/projects', name: "projects", component: Projects },
    { path: '/personal', name: "personal", component: Personal },
    { path: '/skills', name: "skills", component: Skills },
    { path: '/contact', name: "contact", component: Contact },
    { path: '/resume', name: "resume", component: Resume },
    { path: '/:pathMatch(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router