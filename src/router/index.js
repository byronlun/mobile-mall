import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ShoppingCart from '@/components/ShoppingCart'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
		path: '/shoppingcart',
		name: 'ShoppingCart',
		component: ShoppingCart
    }, {
		path: '/mine',
		name: 'Mine',
		component: Mine
	}, {
		path: '*',
		redirect: '/'
	}]
})
