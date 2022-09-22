<template>
	<view class="list">
		<view class="hot-list" v-for="item in hotList" :key="item.id" @click="toContent(item.id)">
			<view class="title">{{item.title}}</view>
			<view class="infos">
				<view class="infos-left">
					<text>{{item.reply}}回答  </text>
					<text>  ·{{item.viewCount}}浏览</text>
				</view>
				<view class="infos-right">
					<text>{{item.nickName}} </text>
					<text> ·{{item.createDate}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getHots
	} from "@/utils/question/question"
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({
				hotList: [], //热门问答列表数据
				page: 1,
				pagesize: 10,
			})
			getHots(data.page, data.pagesize).then(res => {
				console.log(res.data.records);
				data.hotList = res.data.records
			})
			const toContent = (id) =>{
				uni.navigateTo({
					url:`/pages/detail/content?id=${id}&status=false`
				})
			}
			return {
				...toRefs(data),
				toContent
			}
		},
	}
</script>

<style lang="scss">
.list {
			.hot-list {
				padding: 16px;
				border-bottom: 0.5px solid #f1f1f1;
				min-height: 44px;

				.title {
					font-size: 18px;
					font-weight: 700;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
				}

				.infos {
					display: flex;
					justify-content: space-between;
					font-size: 14px;
					color: #999;
					padding-right: 5px;
				}
			}
		}
</style>