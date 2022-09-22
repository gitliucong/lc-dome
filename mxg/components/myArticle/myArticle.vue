<template>
	<!-- 课程列表 -->
	<view class="aside-list">
		<view class="list-box" v-for="item in searchData" :key="item.id" @click="toContent(item.id)">
			<!-- 上 -->
			<view class="list-top">
				<view class="top-left"  :style="`max-width: ${item.imageUrl ? '233':'345'}px;`">
					<view class="title">
						{{item.title}}
					</view>
					<view class="info">
						{{item.summary}}
					</view>
				</view>
				<view class="top-right" v-if="item.imageUrl">
					<img :src="item.imageUrl" alt="">
				</view>
			</view>
			<!-- 下 -->
			<view class="list-btm">
				<text class="author">{{item.nickName}}</text>
				<text>·{{item.updateDate}}</text>
				<text> ·{{item.viewCount}}赞</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSearch } from '@/utils/article/article.js'

	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup(props, context) {
			const data = reactive({
				searchData: [], //课程数据
				page: 1,
				pagesize: 10,
				
			});
			getSearch(data.page, data.pagesize).then(res => {
				console.log(res);
				data.searchData = res.data.records
			})
			const toContent = (id) =>{
				uni.navigateTo({
					url:`/pages/detail/content?id=${id}&status=true`
				})
			}
			return {
				...toRefs(data),
				toContent
			}
		},
		onReachBottom() {
		   this.page ++
		   console.log(this.page);
		   getSearch(this.page, this.pagesize).then(res => {
		    this.searchData = [...res.data.records,...this.searchData]
		   })
		  }
	}
</script>

<style lang="scss">
.aside-list {
			width: 100%;
			height: 100%;
			.list-box {
				width: 375px;
				height: 122px;
				padding: 15px;
				border-bottom: 0.5px solid #f1f1f1;

				.list-top {
					overflow: hidden;
					width: 345px;
					height: 70px;
					display: flex;

					.top-left {
						height: 70px;

						.title {
							font-size: 17px;
							font-weight: 700;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}

						.info {
							padding-top: 2px;
							font-size: 13px;
							color: #999;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;

						}
					}

					.top-right {
						width: 110px;
						margin-left: 2px;

						img {
							width: 110px;
							height: 70px;
							border-radius: 5px;
						}
					}
				}

				.list-btm {
					font-size: 13px;
					color: #999;

					.author {
						color: black;
					}
				}
			}
		}
	
</style>