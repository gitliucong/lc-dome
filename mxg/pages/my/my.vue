<template>
	<view class="body">
		<!-- 头部 -->
		<view class="header"></view>
		<!-- 内容 -->
		<view class="list">
			<!-- 请登录 -->
			<view class="my-header" @click="tologin">
				<view class="header-contnet">
					<img src="/static/images/logo.png" alt="">
					<view class="header-info">请登录</view>
				</view>
				<view class="">
					<text class="iconfont">&#xe62d</text>
				</view>
			</view>
			<!-- 我的订单   余额   学习 -->
			<view class="my-aside">
				<view class="aside-box">
					<view class="">
						<text class="iconfont incon">&#xe7fa</text>
						<text>我的订单</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
				<view class="aside-box">
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
			<view class="my-setup">
				<view class="aside-box">
					<view class="">
						<text class="iconfont incon">&#xe7fb</text>
						<text>设置</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
				<view class="aside-box">
					<view class="">
						<text class="iconfont incon">&#xe7e2</text>
						<text>意见反馈</text>
					</view>
					<view class="iconfont">&#xe62d</view>
				</view>
			</view>
			<view class="my-footer">
				<view class="aside-box">
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

			});
			const tologin = () => {
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
			return {
				...toRefs(data),
				tologin
			}
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
