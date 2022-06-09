<template>
	<div id="swiperPro" v-show="show">
		<div class="block">
			<el-carousel height="120px" direction="vertical" >
				<el-carousel-item v-for="(item,i) in bannerList">
					<img style="width: 100%;" :src='item.imgurl' />
				</el-carousel-item>
			</el-carousel>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'swiperPro',
		props: {
			show: Boolean,
			bannerList: Array
		},
		created: function() {
			// this.getBanner()
		},
		components: {

		},
		methods: {
			// getBanner() {
			// 	var $this = this;
			// 	$this.$axios.get('/?json=true').then(function(res) {
			// 		$this.bannerList = res.data.banner
			// 	})
			// }
		}
	}
</script>

<style>
</style>
