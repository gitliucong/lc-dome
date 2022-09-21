<template>
	<div class="body">
		<div class="header">
			<ul>
				<li>
					<span @click="dialogFormVisibles = true">登录</span>
					|
					<span @click="dialogFormVisible = true">注册</span>
				</li>
				<li><span @click="$router.push('/order')">我的订单</span></li>
				<li><span @click="$router.push('/collect')">我的收藏</span></li>
				<li>
					<span @click="$router.push('/shoppingcart')">
						<i class="el-icon-shopping-cart-full"></i>
						购物车(0)
					</span>
				</li>
			</ul>
		</div>
		<!-- 注册弹框 -->
		<el-dialog
			title="注册"
			:visible.sync="dialogFormVisible"
			align="center"
			width="300px"
			status-icon
		>
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				class="demo-ruleForm"
			>
				<el-form-item prop="userName">
					<el-input
						v-model="ruleForm.userName"
						placeholder="请输入账号"
						prefix-icon="el-icon-user-solid"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="ruleForm.password"
						placeholder="请输入密码"
						prefix-icon="el-icon-view"
						autocomplete="off"
						type="password"
						show-password
					></el-input>
				</el-form-item>
				<el-form-item prop="checkPassword">
					<el-input
						v-model="ruleForm.checkPassword"
						placeholder="请再次输入密码"
						prefix-icon="el-icon-view"
						autocomplete="off"
						type="password"
						show-password
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">
						注册
					</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
		<!-- 登录弹框 -->
		<el-dialog
			title="登录"
			:visible.sync="dialogFormVisibles"
			align="center"
			width="300px"
		>
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				class="demo-ruleForm"
			>
				<el-form-item prop="userName">
					<el-input
						v-model="ruleForm.userName"
						placeholder="请输入账号"
						prefix-icon="el-icon-user-solid"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="ruleForm.password"
						placeholder="请输入密码"
						prefix-icon="el-icon-view"
						type="password"
						show-password
					></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForms('ruleForm')">
						登录
					</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import { getRegister, getLogin ,getShoppingCart} from '@/api/api.js';
	export default {
		name: '',
		components: {},
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPassword !== '') {
						this.$refs.ruleForm.validateField('checkPassword');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.password) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				ruleForm: {
					userName: '',
					password: '',
					checkPassword: '',
				},
				dialogFormVisible: false,
				dialogFormVisibles: false,
				formLabelWidth: '120px',

				rules: {
					userName: [
						{ required: true, message: '请输入用户名', trigger: 'blur' },
						{
							min: 5,
							max: 16,
							message: '长度在 3 到 5 个字符',
							trigger: 'blur',
						},
						// 用户名不合法(以字母开头，允许5-16字节，允许字母数字下划线)
					],
					password: [{ validator: validatePass, trigger: 'blur' }],
					checkPassword: [{ validator: validatePass2, trigger: 'blur' }],
				},
			};
		},
		methods: {
			// 注册
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						getRegister({
							userName: this.ruleForm.userName,
							password: this.ruleForm.password,
						}).then((res) => {
							console.log(res);
						});
						this.$message.success('注册成功！');
						this.dialogFormVisible = false;
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			// 登录
			submitForms(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						getLogin({
							userName: this.ruleForm.userName,
							password: this.ruleForm.password,
						}).then((res) => {
							console.log(res);
							localStorage.setItem('user',JSON.stringify(res.data.user))
							let user = JSON.parse(localStorage.getItem('user'))
							if(user){
								getShoppingCart({user_id:user.user_id}).then(res=>{
									console.log(res);
								})
							}
						});
						// this.$message.success('登录成功！');
						this.dialogFormVisibles = false;
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
		},
		computed: {},
		created() {},
		mounted() {},
	};
</script>
<style scoped lang="scss">
	.header {
		height: 40px;
		line-height: 40px;
		background-color: #3d3d3d;
		color: #b0b0b0;
		ul {
			width: 1225px;
			margin: 0 auto;
			padding-left: 800px;
			
			li {
				margin: 0 10px;
				float: left;
				span:hover {
					color: #fff;
				}
			}
		}
	}
	.el-input,
	.el-button {
		width: 250px;
	}
</style>