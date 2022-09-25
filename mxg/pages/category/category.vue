<template>
	<!-- /* 分类页面 */ -->
	<view>
		<!-- 头部 -->
		<view class="header">
			<text class="branch">分类</text>
			<text class="iconfont">&#xe651</text>
		</view>
		<view class="aside">
			<view class="left">
				<scroll-view scroll-y="true" class="scroll-Y" show-scrollbar="false" :show-scrollbar="false">
					<view :class="{'left-view' : true, 'active' : item.id == index}" v-for="item in categoryList"
						:key="item.id" @click="index = item.id, categoryData = item.labelList
						">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="right">
				<view class="names" v-for="item in categoryData">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getCategory
	} from '@/utils/category/category.js'
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({
				index: 1,
				categoryList: [], //列表数据
				categoryData: [], //列表数据
			});
			/* 分类侧边栏  和 小分类 */
			getCategory().then(res => {
				console.log(res.data);
				data.categoryList = res.data
				data.categoryData = res.data[0].labelList
			})
			return {
				...toRefs(data)
			}
		}
	}
</script>

<style  lang="scss">
	.aside {
		display: flex;
		/* 左边侧边栏 */
		.left {
			width: 100px;
			// height: 100vh;
			background-color: #f8f9fb;

			scroll-view ::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
				color: transparent;
			}

			.scroll-Y {
				height: calc(100vh - 94px);
				/* 左边栏  单个 */
				.left-view {
					height: 74px;
					line-height: 74px;
					text-align: center;
					font-size: 15px;
					color: #888;
				}

				.left-view.active {
					color: #345dc2;
					border-left: 3px solid #345dc2;
				}
			}
		}
		/* 右边分类 */
		.right {
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			padding-top: 17px;
			padding-left: 5px;
			
			.names {
				font-size: 12px;
				line-height: 30px;
				border: 1px solid #999;
				border-radius: 15px;
				min-width: 80px;
				text-align: center;
				padding: 0 2px;
				margin: 7px 2px;
			}
		}
	}

	/* 头部 */
	.header {
		width: 100%;
		height: 44px;
		background-color: #345dc2;
		color: #fff;
		line-height: 44px;
		text-align: center;

		.branch {
			font-weight: 700;
			font-size: 16px;
			line-height: 30px;
			text-align: center;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.iconfont {
			position: absolute;
			right: 20px;
			top: 0;
			font-size: 20px;
			font-weight: 900;

		}
	}
</style>
