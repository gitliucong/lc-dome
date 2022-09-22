<template>
	<view class="hot-list" v-for="item in hotList" :key="item.id" @click="todetailView">
		<view class="list-left">
			<img :src="item.mainImage" alt="">
			<view class="list-time">
				{{item.totalTime}}
			</view>
		</view>
		<view class="list-right">
			<view class="list-title">
				{{item.title}}
			</view>
			<view class="list-info">
				<view class="info-top"> <text class="iconfont"> &#xe69d </text> {{item.nickName}}</view>
				<view class="info-btm">
					<view class="info-price"> <text class="iconfont">&#xe666</text> {{item.priceDiscount}}</view>
					<view class="info-pople"> <text class="iconfont">&#xeb5e</text> {{item.commTotal}} 人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	export default {
		name: "keList",
		props: ['hotList'],
		setup(props, context) {
			const todetailView = () => {
				uni.navigateTo({
					url: '/pages/detail/detailView'
				})
			}
			return {
				todetailView
			}
		},
	}
</script>

<style lang="scss">
	/* /课程列表 */
	.hot-list {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 10px 0;
		border-bottom: 0.5px solid #f1f1f1;


		.list-left {
			position: relative;
			width: 145px;
			height: 80px;
			margin-right: 10px;

			img {
				width: 100%;
				height: 100%;
			}

			.list-time {
				position: absolute;
				bottom: 2px;
				right: 2px;
				font-size: 11px;
				color: #fff;
				background: rgba(51, 51, 51, .4);
				border-radius: 10px;
				padding: 0 4px;
			}
		}

		.list-right {
			.list-title {
				max-width: 182px;
				height: 35px;
				line-height: 17px;
				font-size: 14px;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.list-info {
				.info-top {
					font-size: 11px;
					color: #999;
				}

				.info-btm {
					display: flex;

					.info-price {
						color: #fb6932;
						width: 65px;
						font-size: 14px;
					}

					.info-pople {
						font-size: 11px;
						color: #222;
					}
				}
			}
		}
	}
</style>
