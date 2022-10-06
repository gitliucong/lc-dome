<template>
	<view>
		<!-- 搜索框 -->
		<Searchinput></Searchinput>
		<view class="aside">
			<view class="left">
				<scroll-view class="scroll-y" scroll-y="true">
					<view v-for="item in data.categoriesList" :key="item.cat_id"
						:class="{'scrolls' : true, 'active' : item.cat_id == data.index}"
						@click="data.index = item.cat_id,data.categoriesName = item.children">{{item.cat_name}}</view>
				</scroll-view>
			</view>
			<view class="right">
				<scroll-view class="right_scroll" scroll-y="true" >
					<view class="" v-for="item in data.categoriesName" :key="item.cat_id">
						<view class="right-title"> <text>/</text> {{item.cat_name}} <text>/</text></view>
						<view class="right_data" @click="goProductList">
							<view class="right_info" v-for="child in item.children">
								<img :src="child.cat_icon" alt="">
								<view class="right_text">{{child.cat_name}}</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		getCategories
	} from "@/api/api"
	import Searchinput from "../../components/SearchInput/SearchInput.vue"
	import {
		reactive
	} from "vue";
	const data = reactive({
		categoriesList: [], //左侧列表数据
		categoriesName: [], //右侧name
		categoriesData: [], //右侧列表数据
		index: 1,
	})
	getCategories().then((res: any) => {
		data.categoriesList = res.message
		data.categoriesName = res.message[0].children
		// data.categoriesData = res.message[0].children[0].children
	})
	/* 跳转到商品列表页 */
	const goProductList = () =>{
		console.log(1);
		uni.navigateTo({
			url:'./productlist/productlist'
		})
	}
	
	/* 注册组件 */
	components: {
		Searchinput
	}
</script>

<style lang="scss">
	.aside {
		display: flex;
		// justify-content: space-between;


		.left {
			width: 30%;

			scroll-view ::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
				color: transparent;
			}

			.scroll-y {
				text-align: center;
				height: calc(100vh - 70rpx);
				.scrolls {
					height: 80rpx;
					line-height: 80rpx;
				}

				.scrolls.active {
					border-left: 6rpx solid red;
					color: red;
				}
			}
		}

		.right {
			width: 75%;
			height: calc(100vh - 70rpx);
			text-align: center;
			.right_scroll{
				height: calc(100vh - 70rpx);
				.right-title {
					margin: 20rpx 0;
				
					text {
						color: #ccc;
					}
				}
				
				.right_data {
					display: flex;
					flex-wrap: wrap;
				
					.right_info {
						width: 33.33%;
						margin: 20rpx 0;
				
						img {
							width: 100rpx;
							height: 100rpx;
						}
				
						.right_text {
							font-size: 28rpx
						}
					}
				}
			}
			
		}
	}
</style>
