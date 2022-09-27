<template>
	<view class="body">
		<!-- 头部 -->
		<view class="header"></view>
		<!-- 内容 -->
		<view class="list">
			<!-- 请登录 -->
			<view class="my-header" @click="tologin">
				<view class="header-contnet">
					<img v-if="token==null" src="../../static/images/logo.png" alt="">
					<img v-if="token" :src="names.imageUrl" alt="">
					<view class="header-info" v-if="token==null">请登录</view>
					<view class="header-info" v-if="token">{{names.nickName}}</view>
				</view>
				<view class="">
					<text class="iconfont">&#xe62d</text>
				</view>
			</view>
			<!-- 我的订单   余额   学习 -->
			<view class="my-aside">
				<view class="aside-box" @click="goOrder">
					<view class="">
						<text class="iconfont incon">&#xe7fa</text>
						<text>我的订单</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
				<!-- 我的余额 -->
				<view class="aside-box" @click="goBalance">
					<view class="">
						<text class="iconfont incon">&#xe7f9</text>
						<text>我的余额</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
				<view class="aside-box">
					<view class="">
						<text class="iconfont incon">&#xe879</text>
						<text>我的学习</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
			</view>
			<!-- 设置  意见反馈-->
			<view class="my-setup" >
				<!-- 设置 -->
				<view class="aside-box" @click="goSetup">
					<view class="">
						<text class="iconfont incon">&#xe7fb</text>
						<text>设置</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
				<!-- 意见反馈 -->
				<view class="aside-box" @click="goFeedback">
					<view class="">
						<text class="iconfont incon">&#xe7e2</text>
						<text>意见反馈</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
			</view>
			<!-- 关于我们 -->
			<view class="my-footer" >
				<view class="aside-box" @click="goAboutus">
					<view class="">
						<text class="iconfont incon">&#xe8b9</text>
						<text>关于我们</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
			</view>
			<view class="footer">

			</view>
		</view>
	</view>
</template>

<!-- <script src="../../static/icon/iconfont.js"> -->
<script>
	import {
		ref,
		reactive,
		toRefs
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({
				names:'',
				token:'',
			});
			/* 跳转到登录页面 */
			const tologin = () => {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			/* 跳转到关于我们 */
			const goAboutus = ()=>{
				uni.navigateTo({
					url:'/pages/my/aboutUs'
				})
			}
			/* 跳转到设置 */
			const goSetup = ()=>{
				uni.navigateTo({
					url:'/pages/my/setup'
				})
			}
			/* 跳转到我的余额 */
			const goBalance = ()=>{
				uni.navigateTo({
					url:'/pages/my/balance'
				})
			}
			/* 跳转到我的订单 */
			const goOrder = ()=>{
				uni.navigateTo({
					url:'/pages/my/orderView'
				})
			}
			/* 跳转到意见反馈 */
			const goFeedback = ()=>{
				uni.navigateTo({
					url:'/pages/my/feedback'
				})
			}
			
			return {
				...toRefs(data),
				tologin,
				goAboutus,
				goSetup,
				goBalance,
				goOrder,
				goFeedback
			}
			
		},
		onShow() {
		   this.names = JSON.parse(sessionStorage.getItem('data'))
		   this.token = sessionStorage.getItem('token')
		}
	}
</script>

<style lang="scss">
	.body {
		width: 100%;
		height: 100vh;
		background-color: rgb(52, 93, 194);
	}

	.header {
		height: 40px;
		background-color: rgb(52, 93, 194);
		border-bottom: 0.5px solid #eee;
	}

	.list {
		height: calc(100vh - 90px);
		background-color: #fff;
		border-radius: 20px 20px 0 0;
		background-color: whitesmoke;

		.my-header {
			height: 136px;
			border-bottom: 0.5px solid #eee;
			padding: 27px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			border-radius: 20px 20px 0 0;

			.header-contnet {
				width: 162px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				img {
					border-radius: 50%;
					width: 82px;
					height: 82px;
				}

				.header-info {
					margin-left: 16px;
					font-size: 21px;
					font-weight: 700;
				}
			}
		}

		.my-aside,
		.my-setup,
		.my-footer {
			margin-top: 11px;
			background-color: #fff;

			.aside-box {
				border-bottom: 0.5px solid #eee;
				height: 50px;
				padding: 0 20px;
				line-height: 50px;
				display: flex;
				justify-content: space-between;

				.incon {
					color: deepskyblue;
					margin-right: 10px;
				}
			}
		}
	}

	.footer {
		height: 110px;
		background-color: #fff;
	}
</style>
