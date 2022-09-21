<template>
  <div>
    <div class="myCart">
      <div class="btn">
        <el-button class="btn-t" type="text" icon="el-icon-s-order"
          ><span>我的订单</span></el-button
        >
      </div>
    </div>
    <div class="myCart-content">
      <div class="empty">
        <h1>您的订单还是空的！</h1>
        <p>快去购物吧！</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
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
<style scoped lang='scss'>
.myCart {
  height: 80px;
  line-height: 100px;
  border-bottom: 3px solid #ff6700;
  .btn {
    width: 1225px;
    margin: 0 auto;
    .btn-t {
      font-size: 28px;
      color: #ff6700;
      span {
        color: #000;
      }
    }
  }
}
.myCart-content {
  background-color: #f5f5f5;
  height: 500px;
  overflow: hidden;
  .empty {
    width: 1225px;
    height: 300px;
    padding: 0 0 130px 558px;
    margin: 65px auto;
    background: url(http://101.132.181.9/img/cart-empty.8b316431.png) no-repeat
      124px 0;
    color: #b0b0b0;
    overflow: hidden;
    h1{
      margin-top: 70px;
    }
    p{
      margin-top: 20px;
    }
  }
}
</style>
