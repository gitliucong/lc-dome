<template>
	<view class="" >
		<view class="header">
			<text class="iconfont icon" @click="goreturn">&#xe8b5</text>
			<text class="txt">用户服务协议</text>
		</view>
		<text>梦学谷协议如下：xxxxx</text>
	</view>
</template>

<script>
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({
				
			});
			const goreturn = ()=>{
				uni.navigateBack({
					delta:1
				})
			}
			
			return {
				...toRefs(data),
				goreturn
			}
		}
	}
</script>

<style lang="scss">
	.header{
		text-align: center;
		height: 40px;
		line-height: 40px;
		.txt{
			font-weight: 800;
		}
	}
	.icon{
		position: fixed;
		left: 20px;
		top: 0;
	}
</style>