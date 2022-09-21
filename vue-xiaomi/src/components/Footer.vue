<template>
	<div class="footerbox">
		<div class="top">
			<p>7天无理由退换货</p>
			<p>满99元全场免邮</p>
			<p>100%品质保证</p>
		</div>
		<div class="bottom">
			<img src="../assets/imgs/github.png" alt="" />
			<p class="center">
				<span @click="$router.push('/')">首页</span>
				|
				<span @click="$router.push('/AllGoods')">商品</span>
				|
				<span @click="$router.push('/about')">关于我们</span>
			</p>
			<p>商城版权所有 © 2012-2021</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: '',
		components: {},
		data() {
			return {};
		},
		methods: {},
		computed: {},
		created() {},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.footerbox {
		width: 100%;
		background-color: #2f2f2f;
		color: #fff;
		text-align: center;
		.top {
			height: 200px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 28px;
			border-bottom: 1px solid #ccc;
			p {
				padding-left: 40px;
				background: url('../assets/imgs/us-icon.png') no-repeat;
			}
		}
		.bottom {
			height: 200px;
			padding: 20px 0;
			font-size: 16px;
			color: #bbb;
			.center {
				margin: 20px 0;
				span {
					display: inline-block;
					cursor: pointer;
					width: 80px;
					// color: #fff;
				}
			}
		}
	}
</style>