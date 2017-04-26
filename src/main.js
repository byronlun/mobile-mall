import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
