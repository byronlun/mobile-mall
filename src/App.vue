<template>
    <div id="app">
        <mt-header title="微商城"></mt-header>
		<mt-tabbar v-model="selected">
			<mt-tab-item id="home">
				<img slot="icon" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">
				首页
			</mt-tab-item>
			<mt-tab-item id="shoppingcart">
				<img slot="icon" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">
				购物车
			</mt-tab-item>
			<mt-tab-item id="mine">
				<img slot="icon" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==">
				我的
			</mt-tab-item>
		</mt-tabbar>
        <router-view></router-view>
    </div>
</template>

<script>
import router from 'vue-router'
export default {
    name: 'app',
	data() {
		return {
			selected: 'tab-home'
		}
	},
	watch: {
		selected: function(val) {
			console.log(val)
			this.$router.replace(val)
		}
	},
	methods: {
		handleClose() {
			console.log('click')
		}
	}
}
</script>
<style>
    html{
        overflow: hidden;
    }
    html,body{
        height: 100%;
    }
</style>

