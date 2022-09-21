<template>
	<div class="Allgoodsbox">
		<div class="goods-nav">
			<p>首页</p>
			>
			<p>商品</p>
			>
			<p>分类</p>
		</div>
		<div class="tabs-box">
			<div class="Classifybox">分类</div>
			<div class="tabs">
				<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
					<el-tab-pane label="全部" name="all"></el-tab-pane>
					<el-tab-pane
						:label="item.category_name"
						v-for="item in ClassifyData"
						:key="item.category_id"
					></el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<div class="goodsList">
			<GoodsCar
				v-for="item in AllProductData"
				:key="item.product_id"
				:categoryNameData="item"
				class="goodscarbox"
			></GoodsCar>
		</div>
		<!-- 分页 -->
		<div class="block">
			<!-- <span class="demonstration">页数较少时的效果</span> -->
			<el-pagination
				layout="prev, pager, next"
				:total="this.AllProductData.length"
			></el-pagination>
		</div>
	</div>
</template>

<script>
	import GoodsCar from '../components/GoodsCar';
	import {
		getAllProduct,
		getClassify,
		getProductByCategory,
	} from '@/api/api.js';
	export default {
		name: '',
		components: {
			GoodsCar,
		},
		data() {
			return {
				activeName: 'all',
				ClassifyData: [], //分类
				AllProductData: [], //全部商品
			};
		},
		methods: {
			handleClick(tab, event) {
				if (tab.index == 0) return this.$router.push('/AllGoods');

				this.$router.push({
					path: '/AllGoods',
					query: { productID: tab.index },
				});
			},
			reload() {
				if (this.$route.query.productID) {
					getProductByCategory({
						categoryID: [this.$route.query.productID],
						currentPage: 1,
						pageSize: 15,
					}).then((res) => {
						// console.log(res.data.Product);
						this.AllProductData = res.data.Product;
					});
					return;
				}
				getAllProduct({ categoryID: [], currentPage: 1, pageSize: 15 }).then(
					(res) => {
						// console.log(res.data.Product);
						this.AllProductData = res.data.Product;
					},
				);
			},
		},
		watch: {
			$route(to, from) {
				if (to.query != from.query) {
					// this.reload();
					this.reload();
				}
			},
		},
		computed: {},
		created() {
			// 全部商品
			this.reload();
			// 分类
			getClassify().then((res) => {
				console.log(res.data.category);
				this.ClassifyData = res.data.category;
			});
		},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.Allgoodsbox {
		width: 1225px;
		margin: 0 auto;
		.goods-nav {
			display: flex;
			align-items: center;
			font-size: 18px;
			height: 60px;
			line-height: 60px;
		}
	}
	.tabs-box {
		display: flex;
		// .tabs {
		// }
	}
	.goodsList {
		display: flex;
		//  justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		.goodscarbox {
			margin: 10px;
		}
	}
</style>