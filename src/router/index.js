import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Hotel from '@/views/Hotel'
import AllList from '@/views/AllList'
import Car from '@/views/Car'
import FindList from '@/views/FindList'
import ListDelet from '@/views/ListDelet'
import Line from '@/views/Line'
import Ticket from '@/views/Ticket'
import Group from '@/views/Group'
import Goods from '@/views/Goods'
import ticketSet from '@/views/ticketSet'
import Register from '@/components/Register'
import Main from '@/components/Main'
import hotelSet from '@/views/hotelSet'
import lineSet from '@/views/lineSet'
import groupSet from '@/views/groupSet'
import goodSet from '@/views/goodSet'
import carSet from '@/views/carSet'
import Restaurant from '@/views/Restaurant'
import restaurantSet from '@/views/restaurantSet'

Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'/register',
      component: Register,
    },
    {
      path:'/main',
      component: Main,
      children:[
        {
          path:'/home',
          component: Home,
        },
        {
          path:'/',
          redirect:'/home',
        },
        {
          path:'/ticket',
          component: Ticket,
        },
        {
          path:'/hotel',
          component: Hotel,
        },
        {
          path:'/alllist',
          component: AllList,
        },
        {
          path:'/car',
          component: Car,
        },
        {
          path:'/findlist',
          component: FindList,
        },
        {
          path:'/listdelet',
          component: ListDelet,
        },
        {
          path:'/line',
          component: Line,
        },
        {
          path:'/group',
          component: Group,
        },
        {
          path:'/goods',
          component: Goods,
        },
        {
          path:'/restaurant',
          component:Restaurant
        },
        {
          path:'/restaurantset',
          name:'restaurantset',
          component:restaurantSet
        },
        {
          path:'/ticketset',
          name:'ticketset',
          component: ticketSet,
        },
        {
          path:'/hotelset',
          name:'hotelset',
          component: hotelSet,
        },
        {
          path:'/lineset',
          name:'lineset',
          component: lineSet,
        },
        {
          path:'/groupset',
          component: groupSet,
        },
        {
          path:'/goodset',
          component: goodSet,
        },
        {
          path:'/carset',
          name:'carset',
          component: carSet,
        },
      ]
    },{
      path:'/',
      redirect:'/register',
    }

  ]
})
