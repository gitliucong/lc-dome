<template>
	<view class="">
		<view class="header">
			<text class="iconfont icon" @click="goreturn">&#xe8b5</text>
			<text class="txt">关于我们</text>
		</view>
		<view class="aside">
			<img src="../../static/images/logo-black.png" alt="">
			<view>Version 1.0.0</view>
		</view>
		<view class="us-txt">
			&emsp;&emsp;梦学谷是专注于在线教育平台，聚合了优秀教师的海量精品课程。在这里，您可以在线观看视频教程；您可以随时随地向名师请教；您可以与大量志同道合的同学进行交流。
		</view>
		<view class="us-txt">
			&emsp;&emsp;打破地域的限制，让每个立志学习，有梦想的人，都能接受优秀教师的指导和教学；同时希望给优秀的教师一个展示的平台。
		</view>
		<view class="us-txt">
			&emsp;&emsp;梦学谷——陪你学习，伴你梦想！
		</view>
	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({

			});

			const goreturn = () => {
				uni.navigateBack({
					delta: 1
				})
			}

			return {
				...toRefs(data),
				goreturn
			}
		}
	}
</script>

<style lang="scss">
	/* 头部 */
	.header {
		text-align: center;
		height: 40px;
		line-height: 40px;

		.txt {
			font-weight: 800;
		}
	}
	.icon {
		position: fixed;
		left: 20px;
		top: 0;
	}
	.aside{
		text-align: center;
		margin-top: 30px;
		img{
			width: 140px;
			height: 46px;
		}
		view{
			    font-size: 15px;
			    color: #345dc2;
			    font-weight: 500;
				margin: 20px 0; 
		}
	}
	.us-txt{
		    font-size: 15px;
			margin-bottom: 10px;
			padding: 0 20px;
	}
</style>
