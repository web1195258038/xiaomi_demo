import Vue from 'vue'
import Router from 'vue-router'
import Tabbar from '../components/Tabbar.vue'
import Person from '../page/Person/Person.vue'
import Home from '../page/Home/Home.vue'
import Classify from '../page/Classify/Classify.vue'
import Shopping from '../page/Shopping/Shopping.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Home
    },
    {
    	path: '/home',
      	name: 'Home',
      	component: Home
    },
    {
    	path: '/person',
      	name: 'Person',
      	component: Person
    },
     {
    	path: '/classify',
      	name: 'Classify',
      	component: Classify
    },
     {
    	path: '/shopping',
      	name: 'Shopping',
      	component: Shopping
    },
  ]
})