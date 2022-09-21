<template>
  <div>
    <!-- 我的购物车   头标 -->
    <div class="myCart">
      <div class="btn">
        <el-button class="btn-t" type="text" icon="el-icon-shopping-cart-full"
          ><span>我的购物车</span></el-button
        >
        <span class="btn-span">
          我的购物车温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span
        >
      </div>
    </div>
    <!-- 没有商品是显示的页面 -->
    <div class="myCart-content">
      <div class="empty">
        <h1>您的购物车还是空的！</h1>
        <p>快去购物吧！</p>
      </div>
    </div>
    <!-- 购物车 -->
    <div>
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column
            type="selection"
            label="全选"
            width="55"
          ></el-table-column>
          <el-table-column prop="productName" label="商品名称"></el-table-column>
          <el-table-column prop="price" label="单价"></el-table-column>
          <el-table-column prop="number" label="数量"> </el-table-column>
          <el-table-column prop="address" label="小计"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import { getShoppingCart } from "@/api/api.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    /* 删除 */
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
  computed: {},
  created() {
    getShoppingCart( {cartId: this.$route.query.cartId} ).then((res) => {
      console.log(res);

    });
  },
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
    .btn-span {
      color: #757575;
      font-size: 12px;
      margin-left: 20px;
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
    h1 {
      margin-top: 70px;
    }
    p {
      margin-top: 20px;
    }
  }
}
</style>
