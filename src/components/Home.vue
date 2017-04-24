<template>
  <div class="home">
    <mt-swipe class="home-swipe" :auto="2000">
      <mt-swipe-item v-for="(item, index) in slideArr" :key="item+index">
				<img :src="item" />
	 		</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'home',
	  slideArr: ['./static/image/0.jpg', './static/image/1.jpg']
    }
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
		margin-bottom: 20px;
		.mint-swipe-item {
			line-height: 160px;
			height: 160px;
			img {
				width: 100%;
			}
		}
	}
}

</style>