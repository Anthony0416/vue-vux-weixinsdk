import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import advice from '@/components/my_advice'
import adviceDetail from '@/components/advice_detail'
import userIfo from '@/components/user_ifo'
import online from '@/components/online'
import birth from '@/components/birth'
import list from '@/components/list'
import t from '@/components/textarea'
import upload from '@/components/upload'
import finish from '@/components/finish'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '皮肤专家在线咨询'
      },
      component: Home
    },
    {
      path: '/advice_detail/:id',
      name: 'adviceDetail',
      meta: {
        title: '咨询进度'
      },
      component: adviceDetail
    },
    {
      path: '/advice',
      name: 'advice',
      meta: {
        title: '咨询结果'
      },
      component: advice
    },
    {
      path: '/user_ifo/:id',
      name: 'userIfo',
      meta: {
        title: '咨询进度'
      },
      component: userIfo
    },
    {
      path: '/online',
      name: 'online',
      meta: {
        title: '信息采集'
      },
      component: online
    },
    {
      path: '/birth',
      name: 'birth',
      meta: {
        title: '信息采集'
      },
      component: birth
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/t',
      name: 't',
      meta: {
        title: '信息采集'
      },
      component: t
    },
    {
      path: '/upload',
      name: 'upload',
      meta: {
        title: '信息采集'
      },
      component: upload
    },
    {
      path: '/finish',
      name: 'finish',
      meta: {
        title: '信息采集'
      },
      component: finish
    }
  ]
})
