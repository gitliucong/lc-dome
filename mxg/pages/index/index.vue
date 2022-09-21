<template>
	<view class="content">
		<!-- 头部搜索框 -->
		<Search></Search>
		<!-- 轮播图 -->
		<view class="swiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="#ccc"
				indicator-active-color="#fff">
				<swiper-item v-for="(item,index) in bannerList" :key="index"
					:style="`background-image: linear-gradient(${item.background}, #fff);`">
					<image :src="'../..'+item.imageUrl" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 中部导航栏 -->
		<view class="center-nav">
			<text class="navtext" v-for="item in list" :key="item.id">{{item.name}}</text>
			<text class="navtext"> 全部分类 </text>
		</view>
		<!-- 课程列表 -->
		<view class="list-content">
			<!-- 热门推荐 -->
			<view class="hot">
				<view class="hot-left">
					<text>热门推荐</text>
					<text class="hot-text">HOT</text>
				</view>
				<view class="hot-right">
					<text> 全部> </text>
				</view>
			</view>
			<!-- 热门推荐课程列表 -->
			<kelist :hotList="hotList"></kelist>
			<!-- 最近上新 -->
			<view class="hot">
				<view class="hot-left">
					<text>最近上新</text>
					<text class="hot-text">HOT</text>
				</view>
				<view class="hot-right">
					<text> 全部> </text>
				</view>
			</view>
			<view class="isScroll">
				<!-- 最近上新课程列表 -->
				<scroll-view scroll-x="true" class="scroll-box">
					<latelylist :latelyList="latelyList"></latelylist>
						<latelylist :latelyList="latelyList"></latelylist>
						<latelylist :latelyList="latelyList"></latelylist>
						<latelylist :latelyList="latelyList"></latelylist>
				</scroll-view>
			</view>
			<!-- 免费精选 -->
			<view class="hot">
				<view class="hot-left">
					<text>免费精选</text>
					<text class="hot-text">HOT</text>
				</view>
				<view class="hot-right">
					<text> 全部> </text>
				</view>
			</view>
			<!-- 免费精选课程列表 -->
			<kelist :hotList="freeList"></kelist>
			<!-- 付费精品 -->
			<view class="hot">
				<view class="hot-left">
					<text>付费精品</text>
					<text class="hot-text">HOT</text>
				</view>
				<view class="hot-right">
					<text> 全部> </text>
				</view>
			</view>
			<!-- 付费精品课程列表 -->
			<kelist :hotList="payList"></kelist>
		</view>
		<view class="gotop" @click="scrolTop" v-show="flag">
			<text class="iconfont icon">&#xe609</text>
		</view>
	</view>
</template>

<script>
	import {
		getBanner,
		getList,
		getHot,
		getFree,
		getPay,
		getLately
	} from "@/utils/http/home";
	import {
		reactive,
		toRefs,
		ref
	} from "vue";
	import { onPageScroll } from '@dcloudio/uni-app'
	import Search from "@/components/search-input/Search.vue"
	import kelist from "@/components/keList/keList.vue"
	import latelylist from "@/components/latelyLIst/latelyLIst.vue"
	export default {
		setup(props, context) {
			const data = reactive({
				bannerList: [], //存放轮播图的数据
				list: [], // 中部导航列表数据
				hotList: [], // 热门推荐课程列表数据
				freeList: [], //免费精选课程列表数据
				payList: [], //付费精品课程列表数据
				latelyList: [] ,//最近上新课程列表数据
				page:1,
				pageSize:10,
				flag:false,
			});
			/* 获取轮播图数据 */
			getBanner().then(res => {
				data.bannerList = res.data;
				// console.log('../..' + data.bannerList[0].imageUrl);
			})
			/* 获取中部导航列表数据 */
			getList().then(res => {
				// console.log(res.data);
				data.list = res.data
				data.list.length = 7
			})
			/* 获取热门推荐课程列表 */
			getHot().then(res => {
				// console.log(res.data.records);
				data.hotList = res.data.records
			})
			/* 获取免费精选课程列表 */
			getFree().then(res => {
				// console.log(res.data.records);
				data.freeList = res.data.records
			})
			/* 获取付费精品课程列表 */
			getPay(data.page, data.pageSize).then(res => {
				// console.log(res.data.records);
				data.payList = res.data.records
			})
			/* 获取最近上新课程列表 */
			getLately().then(res => {
				// console.log(res.data.records);
				data.latelyList = res.data.records
			})
			/* 监听滚动条 */
			window.addEventListener('scroll',()=>{
				console.log(document.documentElement.scrollTop);
				if(document.documentElement.scrollTop>=1400){
					data.flag = true
				}else{
					data.flag = false
				}
			})
			/* 点击回到顶部 */
			const scrolTop = ()=>{
				uni.pageScrollTo({
					scrollTop:0
				})
			}
			return {
				...toRefs(data),
				scrolTop
			};
		},
		components: {
			Search,
			kelist,
			latelylist
		},
		onReachBottom() {
		   this.page ++
		   console.log(this.page);
		   getPay(this.page, this.pageSize).then(res => {
		    this.payList = [...res.data.records,...this.payList]
		   })
		  }
	}
</script>

<style scoped lang="scss">
	.gotop{
		position: fixed;
		right: 20px;
		bottom: 100px;
		height: 50px;
		width: 50px;
		border-radius: 50%;
		background-color: rgba(111, 111, 111, 0.3);
		text-align: center;
		line-height: 50px;
		.icon{
			font-size: 26px;
			font-weight: 800;
		}
	}
	.scroll-box {
		white-space: nowrap;
		height: 190px;
		// display: block;
	}
	.isScroll{
		width: 350px;
	}

	/* 热门推荐 */
	.hot {
		width: 340px;
		height: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30px;

		/* 左边 */
		.hot-left {
			.hot-text {
				font-size: 10px;
				background-image: -webkit-linear-gradient(left, #fb6932, #fa140e);
				background-image: linear-gradient(90deg, #fb6932, #fa140e);
				color: #fff;
				padding: 0 5px;
				border-radius: 15px 15px 15px 0;
			}
		}

		/* 右边 */
		.hot-right {
			text {
				color: #959da5;
				font-size: 14px;
			}
		}
	}

	/* 轮播图 */
	.swiper {
		width: 100%;

		swiper {
			width: 100%;
			margin: 0 auto;
			height: 500rpx;
			display: flex;

			image {
				padding-top: 90rpx;
				margin-top: 4%;
				margin-left: 5%;
				width: 90%;
				height: 100%;
				border-radius: 20rpx;
			}
		}
	}

	.list-content {
		padding: 0 20px;
	}

	/* 中部导航栏 */
	.center-nav {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-justify-content: space-around;
		justify-content: space-around;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		// padding: 10px 15px 0 15px;

		.navtext {
			width: 80px;
			height: 35px;
			background-color: #f8f9fb;
			text-align: center;
			line-height: 35px;
			font-size: 13px;
			border-radius: 10px;
			overflow: hidden;
			margin-top: 7px;
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
