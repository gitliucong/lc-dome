<template>
	<div class="detailsbox">
		<div class="detailstop" v-for="item in detailsData" :key="item.product_id">
			<p>{{ item.product_name }}</p>
			<div class="detailstop-right">
				<p>概述</p>
				<p>参数</p>
				<p>用户评价</p>
			</div>
		</div>
		<div class="detailsinfo">
			<div class="detailsinfo-left">
				<div class="block">
					<el-carousel height="600px">
						<el-carousel-item v-for="item in detailsPictureData" :key="item.id">
							<h3 class="small">
								<img
									:src="'http://101.132.181.9:3000/' + item.product_picture"
									alt=""
								/>
							</h3>
						</el-carousel-item>
					</el-carousel>
				</div>
			</div>
			<div
				class="detailsinfo-right"
				v-for="item in detailsData"
				:key="item.product_id"
			>
				<p class="detailsinfo-right-title">{{ item.product_name }}</p>
				<p class="detailsinfo-right-info">
					{{ item.product_intro }}
				</p>
				<p class="detailsinfo-right-name">小米自营</p>
				<p class="detailsinfo-right-price">
					{{ item.product_selling_price }}元
					<del>{{ item.product_price }}元</del>
				</p>
				<div class="detailsinfo-right-pricebox">
					<div>
						<p>{{ item.product_name }}</p>
						<p>
							{{ item.product_selling_price }}元
							<del>{{ item.product_price }}元</del>
						</p>
					</div>
					<p class="detailsinfo-right-total">
						总计：{{ item.product_selling_price }}元
					</p>
				</div>
				<el-button type="primary" class="addcar" @click="addCart">加入购物车</el-button>
				<el-button type="info" class="lick">喜欢</el-button>
				<div class="detailsinfo-right-footer">
					<ul>
						<li>
							<i class="el-icon-circle-check"></i>
							小米自营
						</li>
						<li>
							<i class="el-icon-circle-check"></i>
							小米发货
						</li>
						<li>
							<i class="el-icon-circle-check"></i>
							7天无理由退货
						</li>
						<li>
							<i class="el-icon-circle-check"></i>
							7天价格保护
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { getDetails, getDetailsPicture } from '@/api/api.js';
	export default {
		name: '',
		components: {},
		data() {
			return {
				detailsData: [],
				detailsPictureData: [],
			};
		},
		methods: {
			addCart(){
				console.log(this.detailsData[0].product_id);
				this.$router.push({
					path:'/shoppingcart',
					query:{
						cartId : this.detailsData[0].product_id
					}
				})
			}
		},
		computed: {},
		created() {
			getDetails({ productID: this.$route.query.productID }).then((res) => {
				// console.log(res.data.Product);
				this.detailsData = res.data.Product;
			});
			getDetailsPicture({ productID: this.$route.query.productID }).then(
				(res) => {
					// console.log(res.data.ProductPicture);
					this.detailsPictureData = res.data.ProductPicture;
				},
			);
		},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.detailsbox {
		width: 1225px;
		margin: 0 auto;
		.detailstop {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 60px;
			.detailstop-right {
				width: 200px;
				display: flex;
				justify-content: space-between;
			}
		}
		.detailsinfo {
			display: flex;
			justify-content: space-between;
			.detailsinfo-left {
				// .block {
				width: 50%;

				img {
					width: 100%;
					height: 100%;
				}
				// }
			}
			.detailsinfo-right {
				width: 50%;
				.detailsinfo-right-title {
					font-size: 22px;
					margin-top: 30px;
				}
				.detailsinfo-right-info {
					font-size: 12px;
					margin: 30px 0;
					color: #ccc;
				}
				.detailsinfo-right-name {
					color: orange;
				}
				.detailsinfo-right-price {
					color: orange;
					line-height: 60px;
					border-bottom: 1px solid #ccc;

					del {
						color: #ccc;
					}
				}
				.detailsinfo-right-pricebox {
					width: 100%;
					height: 150px;
					background-color: #f9f9fa;
					margin: 50px 0;
					div {
						display: flex;
						padding: 30px 40px;
						justify-content: space-between;
					}
					.detailsinfo-right-total {
						margin-left: 40px;
						font-size: 22px;
						color: orange;
					}
				}
				.addcar {
					// background-color: #ff6700;
					width: 300px;
					bottom: none !important;
				}
				.lick {
					width: 200px;
				}
				.detailsinfo-right-footer {
					margin-top: 30px;
					ul {
						display: flex;
						li {
							margin-left: 20px;
						}
					}
				}
			}
		}
	}
	.el-carousel__item h3 {
		color: #fff;
		font-size: 14px;
		opacity: 0.75;
		// line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #fff;
	}

	.el-carousel__item:nth-child(2n + 1) {
		background-color: #fff;
	}
</style>