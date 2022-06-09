<template>
	<div id="titleGet" class="hade-title" :style="info.color"><i class="el-icon-chat-line-square"></i><span >{{info.word}}</span></div>
</template>

<script>       	
	export default {
		name: 'titleGet',
		data() {
			return {
				info:{}
			}
		},
		props: {
			titleList: Array
		},
		created: function() {
			this.titleGet();
				
		},
		methods: {
			titleGet() {
				var num = Math.floor(Math.random() * 10);
				this.info = this.titleList[num]
		
			}
		}
	}
</script>

<style>
	.hade-title {
		height: 25px;
		line-height: 25px;
		text-align: center;
		font-size: 12px;
		margin-top: 5px;
	}
	.hade-title span{
		padding-left: 5px;
	}
</style>
