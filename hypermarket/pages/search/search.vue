<template>
	<view class="content">
		<view class="searchbox">
			<input class="ipt" type="text" placeholder="请输入您要搜索的商品" :style="`width: ${data.searchVal ? '80':'100'}%;`" v-model="data.searchVal" placeholder-style="color:#aaa;"
				@blur="getSearch" :focus="true" :border="true">
			<button class="mini-btn" type="default" size="mini" v-show="data.searchVal != 0" @click="clear">取消</button>
		</view>
		<view class="aside">
			<view class="item" v-for="item in data.searchList" :key="item.cat_id" @click="godetail(item)">
				{{item.goods_name}}
			</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		reactive
	} from 'vue'
	import {
		getSearchVal
	} from '@/api/api'
	const data = reactive({
		searchVal: '',
		searchList: []
	})
	const clear = () => {
		data.searchVal = ''
		data.searchList = []
	}
	const godetail = (obj: any) => {
		uni.navigateTo({
			url: `/pages/detail/detail?id=${obj.goods_id}`
		})
	}


	let t: null = null
	const getSearch = () => {
		if (data.searchVal == '') {
			return false
		}
		clearTimeout(t)
		t = setTimeout(() => {
			getSearchVal(data.searchVal).then((res: any) => {
				data.searchList = res.message
			})
		}, 1000)

	}
</script>

<style lang="scss">
	.content {
		height: 100vh;
		background-color: #dedede;
		overflow: hidden;
		.searchbox {
			display: flex;
			padding: 20rpx;

			.ipt {
				height: 60rpx;
				background-color: #fff;
			}
		}
	}

	.aside {
		width: 95%;
		background-color: #fff;
		margin-top: 20rpx;
		margin: 0 auto;

		.item {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			height: 80rpx;
			line-height: 80rpx;
			padding: 0 20px;
			border-bottom: 1px dashed #aaa;

		}
	}
</style>
