<template>
	<view class="searchipt">
		<input type="text" placeholder="搜索" @click="goSearch">
	</view>
</template>

<script lang="ts" setup>
	
	const goSearch = () =>{
		uni.navigateTo({
			url:'/pages/search/search'
		})
	}
	
</script>

<style lang="scss">
.searchipt{
	width: 100%;
	background-color: #eb4450;
	padding: 10rpx;
	box-sizing: border-box;
	input{
		background-color: #fff;
		height: 70rpx;
		text-align: center;
		border-radius: 10rpx;
	}
}
</style>