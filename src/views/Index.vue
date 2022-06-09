<template>
	<div class="main-index">
		<div style="width: 100vw;
height: 80px;"></div>
		<div class="hade">
			<titleGet :key="timer" :titleList="titleGetList"></titleGet>
			<tab :title="titleList" @showTab="showFather"></tab>
		</div>
		<div id="TabNo0" v-show="index == 0" :style="src==''?'':'padding-bottom: 80px;'">
			<swiperPro :show="true" :bannerList="bannerList"></swiperPro>
			<div class="title">热门歌单推荐</div>
			<el-drawer title="演唱者信息" :visible.sync="drawer" :direction="direction" size="100%">
				<h3 style="color: #333333;text-align: center;">{{PlayDetails.fileName}}</h3>
				演唱者
				<div style="overflow-y: auto;height: 75vh;">
					<div v-for="(Deitem,i) in PlayDetails.authors" class="authors">
						<div v-show="PlayDetails.authors.length == 1">
							<div class="authors-img">
								<img :src="Deitem.avatar | size" />
							</div>
							<div class="authors-name">{{Deitem.author_name}}</div>
							<div class="detail">
								<div class="detail-card"><i class="el-icon-location-information"></i>
									{{Deitem.language}}
								</div>
								<div class="detail-card"><i class="el-icon-s-flag"></i> {{Deitem.country}}</div>
							</div>
							<div class="detail-card" v-show="Deitem.birthday!=''"><i class="el-icon-present"></i>
								{{Deitem.birthday}}
							</div>
						</div>
						<div v-show="PlayDetails.authors.length > 1" class="authors-img-2-1">
							<img class="authors-img-2" :src="Deitem.avatar | size" />
							<div class="img2-card">
								<i class="el-icon-location-information"></i> {{Deitem.language}}
								<div v-show="Deitem.birthday!=''"><i class="el-icon-present"></i>
									{{Deitem.birthday}}
								</div>
							</div>

						</div>
					</div>
				</div>

			</el-drawer>
			<div v-for="(item,i) in playList" class="play-list">
				<div class="play-right" @click="getPlayDetails(item.hash)">{{item.filename}}</div>
				<i class="el-icon-video-play play-icon" @click="clickPlay(item.hash)"></i>
			</div>
		</div>
		<div id="TabNo1" v-show="index == 1">
			<div v-for="(item,i) in singerList" class="singerCard" @click="toSinger(item.classid)">
				<img :src="item.imgurl" />
				<div class="classname">{{item.classname}}</div>
			</div>
		</div>
		<div id="TabNo1" v-show="index == 2">
			<el-input placeholder="请输入内容" v-model="input" debounce="800">
				<i slot="prefix" class="el-input__icon el-icon-search"></i>
			</el-input>

			<input @input="getChange($event)" type="text" placeholder="ddd" />
		</div>
		<audioGet :src="src" :name="yyname"></audioGet>
	</div>
</template>

