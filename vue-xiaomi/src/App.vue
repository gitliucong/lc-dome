<template>
	<div id="app">
    <Header></Header>
    <HomeNav></HomeNav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import HomeNav from './components/HomeNav'
import Header from './components/header'
export default {
		name: '',
		components: {
    Footer,
    HomeNav,
    Header,},
		data() {
			return {};
		},
		methods: {},
		computed: {},
		created() {},
		mounted() {},
	};
</script>
<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style: none;
	}
</style>
