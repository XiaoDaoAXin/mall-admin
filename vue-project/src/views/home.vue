<template>
    <div style="height:100%">
        <el-container style="">
            <el-aside width="180px" style="background-color:#304156">
                <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" background-color="#304156" text-color="#bfcbd9" active-text-color="#ffd04b">
                    <!-- <el-submenu index="1"> -->
                      <el-menu-item :route="souye" style="min-width:160px" class="menu-item" index="2-1">
                                <template  slot="title">
                                     <i class="el-icon-s-home"></i>
                                     <span slot="title" class="title ">首页</span>
                                </template>
                        </el-menu-item>
                        <!-- <template slot="title">
                            <i class="el-icon-s-home"></i>
                            <span slot="title" class="title ">首页</span>
                        </template> -->
                    <!-- </el-submenu> -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-shopping-bag-2"></i>
                            <span slot="title" class="title">商品</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <template slot="title">分组一</template> -->
                            <el-menu-item style="min-width:160px" class="menu-item" index="2-1">
                                <template slot="title">
                                    <i class="el-icon-s-fold"></i>
                                    <span slot="title" class="two_title">商品列表</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-2">
                                <template slot="title">
                                    <i class="el-icon-folder-add"></i>
                                    <span slot="title" class="two_title">添加商品</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-3">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span slot="title" class="two_title">商品分类</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-4">
                                <template slot="title">
                                    <i class="el-icon-s-operation"></i>
                                    <span slot="title" class="two_title">商品类型</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-5">
                                <template slot="title">
                                    <i class="el-icon-s-ticket"></i>
                                    <span slot="title" class="two_title">品牌管理</span>
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span slot="title" class="title">订单</span>
                        </template>
                        <el-menu-item-group background-color="#1f2d3d">
                            <!-- <template slot="title">分组一</template> -->
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-1">
                                <template slot="title">
                                    <i class="el-icon-s-fold"></i>
                                    <span slot="title" class="two_title">订单列表</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-2">
                                <template slot="title">
                                    <i class="el-icon-setting"></i>
                                    <span slot="title" class="two_title">订单设置</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-3">
                                <template slot="title">
                                    <i class="el-icon-folder-delete"></i>
                                    <span slot="title" class="two_title">退货申请处理</span>
                                </template>
                            </el-menu-item>
                            <el-menu-item style="min-width:160px" class="menu-item" index="1-4">
                                <template slot="title">
                                    <i class="el-icon-edit-outline"></i>
                                    <span slot="title" class="two_title">退货原因设置</span>
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-collection"></i>
                            <span slot="title" class="title">营销</span>
                        </template>
                        <el-menu-item-group>
                            <!-- <template slot="title">分组一</template> -->
                            <el-menu-item v-for="(t,index) in marketTab" style="min-width:160px" 
                            class="menu-item" 
                            :route="`${t.url}`"
                            :key="index" 
                            :index="index+''">
                                <template slot="title">
                                    <i :class="t.icon"></i>
                                    <span slot="title" class="two_title">{{t.title}}</span>
                                </template>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="padding:none;height:50px">
                    <span class="hamburger el-icon-s-fold"></span>
                    <span class="Breadcrumb">
                        <el-breadcrumb separator="/">
                            <el-breadcrumb-item :to="{ path: '/souye' }">首页</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/new' }"> 商品</el-breadcrumb-item>
                            <el-breadcrumb-item>商品列表</el-breadcrumb-item>
                        </el-breadcrumb>
                    </span>
                    <span class="wrapper">
                        <el-dropdown trigger="click" placement="top">
                            <span class="el-dropdown-link">
                                <img class="apple" src="../assets/timg.jpg" alt="">
                                <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>首页</el-dropdown-item>
                                <el-dropdown-item>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </span>
                </el-header>
                <el-main style="background-color:#fff">
                    <div class="main_content">
                        <!-- 路由嵌套 右侧显示-->
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
export default {
  data() {
    return {
      souye:"souye",
      value: "",
      index: "",
      shopTab: [
        {
          id: 31,
          title: "商品列表",
          // 路由名字
          url: "/shopList",
          // 图标
          icon: "el-icon-s-fold"
        },
        {
          id:32,
          title: "添加商品",
          url: "order",
          icon: "search"
        },
        {
          id:33,
          title: "我的",
          url: "mine",
          icon: "friends-o"
        }
      ],

      marketTab: [
        {
          title: "新品推荐",
          // 路由名字
          url: "new",
          // 图标
          icon: "el-icon-sold-out"
        },
        {
          title: "人气推荐",
          url: "hot",
          icon: "el-icon-male"
        },
        {
          title: "优惠列表",
          url: "coupon",
          icon: "el-icon-s-finance"
        }
      ]
    };
  },
  computed: {
    swiperComputed() {
      // 切割成10个宫格
      return this.swiper.slice(0, 10);
    }
  },
  methods: {}
};
</script>


