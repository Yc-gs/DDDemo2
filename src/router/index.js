import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home.vue'
import First from '../components/Home/First.vue'
import Second from '../components/Home/Second.vue'
import Third from '../components/Home/Third.vue'
import Forth from '../components/Home/Forth.vue'
Vue.use(Router)

export default new Router({
  routes:[
		{path:'/',component:Home,redirect:'/home/first'},
		{
			path:'/home',
			component:Home,
			redirect:'/home/first',
			children:[
				{path:'/home/first',component:First},
				{path:'/home/second',component:Second},
				{path:'/home/third',component:Third},
				{path:'/home/forth',component:Forth}
			]

		}
]
})
