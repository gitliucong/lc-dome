<template>
	<view>
		<!-- 头部 -->
		<Search></Search>
		<!-- 中间内容 -->
		<view class="aside">
			<view class="aside-scroll">
				<scroll-view scroll-x="true" class="scroll-x" :scroll-left="activeIndex * 75 - 150"
					:scroll-with-animation="true" :show-scrollbar="false">
					<view :class="{'scroll-text':true,'active':activeIndex == index}"
						v-for="(item,index) in articleList" :key="item.id" @tap="toIndex(index)">{{item.name}}</view>
				</scroll-view>
			</view>
			<!-- 课程列表 -->
			<swiper class="swiper-box" :current="activeIndex" @change="changeCurrent">
				<swiper-item v-for="(item,index) in 9">
					<scroll-view class="scroll-box" scroll-y="true">
						<myarticle></myarticle>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		getArticle,
	} from '@/utils/article/article.js'
	import Search from '@/components/search-input/Search.vue'
	import myarticle from '@/components/myArticle/myArticle.vue'
	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup(props, context) {
			const data = reactive({
				articleList: [], //列表导航数据
				page: 1,
				pagesize: 10,
				activeIndex: 0,
			});
			
			getArticle().then(res => {
				data.articleList = res.data
			})
			
			const changeCurrent = (e) => {
				console.log(e);
				data.activeIndex = e.detail.current
				getArticle().then(res => {
					data.articleList = res.data
				})
			}
			
			const toIndex = (index) => {
				data.activeIndex = index
			}

			return {
				...toRefs(data),
				changeCurrent,
				toIndex,
			
			}
		},
		components: {
			Search,
			myarticle
		},
		
	}
</script>

<style lang="scss">
	.swiper-box {
		margin-top: 84px;
		height: calc(100vh - 134px);
	}

	.scroll-box {
		height: calc(100vh - 134px);
	}

	.aside {
		height: 100%;
		overflow: hidden;

		.aside-scroll {
			width: 100%;
			height: 40px;
			background-color: #fff;
			border-bottom: 1px solid #efeff4;
			position: fixed;
			top: 0;
			left: 0;

			scroll-view ::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
				color: transparent;
			}

			.scroll-x {
				margin-top: 44px;
				width: 100%;
				text-align: center;
				white-space: nowrap;
				background-color: #fff;

				.scroll-text {
					position: relative;
					flex: 1;
					display: inline-block;
					width: 75px;
					font-size: 15px;
					line-height: 40px;
				}

				.scroll-text::after {
					content: '';
					position: absolute;
					bottom: 2px;
					left: 50%;
					transform: translateX(-50%);
					width: 0;
					border: 0 solid blue;
					transition: 0.3s all;
				}

				.scroll-text.active {
					color: blue;
				}

				.scroll-text.active::after {
					width: 20px;
					border-width: 1px;
				}
			}
		}
	}
</style>
