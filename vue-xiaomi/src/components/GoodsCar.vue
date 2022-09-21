<template>
	<!-- <div class="goodsbox"></div> -->
	<div @click="toDetails">
		<el-card class="box-card" shadow="hover">
			<img :src="'http://101.132.181.9:3000/' + data.product_picture" alt="" />
			<p class="nametext">{{ data.product_name }}</p>
			<p class="info">{{ data.product_title }}</p>
			<p>
				<span>{{ data.product_selling_price }}元</span>
				<del>{{ data.product_price }}元</del>
			</p>
		</el-card>
	</div>
</template>

<script>
	export default {
		props: ['categoryNameData'],
		name: '',
		components: {},
		data() {
			return {
				data: this.categoryNameData,
			};
		},
		methods: {
			toDetails() {
				this.$router.push({
					path: '/details',
					query: {
						productID: this.data.product_id,
					},
				});
			},
		},
		computed: {},
		created() {},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.box-card {
		width: 220px;
		height: 340px;
		text-align: center;
		// margin: 10px;
		.nametext {
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
		}
		img {
			width: 160px;
			height: 160px;
		}
		.info {
			color: #bcbcbc;
			font-size: 12px;
			margin: 10px 0;
		}
		span {
			color: #ff7517;
			margin-right: 20px;
		}
	}
</style>