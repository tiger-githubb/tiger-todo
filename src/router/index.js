import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QAForm from '../components/QAForm';
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'QAForm',
    component: QAForm
  },
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form',
    name: 'QAForm',
    component: QAForm
  },
  {
    path: '/thanks',
    name: 'success',
    component: SubmissionSuccess
  },

  {
    path: '/404',
    name: 'fail',
    component: SubmissionFail
  }
]

const router = new VueRouter({
  routes
})

export default router


