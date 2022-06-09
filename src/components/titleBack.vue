<template>
	<div id="titleBack" >
	
	<div class="titleBack-d"></div>
	<div  class="titleBack">
		<i @click="back()" class="el-icon-arrow-left" style="float: left;position: relative;top: 15px;left: 20px;"></i><span>{{title}}</span>
	</div>
	</div>
</template>

<script>
	export default {
		name: 'titleBack',
		data() {
			return {
				index: 0
			}
		},
		props: {
			title: String
		},
		methods: {
			back(){
				this.$router.go(-1)
				
			}
		}
	}
</script>

<style>
	.titleBack{
		width: 100%;
		height: 45px;
		background-color: #333333;
		position: fixed;
		top: 0;
		text-align: center;
		line-height: 45px;

	}
	.titleBack-d{
		width: 100%;
		height: 45px;
		
	}
</style>
