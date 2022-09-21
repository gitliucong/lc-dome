<template>
	<div class="HomeNav">
		<img src="http://101.132.181.9/img/logo.c8999c02.png" alt="" />
		<el-menu
			:default-active="$route.path"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			router
		>
			<el-menu-item index="/">首页</el-menu-item>
			<el-menu-item index="/AllGoods">全部商品</el-menu-item>
			<el-menu-item index="/About">关于我们</el-menu-item>
		</el-menu>
		<el-input
			placeholder="请输入搜索内容"
			v-model="searchKey"
			class="input-with-select"
			style="width: 300px"
		>
			<el-button slot="append" icon="el-icon-search"></el-button>
		</el-input>
	</div>
</template>

<script>
	export default {
		name: '',
		components: {},
		data() {
			return {
				searchKey: '', // 搜索值
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
		},
		computed: {},
		created() {},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.HomeNav {
		width: 1225px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		margin-top: 20px;
		border-bottom: 1px solid #ccc;
	}
</style>
