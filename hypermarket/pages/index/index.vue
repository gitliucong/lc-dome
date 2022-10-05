<template>
	<view>
		<!-- 搜索框 -->
		<Searchinput></Searchinput>
		<!-- 轮播图 开始-->
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item v-for="item in data.bannerList" :key="item.goods_id">
					<view class="swiper-item">
						<img :src="item.image_src" alt="">
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 轮播图 结束 -->
		<!-- 导航 开始 -->
		<view class="nav">
			<view class="nav-box" v-for="(item,index) in data.navList" :key="index">
				<img :src="item.image_src" alt="">
				<!-- <view class="">{{item.name}}</view> -->
			</view>
		</view>
		<!-- 导航 结束 -->
		<!-- 楼层 开始 -->
		<view class="floordata" v-for="item in data.floordataList" :key="item">
			<view class="floordata-title">
				<img :src="item.floor_title.image_src" alt="" style="width: 100%;height:100%">
			</view>
			<view class="product_list" > 
				<view class="product_left" >
					<img :src="item.product_list[0].image_src" alt="">
				</view>
				<view class="product_right">
					<template v-for="(child,index) in item.product_list" :key="index">
					<view class="product_right_img" v-if="index!=0">
						<img :src="child.image_src" alt="">
					</view>
					</template>
				</view>
			</view>
		</view>
		<!-- 楼层 结束 -->
	</view>
</template>

<script lang="ts" setup>
	import {getBanner,getHomeCate,getFloorData} from "@/api/api"
	import Searchinput from "../../components/SearchInput/SearchInput.vue"
	import {reactive} from "vue"

	const data = reactive({
		bannerList: [], //轮播图数据
		navList:[],		//导航数据
		floordataList:[]//楼层数据
	})
	/* 获取轮播图数据 */
	getBanner().then((res:any)=>{
		data.bannerList = res.message
	})
	/* 获取导航数据 */
	getHomeCate().then((res:any)=>{
		data.navList = res.message
	})
	/* 获取楼层数据 */
	getFloorData().then((res:any)=>{
		console.log(res.message);
		data.floordataList = res.message
	})
	/* 注册组件 */
	components: {
		Searchinput
	}
</script>

<style lang="scss">
	/* 楼层 */
	.floordata{
		.floordata-title{
			padding: 10rpx;
		}
		.product_list{
			display: flex;
			.product_left{
				width: 33.33%;
			}
			.product_right{
				flex: 1;
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				margin-left: 10rpx;
				
				.product_right_img{
					width: 49%;
					margin-bottom: 10rpx;
				}
			}
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	/* 导航 */
	.nav{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 20rpx 0;
		.nav-box{
			width: 150rpx;
			height: 150rpx;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	/* 轮播图 */
.banner{
	.swiper-item{
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
