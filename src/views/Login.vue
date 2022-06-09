<template>
	<div>
		<div class="login-login">
			<div class="login-welcome">登录</div>
			<div class="login-form">
				<div class="login-inp"><label>登录</label><input type="text" placeholder="" ref="userName"></div>
				<div class="login-inp"><label>密码</label><input type="password" placeholder="" ref="password"></div>
				<div class="login-inp" @click="subbmitButton()"><a href="#">立即登录</a></div>
			</div>
		</div>
	</div>
</template>

</el-calendar>

<script>
	import axios from 'axios'
	import {
		login
	} from "@/request/chatroom";
	export default {
		name: "index",
		data() {
			return {
				goodsList: []
			}
		},
		created() {
			this.to();
		},
		methods: {
			to() {
				var $this = this
				login().then(res => {
					console.log(res)
				})
				$this.$axios.get('/?json=true').then(function(res) {
					$this.bannerList = res.data.banner
					$this.playList = res.data.data
				})

			},
			subbmitButton() {
				var $this = this;
				if (this.$refs.userName.value == '' && this.$refs.password.value == '') {
					this.$message.warning('请填写帐号密码');
				} else if (this.$refs.userName.value != 'admin' && this.$refs.password.value != '123456') {
					this.$message.error('帐号或密码错误');
				} else {
					this.$message.success('登录成功');
					setTimeout(function() {
						$this.$router.push({
							path: '/index'
						});
					}, 1800)
				}
			}
		}
	}
</script>
<style>
	.login-login {
		width: 100%;
		height: 100%;
		background: url(../assets/images/login-bg.png) no-repeat;
		background-size: cover;
		position: fixed;
		z-index: -10;
	}

	.login-welcome {
		width: 100%;
		margin: 25% 0;
		font-size: 50px;
		font-family: PingFang SC;
		color: #ffffff;
		text-align: center;
	}

	.login-welcome img {
		width: 100%;
	}

	.login-inp {
		margin: 0 30px 15px 30px;
		border: 1px solid #fff;
		border-radius: 25px;
	}

	.login-inp label {
		width: 4em;
		text-align: center;
		display: inline-block;
		color: #fff;
	}

	.login-inp input {
		line-height: 40px;
		color: #fff;
		background-color: transparent;
		border: none;
		outline: none;
	}

	.login-inp a {
		display: block;
		width: 100%;
		text-align: center;
		line-height: 40px;
		color: #fff;
		font-size: 16px;
		letter-spacing: 5px;
	}

	.login-txt {
		text-align: center;
		color: #fff;
	}

	.login-txt a {
		color: #fff;
		padding: 0 5px;
	}
</style>