<script>
	import tab from '../components/tab.vue'
	import swiperPro from '../components/swiperPro.vue'
	import titleGet from '../components/titleGet.vue'
	import audioGet from '../components/audioGet.vue'


	function debounce(func) {
		let timeout;
		return function (event) {
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				func.call(this, event)
			}, 1000)
		}
	}
	export default {
		name: "index",
		components: {
			tab,
			swiperPro,
			audioGet,
			titleGet
		},
		filters: {
			size: function (value) {
				var value = value.replace("{size}", "240")
				return value
			},
		},
		data() {
			return {
				drawer: false,
				direction: 'ttb',
				timer: '',
				index: 0,
				playList: [],
				bannerList: [],
				PlayDetails: [],
				singerList: [],
				hostList: [],
				src: '',
				yyname: '',
				input: '',
				titleList: ['首页', '歌手', '搜索'],
				titleGetList: [{
					word: '人类的赞歌是勇气的赞歌',
					color: 'color:#5babff'
				}, {
					word: '你的下一句话是',
					color: 'color:#ff2bfc'
				}, {
					word: '你给路达呦',
					color: 'color:#ff2bfc'
				}, {
					word: 'やれやれ',
					color: 'color:#00a5e6	'
				}, {
					word: '接招吧dio，半径20米的绿宝石水花！',
					color: 'color:#03bb53 '
				}, {
					word: '欧拉欧拉欧拉欧拉欧拉欧拉欧拉',
					color: 'color:#00a5e6'
				}, {
					word: '嚯嚯,朝我走过来了吗',
					color: 'color:#ffdf7e'
				}, {
					word: '木大木大木大木大木大木大',
					color: 'color:#ffdf7e'
				}, {
					word: 'だが，断る',
					color: 'color:#03bb53'
				}, {
					word: '我乔鲁诺·乔巴纳有一个梦想！',
					color: 'color:#ffdf7e'
				}]
			}
		},

		created: function () {
			this.mainList()
		},
		methods: {
			mainList() {
				this.showFather(0)
			},
			getChange: debounce(function (e) {
				console.log(e.target.value)
			}),
			showFather(index) {
				this.timer = index;
				var $this = this;
				this.index = index;
				if ($this.playList.length == 0 && index == 0) {
					$this.$axios.get('/?json=true').then(function (res) {
						$this.bannerList = res.data.banner
						$this.playList = res.data.data
					})
				}
				if ($this.singerList.length == 0 && index == 1) {
					$this.$axios.get('/singer/class&json=true').then(function (res) {
						$this.singerList = res.data.list;
					})
				}

				// if ($this.hostList.length == 0 && index == 2) {
				// 	$this.$axios.get('/api/v4/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1').then(function(res) {
				// 		console.log(res.data)
				// 		$this.hostList = res.data.list;
				// 	})
				// }
			},
			getPlayDetails(hash) {
				this.drawer = true;
				var $this = this;
				$this.$axios.get('/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash).then(function (res) {
					$this.PlayDetails = res.data;
					console.log(res.data)
				})
			},
			clickPlay(hash) {
				var $this = this;
				$this.$axios.get('/app/i/getSongInfo.php?cmd=playInfo&hash=' + hash).then(function (res) {
					$this.src = res.data.url;
					$this.yyname = res.data.songName;
				})
			},
			toSinger(toSinger) {
				this.$router.push({
					path: '/singer',
					query: {
						toSinger: toSinger
					}
				})
			}
		}
	}
</script>

<style>
	.hade {
		width: 100%;
		height: 80px;
		position: fixed;
		top: 0;
		z-index: 99;
		background: #333;
	}

	.title {
		height: 45px;
		line-height: 45px;
		text-align: center;
		font-size: 14px;
		color: #ffcd32;
	}

	.play-list {
		display: flex;
		width: 80%;
		margin: auto;
		height: 50px;
		line-height: 50px;

	}

	.play-right {
		margin-right: auto;
	}

	.play-icon {
		position: relative;
		top: 13px;
		font-size: 24px;
	}

	.detail {
		color: #333;
		display: flex;
		font-size: 12px;
		margin: 25px 80px;
	}

	.detail-card {
		flex: 1;
		text-align: center;
	}

	.authors {
		color: #333333;
	}

	.authors-img {
		text-align: center;
	}

	.authors-img img {
		width: 180px;
		height: 180px;
		border-radius: 50%;
		margin: auto;
	}

	/* 	.authors-img-2 {
		text-align: center;
	} */

	.authors-img-2 {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		margin: 5px 30px;
	}

	.authors-name {
		margin: 15px auto;
		text-align: center;
		font-size: 18px;
	}

	.authors-img-2-1 {
		display: flex;
		overflow-y: auto;
		/* float: left; */
	}

	.img2-card {
		line-height: 26px;
		padding-top: 30px;
	}

	.singerCard {
		margin: 10px 40px;
		display: flex;
		border-bottom: 1px solid #eeeeee29;
		padding-bottom: 5px;
	}

	.singerCard img {
		height: 60px;
		width: 60px;
		border-radius: 50%;
		padding-left: 20px;

	}

	.classname {
		flex: 1;
		line-height: 60px;
		padding-left: 40px;
	}
</style>