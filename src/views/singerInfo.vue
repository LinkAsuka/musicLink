
<template>
	<div id="singerInfo">
		<titleBack :title="titleback"></titleBack>
		<div v-for="(item,i) in SingerListinfo" class="singerCard" @click="toSingerinfo(item.singerid)">
			<img :src="item.imgurl | size" />
			<div class="classname">{{item.singername}}</div>
		</div>
		
	</div>
</template>

<script>
	import axios from 'axios'
	import titleBack from '../components/titleBack.vue'
	export default {
		name: "singerInfo",
		data() {
			return {
				SingerListinfo: [],
				titleback:'歌手列表'
			}
		},
		created(){
			this.SingerGetinfo();
		},
		components: {
			titleBack
		},
		filters: {
			size: function(value) {
				var value = value.replace("{size}", "240")
				return value
			},
		},
		methods: {
			SingerGetinfo() {
				// /singer/info/
				console.log($this.$route.query.toSingerInfo)
				var $this =this;
				$this.$axios.get('/singer/info/'+$this.$route.query.toSingerInfo+'?json=true').then(function(res) {
					$this.SingerListinfo = res.data.singers.list.info;
				})
			},
		}
	}
</script>

<style>
	
	.singerCard {
		margin: 10px 10px;
		display: flex;
		border-bottom: 1px solid #eeeeee29;
		padding-bottom: 5px;
	}
	
	.singerCard img {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		padding-left: 30px;
	
	}
	
	.classname {
		flex: 1;
		line-height: 60px;
		padding-left: 40px;
	}
</style>
