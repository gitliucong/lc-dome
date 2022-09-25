<template>
	<view class="">
		<view class="header">
			<text class="iconfont icon" @click="goreturn">&#xe8b5</text>
			<text class="txt">订单支付</text>
		</view>
		<view class="aside">
			<view class="txt">支付方式</view>
			<view class="left">
				<view class="imgs">
					<img src="../../static/pay/alipay.png" alt="">
					<span>支付宝</span>
				</view>
				<label class="radio">
					<radio value="r2" />
				</label>
			</view>
			<view class="right">
				<view class="imgs">
					<img src="../../static/pay/wxpay.png" alt="">
					<span>微信支付</span>
				</view>
				<label class="radio">
					<radio value="r2" />
				</label>
			</view>
		</view>
		<view class="money">
			<text>实付金额</text>
			<text class="price">￥99999</text>
		</view>
		<button class="btn" type="primary" @click="pmt" :loading="loading">立即支付</button>
	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from 'vue'
	export default {
		setup(props, context) {
			const data = reactive({
				loading: false
			})
			const pmt = () => {
				data.loading = true
				console.log(data.loading);
			}
			/* 返回上一页 */
			const goreturn = () => {
				uni.navigateBack({
					delta: 1
				})
			}
			return {
				...toRefs(data),
				pmt,
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

		.icon {
			position: fixed;
			left: 20px;
			top: 0;
		}
	}

	/*  内容  */
	.aside {
		width: 90%;
		padding: 10px 20px;
		border-radius: 10px;
		background-color: white;
		box-shadow: 1px 0 5px 0 rgb(0 0 0 / 10%);
		margin: 0 auto;

		.txt {
			text-align: left;
			height: 40px;
			line-height: 40px;
			border-bottom: 1px solid #eee;
		}

		.left,
		.right {
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.imgs {
				display: flex;
				justify-content: space-between;
				align-items: center;

				span {
					margin-left: 10px;
				}
			}

			img {
				width: 30px;
				height: 30px;
			}

		}
	}

	.money {
		width: 90%;
		padding: 0 20px;
		border-radius: 10px;
		background-color: white;
		box-shadow: 1px 0 5px 0 rgb(0 0 0 / 10%);
		margin: 0 auto;
		margin-top: 10px;
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.price {
			color: red;
		}
	}

	.btn {
		width: 90%;
		margin-top: 10px;
		border-radius: 30px;
		background-color: #345DC2;
	}
</style>
