<template>
	<view class="body">
		/* 内容区 */
		<view class="body-top">
			<view class="header">
				<text class="iconfont icon" @click="goreturn">&#xe8b5</text>
				<view class="header-txt">{{contentData.title}}</view>
			</view>
			<view class="classify">
				<view class="classify-text" v-for="item in contentData.labelList" :key="item.id">{{item.name}}</view>
			</view>
			<view class="title">
				{{contentData.title}}
			</view>
			<view class="information">
				<img src="../../static/images/logo.png" alt="">
				<text>{{contentData.nickName}} </text>
				<text class="info-time"> ·{{contentData.updateDate}}</text>
				<text class="info-read"> ·{{contentData.viewCount}}人阅读</text>
			</view>
			<view class="htmlContent" v-html="contentData.htmlContent"></view>
		</view>
		<!-- 评论区 -->
		<view class="body-bottom" >
			<view class="btm-comment">
				<view class="btm-border"></view>
				<view class="btm-comment-txt">
					热门评论
				</view>
			</view>
			<view class="comment-cont" v-for="item in contentList" :key="item.id">
				<view class="comment-img">
					<img :src="item.userImage" alt="">
				</view>
				<view class="comment-infor">
					<view class="comment-infor-txt">
						<text>{{item.nickName}}</text>
						<text>{{item.createDate}}</text>
					</view>
					<text>{{item.content}}</text>
				</view>
			</view>
		</view>
		/* 发表评论 */
		<view class="publish" v-show="status == 'true'">
			<input class="uni-input" focus placeholder="有何高见,展开讲讲......" />
			<button type="default" size="mini">提交</button>
		</view>
		/* 关注、回答问题 */
		<view class="follow-box" v-show="status == 'false'">
			<view class="follow">
				<text class="iconfont">&#xe613</text>关注问题
			</view>
			<view class="answer">
				<text class="iconfont">&#xe60a</text>回答问题
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getContent,
		getContentList
	} from '@/utils/article/article'
	import {
		useRoute
	} from 'vue-router'
	import {
		ref,
		toRefs,
		reactive
	} from "vue"
	import {onLoad} from "@dcloudio/uni-app"
	export default {
		setup(props, context) {
			const data = reactive({
				contentData: [], //文章内容数据
				contentList: [], //评论内容数据
				status: false,
				id: 0,
			});
			const route = useRoute()
			console.log(route.query.id);
			/* 接收传递过来的状态 status */
			onLoad((option) => {
				data.status = option.status
				data.id = option.id
			})

			/* 文章数据 */
			getContent(route.query.id).then(res => {
				console.log(res);
				data.contentData = res.data
			})
			/* 文章数据评论 */
			getContentList(route.query.id).then(res => {
				console.log(res);
				data.contentList = res.data
			})
			/* 返回上一级 */
			const goreturn = () => {
				uni.navigateBack({
					delta: 1
				})
			}
			return {
				...toRefs(data),
				goreturn,
				getContentList
			}
		}
	}
</script>

<style lang="scss">
	.body-top {
		.header {
			width: 100%;
			position: fixed;
			top: 0;
			left: 0;
			height: 40px;
			line-height: 40px;
			background-color: #fff;
			.header-txt{
				margin-left: 60px;
				font-weight: 700;
				font-size: 16px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			
			.icon {
				position: fixed;
				left: 20px;
				top: 0;
			}
		}

		.classify {
			margin-top: 40px;
			padding: 10px 20px;
			display: flex;

			.classify-text {
				height: 30px;
				line-height: 30px;
				padding: 0 10px;
				border: 1px solid deepskyblue;
				border-radius: 20px;
				margin-left: 10px;
			}
		}

		.title {
			padding: 0 20px;
			font-size: 22px;
			line-height: 27px;
			font-weight: 700;
		}

		.information {
			height: 40px;
			display: flex;
			align-items: center;
			padding: 15px 20px;

			img {
				width: 22px;
				height: 22px;
			}

			text {
				margin-left: 5px;
			}

			.info-time,
			.info-read {
				font-size: 12px;
				color: #999;
			}
		}

		.htmlContent {
			padding: 0 20px;
		}
	}
	.body-bottom{
		padding: 0 20px;
		border-bottom: 1px solid #eee;
		.btm-comment{
			padding: 10px 0 ;
			display: flex;
			.btm-border{
				border-left: 3px solid blue;
			}
			.btm-comment-txt{
				font-weight: 600;
				margin-left: 20px;
			}
		}
		.comment-cont{
			display: flex;
			align-items: center;
			.comment-img{
				width: 25px;
				height: 25px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.comment-infor{
				padding: 10px;
				width: 100%;
				.comment-infor-txt{
					display: flex;
					justify-content: space-between;
					font-size: 12px;
					color: #959da5;
				}
			}
		}
	}
	.publish{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		padding: 15px;
		background-color: #fff;
		.uni-input{
			flex: 1;
			background-color: #eee;
			border-radius: 20px;
			height: 30px;
			padding: 10px;
			margin-right: 10px;
		}
	}
	.follow-box{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		height: 40px;
		line-height: 40px;
		background-color: #eee;
		color: #0290ff;
		font-weight: 600;
		.follow{
			width: 50%;
			text-align: center;
			border-right: 1px solid #ccc;
		}
		.answer{
			width: 50%;
			text-align: center;
		}
	}
</style>
