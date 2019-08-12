<template>
    <div>
        <div class="main_box">
            <ul class="address-layout">
                <li>
                    <i class="left el-icon-tickets"></i>
                    <div class="right">
                        <p class="p1">今日订单总数</p>
                        <p class="p2">200</p>
                    </div>
                </li>
                <li>
                    <i class="left el-icon-s-management"></i>
                    <div class="right">
                        <p class="p1">今日销售总额</p>
                        <p class="p2">￥5000.00</p>
                    </div>
                </li>
                <li>
                    <i class="left el-icon-coin"></i>
                    <div class="right">
                        <p class="p1">昨日销售总额</p>
                        <p class="p2">￥5000.00</p>
                    </div>
                </li>
            </ul>
            <div class="un-handle-layout">
                <div class="title">待处理事务</div>
                <ul class="un-handle-content">
                    <li>
                        <span>代付款订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>已完成订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>待确认收货订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>待发货订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>新缺货登记</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>待处理退款申请</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>已发货订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>待处理退货订单</span>
                        <span>（10）</span>
                    </li>
                    <li>
                        <span>广告位即将到期</span>
                        <span>（10）</span>
                    </li>
                </ul>
            </div>
            <div class="lsx_total">
                <div class="shop_total">
                    <div class="title">
                        商品总览
                    </div>
                    <ul class="content ">
                        <div class="el-row">
                            <div class="color-danger overview-item-value  el-col el-col-6">
                                100
                            </div>
                            <div class="color-danger overview-item-value el-col el-col-6">400</div>
                            <div class="color-danger overview-item-value el-col el-col-6">50</div>
                            <div class="color-danger overview-item-value el-col el-col-6">500</div>
                        </div>
                        <div class="el-row">
                            <div class=" overview-item-title   el-col el-col-6">
                                已上架
                            </div>
                            <div class=" overview-item-title el-col el-col-6">已下架</div>
                            <div class=" overview-item-title  el-col el-col-6">库存紧张</div>
                            <div class=" overview-item-title  el-col el-col-6">全部商品</div>
                        </div>
                    </ul>
                </div>
                <div class="user_total">
                    <div class="title">
                        用户总览
                    </div>
                    <ul class="content ">
                        <div class="el-row">
                            <div class="color-danger overview-item-value  el-col el-col-6">
                                100
                            </div>
                            <div class="color-danger overview-item-value el-col el-col-6">200</div>
                            <div class="color-danger overview-item-value el-col el-col-6">1000</div>
                            <div class="color-danger overview-item-value el-col el-col-6">5000</div>
                        </div>
                        <div class="el-row">
                            <div class=" overview-item-title   el-col el-col-6">
                                今日新增
                            </div>
                            <div class=" overview-item-title el-col el-col-6">昨日新增</div>
                            <div class=" overview-item-title  el-col el-col-6">本月新增</div>
                            <div class=" overview-item-title  el-col el-col-6">会员总数</div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>



<style>
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