<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
  text-decoration: none;
}
html,
body,
#app,
.el-container {
  height: 100%;
}
/*----------- 自定义样式-------------- */
.color-danger {
  color: #f56c6c;
}
.overview-item-value {
  font-size: 24px;
  text-align: center;
}
.overview-item-title {
  font-size: 16px;
  color: #606266;
}

.el-aside {
  background-color: #304156;
  /* width: 36px!important; */
}

.title {
  margin-left: 10px;
  margin-right: 60px;
}
.el-menu,
.el-menu-item-group {
  background-color: #1f2d3d;
}

.two_title {
  margin-left: 10px;
}
.el-menu-item {
  padding: 0px;
}
.menu-item {
  min-width: none;
}
.el-submenu__icon-arrow {
  display: none;
}
.el-header {
  border-bottom: 1px solid #e6e6e6;
}
.el-header,
.el-footer {
  padding: 0px;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.el-submenu__title {
  font-size: 16px;
}
.el-menu-item-group__title {
  display: none;
}
.el-breadcrumb {
  line-height: 50px;
  height: 50px;
  margin-left: 10px;
  float: left;
}
.el-breadcrumb__item {
  margin-top: 18px;
}

/* mian_box  */
.main_content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main_box {
  margin-top: 40px;
  overflow: hidden;
}
.main_box .address-layout {
  overflow: hidden;
}
.main_box .address-layout li {
  width: 167px;
  height: 60px;
  border: 1px solid #dcdfe6;
  float: left;
  padding: 20px;
  float: left;
  margin-right: 20px;
}
.main_box .address-layout .left {
  float: left;
  font-size: 60px;
  color: #409eff;
  width: 60px;
  height: 60px;
}
.main_box .address-layout li .right {
  float: right;
}
.main_box .address-layout li .right p {
  line-height: 25px;
  font-size: 16px;
  color: #909399;
  text-align: left;
}

.main_box .address-layout li .right .p2 {
  margin-top: 10px;
  font-size: 18px;
  color: #606266;
}
.un-handle-layout {
  width: 884px;
  height: 207px;
  margin-top: 20px;
  border: 1px solid #dcdfe6;
}
.un-handle-layout .title {
  color: #606266;
  height: 48px;
  line-height: 48px;
  background: #f2f6fc;
  font-weight: 700;
  margin: 0px;
  text-align: left;
  text-indent: 20px;
}
.un-handle-layout .un-handle-content {
  overflow: hidden;
  padding: 20px 40px;
}
.un-handle-layout .un-handle-content li {
  line-height: 40px;
  border-bottom: 1px solid #ebeef5;
  font-size: 15px;
  width: 250px;
  height: 40px;
  margin-right: 24px;
  float: left;
}
.un-handle-layout .un-handle-content li span:nth-child(1) {
  float: left;
}
.un-handle-layout .un-handle-content li span:nth-child(2) {
  float: right;
  color: red;
}
.un-handle-layout .un-handle-content li:nth-child(3n) {
  margin-right: 0px;
}

.lsx_total {
  width: 100%;
  height: 185px;
  overflow: hidden;
  margin-top: 20px;
  line-height: 1.4;
}
.lsx_total .shop_total {
  width: 432px;
  border: 1px solid #dcdfe6;
  margin-right: 18px;
  float: left;
}
.lsx_total .user_total {
  width: 432px;
  border: 1px solid #dcdfe6;
  float: left;
}
.lsx_total .title {
  height: 48px;
  line-height: 48px;
  text-align: left;
  text-indent: 20px;
  color: #606266;
  background-color: #f2f6fc;
  font-weight: 700;
  margin: 0px;
}
.lsx_total .content {
  padding: 40px;
}

/*------------------ header--------------- */
.el-header {
  padding: none;
  background-color: #fff;
  bottom: 1px solid gray;
  line-height: 58px;
}
.hamburger {
  font-size: 30px;
  line-height: 58px;
  float: left;
  margin-top: 11px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.wrapper {
  float: right;
}
.apple {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-top: 5px;
}
/* ----------------------------- */
.el-aside {
  background-color: #d3dce6;
  color: #bfcbd9;
  font-size: 16px;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  height: 100%;
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 100%;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
