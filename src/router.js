import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/components/HomeView'
import AboutView from '@/components/AboutView'
import ProjectView from '@/components/ProjectView'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView
    },
    {
      path: '/projects',
      name: 'ProjectView',
      component: ProjectView
    }
  ]
})