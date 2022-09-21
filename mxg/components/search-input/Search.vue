<template>
	<view class="search-box">
		<input class="search-input iconfont" type="text" placeholder="&#xe651   搜索你想要的内容" >
	</view>

</template>

<script>
	
	export default {
		name: "searchinput",
	
	}
</script>

<style lang="scss" scoped>
	.search-box {
		position: fixed;
		left: 0;
		top: 0;
		height: 44px;
		padding: 7px 0;
		z-index: 9999;
		width: 100%;
		background-color: rgb(52, 93, 194);;
		.search-input {
			background-color: #f8f8f8;
			height: 30px;
			// line-height: 30px;
			text-align: center;
			border-radius: 30rpx;
			margin: 0 20rpx;
		}
	}
</style>
