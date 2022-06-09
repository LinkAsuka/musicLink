<template>
	<!-- -->
	<center id="audioGet" class="audioGet" v-show="src!=''" >
		<div class="audio-card">
			<div class="audioGet-name">{{name}}</div>
			<audio class="audiohidden" :src="src" autoplay="autoplay" controls="controls" ref="audio"></audio>
			
		
		</div>

	</center>
</template>

<script>
	export default {
		name: 'audioGet',
		data() {
			return {
				index: 0
			}
		},
		props: {
			src: String,
			name:String
		},
		methods: {
		}
	}
</script>

<style>
	.audioGet {
		position: fixed;
		bottom: 0;
	}

	.audiohidden {
		/* display: none; */
		width: 100%;
		height: 45px;
	}
	.audio-card{
		width: 100%;
		height: 80px;
		background-color: #ffcd32;
		width: 100vw;
		opacity: 2;
	}
	.audioGet-name{
		line-height: 30px;
		height: 30px;
		width: 100vw;
	}
</style>
