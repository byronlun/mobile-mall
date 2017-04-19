<template>
    <div id="app">
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
			<router-link to="/" slot="left">
				<mt-button icon="back" @click="handleClose">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
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

