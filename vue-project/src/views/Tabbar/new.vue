<template>
    <div class="new_box">
        <div class="screen">
            <div class="head clearfix">
                <i class="el-icon-search fl"></i>
                <span class="fl">筛选搜索</span>
                <button type="button" class="el-button el-button--primary el-button--small" style="float: right;">
                    <span @click="searchShop()">
                        查询搜索
                    </span>
                </button>
                <button type="button" class="el-button el-button--default el-button--small" style="float: right; margin-right: 15px;">
                    <span @click="clearInput()">
                        重置
                    </span>
                </button>
            </div>
            <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">商品名称：</label>
                <div class="el-form-item__content ">
                    <div class="input-width el-input el-input--small">
                        <el-input placeholder="商品名称" v-model="shopInput" clearable>
                        </el-input>
                    </div>
                </div>
            </div>
            <!---->
            <div class="el-form-item el-form-item--small">
                <label class="el-form-item__label" style="width: 140px;">推荐状态</label>
                <div class="el-form-item__content ">
                    <div class="input-width el-input el-input--small">
                        <el-select v-model="value" clearable placeholder="请选择">
                            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                </div>
            </div>
        </div>
        <div class="shuju el-card__body clearfix">
            <i class="el-icon-tickets fl"></i>
            <span class="fl">数据列表</span>
            <button type="button" class="el-button btn-add el-button--default el-button--mini fr">
                <span>选择商品</span>
            </button>
        </div>

        <div class="table-container">
            <el-table :default-sort="{prop: 'xuhao', order: 'ascending'}" border ref="multipleTable" :data="nowList" tooltip-effect="dark" @selection-change="handleSelectionChange" style="width: 100%;margin-top:20px">
                <el-table-column type="selection" width="57" align="center"></el-table-column>
                <el-table-column type="index" label="编号" width="120" align="center"></el-table-column>

                <el-table-column label="商品名称" width="250" align="center" class="el-table_8_column_61  is-center   is-leaf">
                    <template slot-scope="scope">
                        <p>{{scope.row.mingchen1}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="是否推荐" width="200" align="center">
                    <template slot-scope="scope">
                        <p>
                            <el-switch v-model="scope.row.ifhope"></el-switch>
                        </p>
                    </template>
                </el-table-column>
                <el-table-column prop="xuhao" label="排序" width="160" align="center"></el-table-column>
                <el-table-column label="状态" width="160" align="center">
                    <template slot-scope="scope">
                        <p>{{scope.row.ifhope?"推荐中":"未推荐"}}</p>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">

                        <div class="cell">
                            <button type="button" class="el-button el-button--text el-button--mini">
                                <el-button type="text" @click="open(scope.$index, scope.row)">设置排序</el-button>
                            </button>
                            <button type="button" class="el-button el-button--text el-button--mini">
                                <el-button type="text" @click="deleteOpen(scope.$index, scope.row)">删除</el-button>
                            </button>
                        </div>

                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div class="control clearfix">
            <div class="batch-operate-container fl clearfix">
                <div class="el-select el-select--small fl">
                    <!---->
                    <div class="el-input el-input--small el-input--suffix">
                        <el-select v-model="pl_value" clearable placeholder="批量操作">
                            <el-option v-for="item in pl_options" :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <span class="el-input__suffix">
                            <span class="el-input__suffix-inner">
                                <i class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                                <!---->
                            </span>
                            <!---->
                        </span>
                        <!---->
                    </div>
                </div>
                <button type="button" class="el-button search-button el-button--primary el-button--small fl" style="margin-left: 20px;">
                    <!---->
                    <!---->
                    <span>
                        确定
                    </span>
                </button>
            </div>

            <div class="fr clearfix pagination-container">
                <div class="el-pagination is-background">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="newList.length">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      //商品输入框的值
      shopInput: "",
      //选择器
      pl_options: [
        {
          value: "选项1",
          label: "设为推荐"
        },
        {
          value: "选项2",
          label: "取消推荐"
        },
        {
          value: "选项3",
          label: "删除"
        }
      ],
      pl_value: "",

      //批量的输入框
      options: [
        {
          value: "选项1",
          label: "未推荐"
        },
        {
          value: "选项2",
          label: "推荐中"
        }
      ],
      value: "",

      //分页功能
      //当前页
      currentPage: 1,
      //当前页的条数
      pageNumber: 5,

      //总共的列表数据
      newList: [],
      //当前显示的列表数据
      nowList: [],
      //单选多选
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true,
      check: true
    };
  },
  methods: {
    //单选多选
    handleCheckAllChange(val) {
      //    console.log(this.newList);
      this.checkedCities = val ? this.newList : [];
      // this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.checkedCities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },

    //清空输入框
    clearInput() {
      this.shopInput = "";
      this.value = "";
    },

    //删除推荐商品信息

    //表格操作
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //获取设置排序的参数
    //设置排序弹出窗
    open(index, row) {
      //  console.log(index, row);
      this.$prompt("设置排序", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[1-9]\d*|0$/,
        inputErrorMessage: "请输入正整数"
      })
        .then(({ value }) => {
          let change_huohao = row.huohao;

          //修改数据库的排序值
          this.$axios
            .get("http://localhost:3000/new/changeXuhao?", {
              params: {
                huohao: change_huohao,
                xuhao: value
              }
            })
            .then(data => {
              this.nowList = data.data;
            });
          this.$message({
            type: "success",
            message: "修改编号为: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },

    //删除推荐商品数据
    deleteOpen(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          for(var d =0 ; d <  this.newList.length;d++){
                if(this.newList[d] == row){
                    // console.log(123)
                    this.newList.splice(d, 1)
                    this.nowList = this.newList 
                }
          }
        //   this.newList.splice(index, 1) 
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //分页处理
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.pageNumber = val;
      this.nowList = this.newList.slice(
        (this.currentPage - 1) * this.pageNumber,
        this.currentPage * this.pageNumber
      );
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.nowList = this.newList.slice(
        (this.currentPage - 1) * this.pageNumber,
        this.currentPage * this.pageNumber
      );
    },

    //查询商品
    async searchShop() {
      var searchShopData = await this.$axios.get(
        "http://localhost:3000/new/searchShop?",
        {
          params: {
            mingchen: this.shopInput,
            ifhope: this.value
          }
        }
      );
      this.nowList = searchShopData.data;
    }
    //删除推荐商品信息

    // async onchange(i, bool) {
    //   let change_Data = await this.$axios.get(
    //     "http://localhost:3000/new/changeStatust?index" + i + "&ifhope" + bool
    //   );
    // }
  },
  computed: {},

  async created() {
    let data = await this.$axios.get("http://localhost:3000/new/newlist");
    this.newList = data.data;
    this.nowList = this.newList.slice(
      (this.currentPage - 1) * this.pageNumber,
      this.currentPage * this.pageNumber
    );
    // console.log(this.newList);
  }
};
</script>


<style lang="scss">
.fl {
  float: left;
}
.fr {
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.el-dropdown-menu__item {
  width: 160px;
  height: 34px;
  text-align: center;
}
.clearfix:after {
  clear: both;
}
.new_box {
  .screen {
    width: 1080px;
    height: 84px;
    padding: 20px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    .head {
      line-height: 1.5;

      i {
        margin-top: 5px;
      }
      span {
        vertical-align: middle;
      }
    }
    .el-form-item {
      float: left;
      // width: 340px;
      height: 33px;
      .el-form-item__label {
        float: left;
      }
      .el-form-item__content {
        float: right;
      }
    }
  }
  .shuju {
    margin-top: 20px;
    width: 1080px;
    line-height: 58px;
    border: 1px solid #ebeef5;
    padding: 10px 20px;
    i {
      font-size: 16px;
      margin-top: 12px;
    }
    span {
      line-height: 1.5;
      margin-top: 7px;
    }
  }

  .table-container {
    margin-top: 20px;
    line-height: 1.15;
  }

  .control {
    margin-top: 20px;
    width: 1120px;
    line-height: 1.15;
    .batch-operate-container {
      width: 296px;
    }
    .pagination-container {
      width: 458px;
      .el-input__inner {
        height: 28px;
      }
    }
  }
}
</style>


