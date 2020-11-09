import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/particulars',
        name: 'particulars',
        component: () => import('../views/book/particulars.vue')
      }, // 二级书本详情路由
      {
        path: '/booktown',
        name: 'BookTown',
        component: () => import('../components/booktown/booktown.vue')
      } // 书城路由
    ]
  }
  // ,
  // {
  //   path: '/bookClassify',
  //   name: 'BookClassify',
  //   component: () => import('../components/booktown/Book-classify.vue')
  // }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
