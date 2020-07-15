import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogPage from '../views/BlogPage.vue'
import HelloPage from '../views/HelloPage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: "Blog",
    component: Blog,
    children: [
      {
        path: ':id',
        name: "BlogPage",
        component: BlogPage,
        props: true
      },
    ]
  },
  {
    path: '/hello/:name1/:name2',
    name: "HelloPage",
    component: HelloPage,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
