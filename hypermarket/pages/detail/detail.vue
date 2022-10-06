<template>
	<view>
		<view class="banner">
			<!-- <u-swiper :list="" height="680" name="pics_mid_url"></u-swiper> -->
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in data.goodsItem.pics" :key="item.goods_id">
					<view class="swiper-item" >
						<img :src="item.pics_big_url">
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="price">
			￥{{data.goodsItem.goods_price}}
		</view>
		<view class="Goodsname">
			<view class="name">
				{{data.goodsItem.goods_name}}
			</view>
			<view class="like">
				<view>
					<!-- <u-icon name="star"></u-icon> -->
				</view>
				<view>
					收藏
				</view>
			</view>
		</view>
		<!-- <u-parse :html=""></u-parse> -->
		<!-- <rich-text :nodes="data.goodsItem.goods_introduce"></rich-text> -->
		<view v-html="data.goodsItem.goods_introduce">

		</view>
		<view class="bottom">
			<view class="iconbox">
				<view class="icon">
					<!-- <u-icon name="share"></u-icon> -->
				</view>
				<view class="name">
					客服
				</view>

			</view>
			<view class="iconbox">
				<view class="icon">
					<!-- <u-icon name="share"></u-icon> -->
				</view>
				<view class="name">
					分享
				</view>

			</view>
			<view class="iconbox">
				<view class="icon">
					<!-- <u-icon name="shopping-cart"></u-icon> -->
				</view>
				<view class="name">
					购物车
				</view>
			</view>
			<view class="btnbox">
				<!-- <button class="btn" type="warning" size="mini">加入购物车</button> -->
				加入购物车
			</view>
			<view class="btnbox1">
				<!-- <button class="btn" type="error" size="mini">立即购买</button> -->
				立即购买
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive
	} from 'vue'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		getGoodsDetail
	} from '@/api/api'
	const data = reactive({
		goodsItem: {},

	})
	onLoad((opt) => {
		getGoodsDetail(opt.id).then((res: any) => {
			console.log(res);
			data.goodsItem = res.message
		})
	})
</script>

<style lang="scss" scoped>
	.banner{
		img{
			width: 100%;
			height: 100%;
		}
	}
	.price {
		height: 70rpx;
		line-height: 70rpx;
		padding: 0 20rpx;
		color: #eb4450;
		font-weight: 700;
	}

	.Goodsname {
		display: flex;
		padding: 0 5rpx;
		margin-bottom: 20rpx;

		.like {
			width: 160rpx;
			text-align: center;
			border-left: 1px solid #000;
		}
	}

	.bottom {
		position: fixed;
		display: flex;
		background-color: #fff;
		justify-content: space-between;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		bottom: 0;
		z-index: 9;

		.iconbox {
			flex: 1;
			text-align: center;
		}

		.btnbox,
		.btnbox1 {
			flex: 2;
			text-align: center;
		}

		.btnbox {
			background-color: #ffa500;
		}

		.btnbox1 {
			background-color: #eb4450;
		}
	}
</style>
