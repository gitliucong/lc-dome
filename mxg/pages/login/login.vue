<template>
	<view class="">
		<view class="uni-form-item uni-column">
			<view class="title">手机号码</view>
			<input class="uni-input" focus placeholder="请输入手机号码" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">验证码</view>
			<view class="box">
				<input class="uni-input" focus placeholder="请输入验证码" />
				<button class="mini-btn" type="primary" size="mini">获取验证码</button>
			</view>
		</view>
		<button type="primary" class="login">登录</button>
		<radio-group name="a" style="transform:scale(0.7)">
			<label>
				<radio :value="a" />
			</label>
			<text>请认真阅读并同意</text>
			 <span class="agreement" @click="goAgreement">《用户服务协议》</span>
			 <span class="policy" @click="goPrivacy">《隐私权政策》</span> 
		</radio-group>
		
	</view>
</template>

<script>
	// import {
	// 	getCategory
	// } from '@/utils/category/category.js'
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	export default {
		setup(props, context) {
			const data = reactive({
				
			});
			const goAgreement = ()=>{
				uni.navigateTo({
					url:'/pages/login/agreement'
				})
			}
			const goPrivacy = ()=>{
				uni.navigateTo({
					url:'/pages/login/privacy'
				})
			}
			
			return {
				...toRefs(data),
				goAgreement,
				goPrivacy
			}
		}
	}
</script>

<style lang="scss">
	.uni-form-item{
		background-color: #ccc;
		padding: 10px;
		width: 90%;
		margin: 10px auto;
		border-radius: 5px;
	}
	.box{
		display: flex;
		justify-content: space-between;
		bottom{
			text-align: right;
		}
	}
	.login{
		width: 90%;
	}
	text{
		font-size: 14px;
	}
	span{
		font-size: 14px;
		color: blue;
	}
</style>
