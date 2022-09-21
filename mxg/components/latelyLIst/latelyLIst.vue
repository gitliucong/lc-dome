<template>
	<view class="lately-box" v-for="item in latelyList" :key="item.id">
		<view class="top">
			<img :src="item.mainImage" alt="">
			<text class="top-time">{{item.totalTime}}</text>
		</view>
		<view class="bottom">
			<view class=" bottom-title ">
				{{item.title}}
			</view>
			<view class="bottom-info">
				<view class="bottom-teacher">
					<text class="iconfont"> &#xe69d </text> {{item.nickName}}
				</view>
				<view class="bottom-pp">
					<view class="bottom-price"><text class="iconfont">&#xe666</text>{{item.priceDiscount}}</view>
					<view class="bottom-prople"><text class="iconfont">&#xeb5e</text>{{item.commTotal}} 人在学</view>
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
		name: "latelyLIst",
		props: ['latelyList'],
		// setup(props, context) {
		// 	console.log(props)
		// },
	}
</script>

<style lang="scss">
	/* /课程列表 */
	.lately-box {
		display: inline-block;
		width: 155px;
		height: 171px;
		padding: 0 5px;
		margin-right: 10px;
		border-radius: 10px;
		box-shadow: 1px 1px 3px rgb(0 0 0 / 10%);
		background-color: #fff;

		.top {
			position: relative;
			width: 145px;
			height: 80px;
			margin-right: 10px;

			img {
				width: 100%;
				height: 100%;
			}

			.top-time {
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

		.bottom {
			.bottom-title {
				max-width: 182px;
				height: 35px;
				line-height: 17px;
				font-size: 14px;
				font-weight: 700;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				white-space: normal;
				margin-bottom: 10px;
			}
			.bottom-info{
				
				.bottom-teacher{
					font-size: 11px;
					    color: #999;
				}
				.bottom-pp{
					display: flex;
				}
				.bottom-price{
					    color: #fb6932;
					    width: 65px;
					    font-size: 14px;
				}
				.bottom-prople{
					    font-size: 11px;
					    color: #222;
				}
			}
		}
	}
</style>
