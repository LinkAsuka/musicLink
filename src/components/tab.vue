<template>
	<div id="tab">
		<div :class="i == index? 'tabCont acion': 'tabCont'" v-for="(item,i) in title" @click="clickTab(i)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'tab',
		data() {
			return {
				index: 0
			}
		},
		props: {
			title: Array
		},
		methods: {
			clickTab(index) {
				this.index = index;
				this.$emit('showTab', index);
			}
		}
	}
</script>

<style>
	#tab {
		display: flex;
	}

	#tab .tabCont {
		flex: 1;
		text-align: center;
		height: 35px;
		line-height: 35px;
		position: relative;
		margin-bottom: 10px;
		margin-top: 5px;

	}
	#tab .acion span{
		color: #ffcd32;
	}
	.acion::after {
		content: '';
		width: 30%;
		height: 2px;
		background: #ffcd32;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}
</style>
