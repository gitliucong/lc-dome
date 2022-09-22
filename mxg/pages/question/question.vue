<template>
	<view>
		<!-- 头部搜索框 -->
		<Search></Search>
		<!-- 中间部分 -->
		<view class="aside">
			<!-- 导航 -->
			<view class="nav scroll-x">
				<view v-for="(item,index) in nav" :class="{'nav-text':true,'active':activeIndex == index}"
					:key="item.id" @tap="toIndex(index)">
					{{item.name}}
				</view>
			</view>

			<swiper class="swiper-box" :current="activeIndex" @change="changeCurrent">
				<swiper-item v-for="(item,index) in 3">
					<scroll-view class="scroll-box" scroll-y="true">
						<queslist></queslist>
					</scroll-view>
				</swiper-item>
			</swiper>


		</view>

	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	import Search from '@/components/search-input/Search.vue'
	import queslist from '@/components/quesList/quesList.vue'
	export default {
		setup(props, context) {
			const data = reactive({
				activeIndex: 0,
				nav: [{
					id: '1',
					name: '热门回答'
				}, {
					id: '2',
					name: '最新问题'
				}, {
					id: '3',
					name: '等待回答'
				}, ]
			})
			const changeCurrent = (e) => {
				console.log(e);
				data.activeIndex = e.detail.current
				// getArticle().then(res => {
				// 	data.articleList = res.data
				// })
			}
			const toIndex = (index) => {
				data.activeIndex = index
			}
			return {
				...toRefs(data),
				changeCurrent,
				toIndex
			}
		},
		components: {
			Search,
			queslist
		},
	}
</script>

<style lang="scss">
	.aside {
		margin-top: 40px;

		.nav {
			height: 50px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border: 0.5px solid #eee;
		}

		.swiper-box {
			height: calc(100vh - 134px);
		}

		.scroll-box {
			height: calc(100vh - 134px);
		}
		
		.nav-text {
			position: relative;
			flex: 1;
			display: inline-block;
			width: 75px;
			font-size: 15px;
			line-height: 40px;
			text-align: center;
		}
		
		.nav-text::after {
			content: '';
			position: absolute;
			bottom: 2px;
			left: 50%;
			transform: translateX(-50%);
			width: 0;
			border: 0 solid blue;
			transition: 0.3s all;
		}
		
		.nav-text.active {
			color: blue;
		}
		
		.nav-text.active::after {
			width: 20px;
			border-width: 1px;
		}
		
	}
</style>
