<template>
  <div class="home">
    <mt-swipe class="home-swipe" :auto="2000">
      <mt-swipe-item v-for="(item, index) in slideArr" :key="item+index">
				<img :src="item" />
	 		</mt-swipe-item>
    </mt-swipe>
		<div class="home-content">
			<div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div>
			<div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div><div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div><div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div><div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div><div  class="home-content-item">
				<div>营养早餐</div>
				<img />
			</div>
		</div>
		<div  class="home-footer">更多</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
	  	slideArr: []
    }
  },
	beforeCreate() {
		// 这里使用www.easy-mock.com这个网站提供的模拟数据接口哈哈
		this.$http.get('https://www.easy-mock.com/mock/59009906875d7232a38b23ca/example/home/getSlidePhoto').then(response => {
			console.log(response)
			this.slideArr = response.body
		})
	},
  methods: {
    handleChange() {
      console.log(1)
    }
  }
}
</script>
<style  lang="scss">
.home {
	.home-swipe {
		height: 160px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		// margin-bottom: 20px;
		.mint-swipe-item {
			line-height: 160px;
			height: 160px;
			img {
				width: 100%;
			}
		}
	}
	.home-content {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		.home-content-item {
			height: 80px;
			width: 50%;
		}
	}
	.home-footer {
		width: 100%;
		height: 80px;
		font-size: larger;
		text-align: center;
	}
}

</style>