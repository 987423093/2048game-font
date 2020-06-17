<template>
  <el-container>
    <el-main>
      <div class="calendar">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="selectTime"
            type="date"
            placeholder="选择日期"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
        <!-- <div>{{selectTime}}</div> -->
      </div>
      <!-- 小周的确认修改弹窗 -->
      <el-dialog title="小周账单修改" :visible.sync="xzDialogVisible" width="90%">
        <el-form :model="xzbillForm">
          <el-form-item>
            <div class="leftParam">早饭金额</div>
            <el-input v-model="xzbillForm.breakfastPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">午饭金额</div>
            <el-input v-model="xzbillForm.lunchPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">晚饭金额</div>
            <el-input v-model="xzbillForm.dinnerPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">水果/下午茶</div>
            <el-input v-model="xzbillForm.afternoonTeaPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">聚餐/活动</div>
            <el-input v-model="xzbillForm.partyActivityPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">夜宵</div>
            <el-input v-model="xzbillForm.bedtimeSnackPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">基金定投</div>
            <el-input v-model="xzbillForm.aipPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">网购衣物/化妆品/零食等</div>
            <el-input v-model="xzbillForm.onlineShoppingPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">其他消费</div>
            <el-input v-model="xzbillForm.otherConsumptionPrice"></el-input>
          </el-form-item>
          <el-button type="primary" @click="xzSubmitModify(xybillForm)">确 定</el-button>
          <el-button @click="xzCancelModify()">取 消</el-button>
        </el-form>
      </el-dialog>
      <!-- 小杨的确认修改弹窗 -->
      <el-dialog title="小芬芬账单修改" :visible.sync="xyDialogVisible" width="90%">
        <el-form :model="xybillForm">
          <el-form-item>
            <div class="leftParam">早饭金额</div>
            <el-input v-model="xybillForm.breakfastPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">午饭金额</div>
            <el-input v-model="xybillForm.lunchPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">晚饭金额</div>
            <el-input v-model="xybillForm.dinnerPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">水果/下午茶</div>
            <el-input v-model="xybillForm.afternoonTeaPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">聚餐/活动</div>
            <el-input v-model="xybillForm.partyActivityPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">夜宵</div>
            <el-input v-model="xybillForm.bedtimeSnackPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">基金定投</div>
            <el-input v-model="xybillForm.aipPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">网购衣物/化妆品/零食等</div>
            <el-input v-model="xybillForm.onlineShoppingPrice"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="leftParam">其他消费</div>
            <el-input v-model="xybillForm.otherConsumptionPrice"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="xySubmitModify(xybillForm)">确 定</el-button>
        <el-button @click="xyCancelModify()">取 消</el-button>
        <!-- </span> -->
      </el-dialog>

      <el-divider></el-divider>
      <div class="billList">
        <div class="param">
          <div class="leftParam">请如实修改哦</div>
          <!-- <el-button class="rightParam" type="text" @click="dialogVisible = true">修改</el-button>
          <el-button class="rightParam" type="text" @click="dialogVisible = true">修改</el-button>-->

          <div class="rightParam" @click="showxzDialog()" style="color:blue">修改</div>
          <div class="rightParam" @click="showxyDialog()" style="color:blue">修改</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">昵称</div>
          <div class="rightParam">小周</div>
          <div class="rightParam">小芬芬</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">早饭金额</div>
          <div class="rightParam">{{xzbill.breakfastPrice}}元</div>
          <div class="rightParam">{{xybill.breakfastPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">午饭金额</div>
          <div class="rightParam">{{xzbill.lunchPrice}}元</div>
          <div class="rightParam">{{xybill.lunchPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">晚饭金额</div>
          <div class="rightParam">{{xzbill.dinnerPrice}}元</div>
          <div class="rightParam">{{xybill.dinnerPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">水果/下午茶</div>
          <div class="rightParam">{{xzbill.afternoonTeaPrice}}元</div>
          <div class="rightParam">{{xybill.afternoonTeaPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">聚餐/活动</div>
          <div class="rightParam">{{xzbill.partyActivityPrice}}元</div>
          <div class="rightParam">{{xybill.partyActivityPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">夜宵</div>
          <div class="rightParam">{{xzbill.bedtimeSnackPrice}}元</div>
          <div class="rightParam">{{xybill.bedtimeSnackPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">基金定投</div>
          <div class="rightParam">{{xzbill.aipPrice}}元</div>
          <div class="rightParam">{{xybill.aipPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">网购衣物/化妆品/零食等</div>
          <div class="rightParam">{{xzbill.onlineShoppingPrice}}元</div>
          <div class="rightParam">{{xybill.onlineShoppingPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">其他消费</div>
          <div class="rightParam">{{xzbill.otherConsumptionPrice}}元</div>
          <div class="rightParam">{{xybill.otherConsumptionPrice}}元</div>
        </div>
        <br />
        <div class="param">
          <div class="leftParam">合计</div>
          <div class="rightParam">{{xzbill.totalPrice}}元</div>
          <div class="rightParam">{{xybill.totalPrice}}元</div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //   formLabelWidth: "200px",
      xzDialogVisible: false,
      xyDialogVisible: false,
      xzbill: {
        // nickName: "小周",
        breakfastPrice: 0.0,
        lunchPrice: 0.0,
        dinnerPrice: 0.0,
        afternoonTeaPrice: 0.0,
        partyActivityPrice: 0.0,
        bedtimeSnackPrice: 0.0,
        aipPrice: 0.0,
        onlineShoppingPrice: 0.0,
        otherConsumptionPrice: 0.0,
        totalPrice: 0.0
      },
      xybill: {
        // nickName: "小杨",
        breakfastPrice: 0.0,
        lunchPrice: 0.0,
        dinnerPrice: 0.0,
        afternoonTeaPrice: 0.0,
        partyActivityPrice: 0.0,
        bedtimeSnackPrice: 0.0,
        aipPrice: 0.0,
        onlineShoppingPrice: 0.0,
        otherConsumptionPrice: 0.0,
        totalPrice: 0.0
      },
      xzbillForm: {
        // nickName: "小周",
        breakfastPrice: 0.0,
        lunchPrice: 0.0,
        dinnerPrice: 0.0,
        afternoonTeaPrice: 0.0,
        partyActivityPrice: 0.0,
        bedtimeSnackPrice: 0.0,
        aipPrice: 0.0,
        onlineShoppingPrice: 0.0,
        otherConsumptionPrice: 0.0,
        totalPrice: 0.0
      },
      xybillForm: {
        // nickName: "小杨",
        breakfastPrice: 0.0,
        lunchPrice: 0.0,
        dinnerPrice: 0.0,
        afternoonTeaPrice: 0.0,
        partyActivityPrice: 0.0,
        bedtimeSnackPrice: 0.0,
        aipPrice: 0.0,
        onlineShoppingPrice: 0.0,
        otherConsumptionPrice: 0.0,
        totalPrice: 0.0
      },
      selectTime: ""
    };
  },
  methods: {
    xzSubmitModify(xzbillForm) {
      this.xzDialogVisible = false;
      //1.修改值为修改表单里面的内容
      this.xzbill = Object.assign({}, this.xzbillForm);
      //2.发出请求修改真实数据库里面的数据
      this.axios
        .post("/bill/modifyBill", {
          billDate: this.selectTime,
          breakfastPrice: this.xzbill.breakfastPrice,
          lunchPrice: this.xzbill.lunchPrice,
          dinnerPrice: this.xzbill.dinnerPrice,
          afternoonTeaPrice: this.xzbill.afternoonTeaPrice,
          partyActivityPrice: this.xzbill.partyActivityPrice,
          bedtimeSnackPrice: this.xzbill.bedtimeSnackPrice,
          aipPrice: this.xzbill.aipPrice,
          onlineShoppingPrice: this.xzbill.onlineShoppingPrice,
          otherConsumptionPrice: this.xzbill.otherConsumptionPrice
        })
        .then(function(response) {
          if (0 == response.data.code) {
            console.log("修改成功");
          }
        });
      console.log(xzbillForm);
    },
    xzCancelModify() {
      this.xzDialogVisible = false;
      //恢复之前的数据
      this.xzbillForm = Object.assign({}, this.xzbill);
    },
    showxzDialog() {
      this.xzDialogVisible = true;
      this.xzbillForm = Object.assign({}, this.xzbill);
    },

    // 小杨

    xySubmitModify(xybillForm) {
      this.xyDialogVisible = false;
      //1.修改值为修改表单里面的内容
      this.xybill = Object.assign({}, this.xybillForm);
      //2.发出请求修改真实数据库里面的数据
      this.axios
        .post("/bill/modifyBill", {
          billDate: this.selectTime,
          breakfastPrice: this.xybill.breakfastPrice,
          lunchPrice: this.xybill.lunchPrice,
          dinnerPrice: this.xybill.dinnerPrice,
          afternoonTeaPrice: this.xybill.afternoonTeaPrice,
          partyActivityPrice: this.xybill.partyActivityPrice,
          bedtimeSnackPrice: this.xybill.bedtimeSnackPrice,
          aipPrice: this.xybill.aipPrice,
          onlineShoppingPrice: this.xybill.onlineShoppingPrice,
          otherConsumptionPrice: this.xybill.otherConsumptionPrice
        })
        .then(function(response) {
          if (0 == response.data.code) {
            console.log("修改成功");
          }
        });
      console.log(xybillForm);
    },
    xyCancelModify() {
      this.xyDialogVisible = false;
      //恢复之前的数据
      this.xybillForm = Object.assign({}, this.xybill);
    },
    showxyDialog() {
      this.xyDialogVisible = true;
      this.xybillForm = Object.assign({}, this.xybill);
    },
    initBillInfo() {
      //   eslint-disable-next-line no-debugger
      //   debugger;
      //先重置值全部都设成0
      this.changeBillZero();
      let _this = this;
      this.axios
        .post("/bill/listBillOnDay", { billDate: _this.selectTime })
        .then(function(response) {
          if (0 == response.data.code) {
            // _this.billList = response.data.data;

            if (response.data.data != null) {
              for (var bill of response.data.data) {
                if (bill.userId == 1) {
                  _this.xzbill = bill;
                  _this.xzbill.totalPrice =
                    _this.xzbill.breakfastPrice +
                    _this.xzbill.lunchPrice +
                    _this.xzbill.dinnerPrice +
                    _this.xzbill.partyActivityPrice +
                    _this.xzbill.bedtimeSnackPrice +
                    _this.xzbill.aipPrice +
                    _this.xzbill.onlineShoppingPrice +
                    _this.xzbill.otherConsumptionPrice +
                    _this.xzbill.afternoonTeaPrice;
                } else if (bill.userId == 2) {
                  _this.xybill = bill;
                  _this.xybill.totalPrice =
                    _this.xybill.breakfastPrice +
                    _this.xybill.lunchPrice +
                    _this.xybill.dinnerPrice +
                    _this.xybill.partyActivityPrice +
                    _this.xybill.bedtimeSnackPrice +
                    _this.xybill.aipPrice +
                    _this.xybill.onlineShoppingPrice +
                    _this.xybill.otherConsumptionPrice +
                    _this.xybill.afternoonTeaPrice;
                }
              }
            }
          }
        });
    },
    changeBillZero() {
      this.xybill.breakfastPrice = 0;
      this.xybill.lunchPrice = 0;
      this.xybill.dinnerPrice = 0;
      this.xybill.partyActivityPrice = 0;
      this.xybill.bedtimeSnackPrice = 0;
      this.xybill.aipPrice = 0;
      this.xybill.onlineShoppingPrice = 0;
      this.xybill.otherConsumptionPrice = 0;
      this.xybill.afternoonTeaPrice = 0;

      this.xzbill.breakfastPrice = 0;
      this.xzbill.lunchPrice = 0;
      this.xzbill.dinnerPrice = 0;
      this.xzbill.partyActivityPrice = 0;
      this.xzbill.bedtimeSnackPrice = 0;
      this.xzbill.aipPrice = 0;
      this.xzbill.onlineShoppingPrice = 0;
      this.xzbill.otherConsumptionPrice = 0;
      this.xzbill.afternoonTeaPrice = 0;
    }
  },
  mounted() {
    var now = new Date();
    var month =
      now.getMonth() + 1 < 10
        ? "0" + (now.getMonth() + 1).toString()
        : (now.getMonth() + 1).toString;
    this.selectTime =
      now.getFullYear().toString() +
      "-" +
      month +
      "-" +
      now.getDate().toString();
    this.initBillInfo();
    this.$forceUpdate();
  },
  watch: {
    selectTime() {
      this.initBillInfo();
    }
  }
};
</script>

<style>
.billList {
  flex-direction: row;
}
.leftParam {
  width: 100px;
  height: 25px;
  text-align: left;
}
.rightParam {
  /* float: right; */
  /* flex-direction: row;
  justify-content: space-between; */
}
.param {
  font-size: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.el-input :scope {
  width: 80px;
}
.el-form-item__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* width: 300px; */
}
</style>