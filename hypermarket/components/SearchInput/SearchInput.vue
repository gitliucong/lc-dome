<template>
	<view class="searchipt">
		<input type="text" placeholder="搜索">
	</view>
</template>

<script>
	export default {
		name:"SearchInput",
		data() {
			return {
				
			};
		}
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