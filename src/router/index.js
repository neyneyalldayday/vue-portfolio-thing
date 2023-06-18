import {createRouter, createWebHistory } from "vue-router"
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'

  const routes = [
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
    },
  ];


  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });



  export default router;