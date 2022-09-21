<template>
  <div class="about">
    <header>
      <p class="title center"><i class="el-icon-tickets"></i>关于我们</p>
    </header>
    <main class="center">
      <h1>Store（参考小米商城）</h1>

      <h2>前言</h2>
      <p>
        2020年寒假尤其特殊，因为新型冠状病毒肺炎疫情，学校至今没有开学。想起上学期利用课余时间学习了<span>Vue.js</span>、<span>Node.js</span>，一直想做个完整的项目实战一下，但之前在学校并没有那么多的时间。现在恰好有时间，就想着做一个项目巩固之前学到的东西。
      </p>
      <p>
        思来想去，最后决定模仿
        <a href="http://www.mi.com">小米商城</a>
        做一个电商项目。可能时间隔得有点久了，之前学的东西很多都差不多忘记了，做这个项目基本上都是看着官方的文档一点一点做的。在家里也免不了有各种各样的事情耽误了项目的进度。现在终于差不多做好了，分享出来，新手上路，如有错误，请多多指教。
      </p>

      <h2>说明</h2>
      <blockquote>
        <p>
          本项目前后端分离，前端参考
          <a href="http://www.mi.com">小米商城</a>
          实现，但与小米官方没有关系，纯属个人瞎搞，若需要购买小米产品请到小米官方商城。
        </p>
      </blockquote>
      <blockquote>
        <p>
          这是本项目的前端，后端请移步到
          <a href="https://github.com/hai-27/store-server">store-server</a> 。
        </p>
      </blockquote>
      <blockquote>
        <p>
          前端已经部署在阿里云，欢迎访问
          <a href="http://106.15.179.105/">http://106.15.179.105/</a>
          （没有兼容移动端，请使用电脑访问）。
        </p>
      </blockquote>
      <blockquote>
        <p>
          后端也已经部署在阿里云，接口地址已经修改为线上地址，本地运行前端也可以正常访问后端。
        </p>
      </blockquote>
      <blockquote>
        <p>
          本人在读本科大三，今年暑假即将开始实习，后面的时间可能没有那么的自由，但会不定期的更新完善该项目，如有问题请直接在
          Issues 中提。
        </p>
      </blockquote>
      <blockquote>
        <p>
          如果觉得这个项目还不错，您可以点右上角<span>Star</span>支持一下，
          谢谢！ _
        </p>
      </blockquote>

      <h2>项目简介</h2>
      <p>
        本项目前后端分离，前端基于
        <span>Vue</span>+ <span>Vue-router</span>+ <span>Vuex</span>+
        <span>Element-ui</span>+
        <span>Axios</span>
        ，参考小米商城实现。后端基于
        <span>Node.js(Koa框架)</span>+
        <span>Mysql</span>
        实现。
      </p>
      <p>
        前端包含了11个页面：首页、登录、注册、全部商品、商品详情页、关于我们、我的收藏、购物车、订单结算页面、我的订单以及错误处理页面。
      </p>
      <p>
        实现了商品的展示、商品分类查询、关键字搜索商品、商品详细信息展示、登录、注册、用户购物车、订单结算、用户订单、用户收藏列表以及错误处理功能。
      </p>
      <p>
        后端采取了MVC模式，根据前端需要的数据分模块设计了相应的接口、控制层、数据持久层。后端传送地址
        <a href="https://github.com/hai-27/store-server">store-server</a> 。
      </p>

      <h2>技术栈</h2>
      <ul>
        <p>
          <b>前端: </b>
          <span>Vue</span>+ <span>Vue-router</span>+ <span>Vuex</span>+
          <span>Element-ui</span>+
          <span>Axios</span>
        </p>
        <p>
          <b>后端: </b>
          <span>Node.js</span>、<span>Koa框架</span>
        </p>
        <p>
          <b>数据库: </b>
          <span>Mysql</span>
        </p>
      </ul>

      <h2>功能模块</h2>

      <h3>登录</h3>
      <p>
        页面使用了element-ui的
        <span>Dialog</span>
        实现弹出蒙版对话框的效果，
        <span>登录</span>
        按钮设置在App.vue根组件，通过
        <span>vuex</span>
        中的
        <span>showLogin</span>
        状态控制登录框是否显示。
      </p>
      <p>
        用户输入的数据往往是不可靠的，所以本项目前后端都对登录信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。
      </p>

      <h3>注册</h3>
      <p>
        页面同样使用了element-ui的
        <span>Dialog</span>
        实现弹出蒙版对话框的效果，
        <span>注册</span>
        按钮设置在App.vue根组件，通过父子组件传值控制注册框是否显示。
      </p>
      <p>
        用户输入的数据往往是不可靠的，所以本项目前后端同样都对注册信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。
      </p>

      <h3>首页</h3>
      <p>
        首页主要是对商品的展示，有轮播图展示推荐的商品，分类别对热门商品进行展示。
      </p>

      <h3>全部商品</h3>
      <p>
        全部商品页面集成了全部商品展示、商品分类查询，以及根据关键字搜索商品结果展示。
      </p>

      <h3>商品详情页</h3>
      <p>
        商品详情页主要是对某个商品的详细信息进行展示，用户可以在这里把喜欢的商品加入购物车或收藏列表。
      </p>

      <h3>我的购物车</h3>
      <p>购物车采用vuex实现，页面效果参考了小米商城的购物车。</p>
      <p>
        详细实现过程请看：
        <a
          href="https://github.com/hai-27/hai-27.github.io/blob/master/page/%E5%9F%BA%E4%BA%8EVuex%E5%AE%9E%E7%8E%B0%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E%E8%B4%AD%E7%89%A9%E8%BD%A6.md"
          >基于Vuex实现小米商城购物车</a
        >
      </p>

      <h3>订单结算</h3>
      <p>
        用户在购物车选择了准备购买的商品后，点击“去结算”按钮，会来到该页面。<br />
        用户在这里选择收货地址，确认订单的相关信息，然后确认购买。
      </p>

      <h3>我的收藏</h3>
      <p>
        用户在商品的详情页，可以通过点击加入
        <span>喜欢</span>
        按钮，把喜欢的商品加入到收藏列表。
      </p>

      <h3>我的订单</h3>
      <p>对用户的所有订单进行展示。</p>

      <h2>运行项目</h2>
      <b>注意: </b>
      <ul>
        <p>
          后端接口地址已经修改为线上的地址，本地运行会直接分为我部署在服务器的后端。<br />
          为了方便测试，数据库数据没有加密，注册时切记
          <b>不要使用自己的常用密码</b>。<br />
          如果需要自己运行后端，请移步到
          <a href="https://github.com/hai-27/store-server">store-server</a>
          clone后端项目，并修改前端的接口地址为您的服务器地址。
        </p>
      </ul>
      <pre>
        <code>1. Clone project

        git clone https://github.com/hai-27/vue-store.git

        2. Project setup 

        cd vue-store
        npm install

        3. Compiles and hot-reloads for development

        npm run serve

        4. Compiles and minifies for production

        npm run build</code>
      </pre>

      <p><b>作者</b><a href="https://github.com/hai-27">hai-27</a></p>
      <p>2020年3月8日</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.about {
  background-color: #f5f5f5;
  width: 1225px;
  margin: 0 auto;
  header {
    background-color: #fff;
    border-bottom: 2px solid #ff4700;
    .title {
      height: 60px;
      line-height: 60px;
      font-size: 28px;
      i {
        padding-right: 10px;
        color: #ff4700;
      }
    }
  }

  main {
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 40px;
    font-size: 16px;
    background-color: #fff;

    h1,
    h2 {
      margin: 24px 0 16px;
      padding-bottom: 7px;
      border-bottom: 1px solid #ccc;
      font-weight: 600;
    }

    h3 {
      margin: 24px 0 16px;
      font-weight: 600;
    }

    p {
      line-height: 1.5em;
      margin-bottom: 16px;
    }

    span {
      padding: 0.2em 0.4em;
      font-size: 85%;
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
    }

    a {
      color: #0366d6;
      text-decoration: none;
    }
    a:hover {
      text-decoration: initial;
    }

    blockquote {
      padding: 0 1em;
      color: #6a737d;
      border-left: 0.25em solid #dfe2e5;
    }

    ul {
      margin-top: 0;
      margin-bottom: 16px;
      padding-left: 32px;
    }

    pre {
      margin-bottom: 16px;
      padding: 16px;
      overflow: auto;
      font-size: 85%;
      line-height: 1.45;
      background-color: #f6f8fa;
      border-radius: 3px;
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
      code {
        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
        display: inline;
        padding: 0;
        margin: 0;
        line-height: inherit;
        border: 0;
        font-size: 100%;
        white-space: pre;
      }
    }
  }
}
</style>
