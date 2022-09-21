<template>
	<div>
		<!-- 轮播图 -->
		<div class="HomeBlock">
			<el-carousel height="500px">
				<el-carousel-item v-for="item in carouselData" :key="item.carousel_id">
					<h3 class="small">
						<img :src="'http://101.132.181.9:3000/' + item.imgPath" alt="" />
					</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 商品列表 -->
		<div class="goodsBody">
			<!-- 手机商品列表 -->
			<div class="goodsTitle"><p>手机</p></div>
			<div class="HomeGoodsBox">
				<div class="left" style="margin-right: 20px;">
					<img
						src="http://101.132.181.9:3000/public/imgs/phone/phone.png"
						alt=""
					/>
				</div>
				<div class="right">
					<GoodsCar
						v-for="item in categoryNameData"
						:key="item.product_id"
						:categoryNameData="item"
					></GoodsCar>
					<div class="right-last">
						<el-card>浏览更多>></el-card>
					</div>
				</div>
			</div>
			<!-- 家电数据列表 -->
			<div class="goodsTitletwo">
				<p>家电</p>
				<div class="goodsTitletwo-right">
					<p @mouseover="tvhot">热门</p>
					<p @mouseover="tv">电视影音</p>
				</div>
			</div>
			<div class="HomeGoodsBox">
				<div class="left">
					<img
						src="	http://101.132.181.9:3000/public/imgs/appliance/appliance-promo1.png"
						alt=""
					/>
					<img
						src="	http://101.132.181.9:3000/public/imgs/appliance/appliance-promo2.png"
						alt=""
					/>
				</div>
				<div class="right">
					<GoodsCar
						v-for="item in tvhotData"
						:key="item.product_id"
						:categoryNameData="item"
					></GoodsCar>
					<div class="right-last">
						<el-card>浏览更多>></el-card>
					</div>
				</div>
			</div>

			<!-- 配件数据列表 -->
			<div class="goodsTitletwo">
				<p>配件</p>
				<div class="goodsTitletwo-right">
					<p @mouseover="partshot">热门</p>
					<p @mouseover="charger">充电器</p>
					<p @mouseover="protect">保护套</p>
				</div>
			</div>
			<div class="HomeGoodsBox">
				<div class="left">
					<img
						src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo1.png"
						alt=""
					/>
					<img
						src="http://101.132.181.9:3000/public/imgs/accessory/accessory-promo2.png"
						alt=""
					/>
				</div>
				<div class="right">
					<GoodsCar
						v-for="item in partsData"
						:key="item.product_id"
						:categoryNameData="item"
					></GoodsCar>
					<div class="right-last">
						<el-card>浏览更多>></el-card>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import  {login}  from "@/api/api.js"
	import {
		carousel,
		getCategoryName,
		getTvData,
		getProtect,
		getChargerData,
		getTvhotData,
		getPartsData,
	} from '@/api/api.js';
	import GoodsCar from '../components/GoodsCar';
	export default {
		components: {
			GoodsCar,
		},
		data() {
			return {
				carouselData: [], // 轮播图数据
				categoryNameData: [], //手机列表数据
				tvData: [], //家电列表数据
				protectData: [], //保护套列表数据
				chargerData: [], //充电器列表数据
				tvhotData: [], //家电热门列表数据
				partsData: [], //配件热门
			};
		},
		methods: {
			tvhot() {
				getTvhotData({ categoryName: ['电视机', '空调', '洗衣机'] }).then(
					(res) => {
						// console.log(res.data.Product);
						this.tvhotData = res.data.Product;
					},
				);
			},
			tv() {
				getTvData({ categoryName: '电视机' }).then((res) => {
					// console.log(res.data.Product);
					this.tvhotData = res.data.Product;
				});
			},
			partshot() {
				getPartsData({
					categoryName: ['保护套', '保护膜', '充电器', '充电宝'],
				}).then((res) => {
					// console.log(res.data.Product);
					this.partsData = res.data.Product;
				});
			},
			charger() {
				getChargerData({ categoryName: '充电器' }).then((res) => {
					// console.log(res.data.Product);
					this.partsData = res.data.Product;
				});
			},
			protect() {
				getProtect({ categoryName: '保护套' }).then((res) => {
					// console.log(res.data.Product);
					this.partsData = res.data.Product;
				});
			},
		},
		created() {
			// 获取轮播图数据
			carousel().then((res) => {
				// console.log(res.data.carousel);
				this.carouselData = res.data.carousel;
			});
			// 获取手机列表数据
			getCategoryName({ categoryName: '手机' }).then((res) => {
				// console.log(res.data.Product);
				this.categoryNameData = res.data.Product;
			});
			// 获取家电列表数据
			this.tv();
			// 获取保护套列表数据
			this.protect();
			// 获取充电器列表数据
			this.charger();
			// 获取家电热门列表数据
			this.tvhot();
			// 获取配件热门列表数据
			this.partshot();
		},
	};
</script>
<style lang="scss" scoped>
	// 商品列表
	.goodsBody {
		background-color: #f5f5f5;
	}
	.goodsTitle {
		width: 1225px;
		height: 60px;
		line-height: 60px;
		margin: 0 auto;
		p {
			font-size: 22px;
		}
	}
	.goodsTitletwo {
		width: 1225px;
		height: 60px;
		// line-height: 60px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.goodsTitletwo-right {
			width: 200px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			p:hover {
				color: #ff7517;
				border-bottom: 1px solid #ff7517;
			}
		}
		p {
			font-size: 22px;
		}
	}
	.HomeGoodsBox {
		width: 1225px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		// .left {
		// }
		.right {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.box-card {
				width: 234px;
				height: 340px;
				text-align: center;
				// margin-bottom: 20px;
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
				}
			}
			.right-last {
				width: 220px;
				height: 340px;
				line-height: 340px;
				text-align: center;
				font-size: 22px;
				background-color: #fff;
				.el-card {
					width: 220px;
					height: 340px;
				}
			}
		}
	}
	// 轮播图
	.HomeBlock {
		width: 1225px;
		height: 500px;
		margin: 20px auto;
	}
	// 轮播图样式
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	.el-carousel__item:nth-child(2n + 1) {
		background-color: #d3dce6;
	}
</style>