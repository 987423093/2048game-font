<template>
  <el-container>
    <el-main class="titleContent">
      <div v-show="!verifyLogin">
        <div class="rankTitle">
          <span style="color:#409eff">{{nickName}}</span>
          <span style="color:#409eff" @click="logout()">登出</span>
        </div>
        <el-divider></el-divider>
      </div>
      <div class="welcome">欢迎来到小周的前端学习的页面！</div>
      <div v-show="verifyLogin">
        <el-button type="primary" size="medium" round @click="jumpLogin()">登录/注册</el-button>
      </div>
      <div>
        <el-button type="primary" size="medium" round @click="jump2048()">2048小游戏</el-button>
      </div>
      <!-- <el-button type="primary" size="medium" round @click="jumpRank()">排行榜</el-button> -->
      <el-button type="primary" size="medium" :disabled="false" round @click="jumpBill()">账单小应用</el-button>
    </el-main>
    <div class="toast" v-show="toastShow">{{toastText}}</div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      url: "https://www.pexels.com/zh-cn/photo/4218701/",
      user: {
        username: "",
        nickName: ""
      },
      verifyLogin: true,
      isBill: false,
      toastShow: false,
      toastText: "",
      nickName: ""
    };
  },
  methods: {
    logout() {
      var _this = this;
      this.axios.post("/user/logout", {}).then(function(response) {
        if (response.data.code == 0) {
          _this.toast("登出成功");
          _this.verifyLogin = true;
          setTimeout(() => {
            _this.$router.push({ path: "/" });
          }, 1000);
        }
      });
    },
    toast(str) {
      let v = this;
      v.toastText = str;
      v.toastShow = true;
      setTimeout(function() {
        v.toastShow = false;
      }, 1500);
    },
    jumpLogin() {
      // if (this.verifyLogin == false) {
      this.$router.push({ path: "/login" });
      // } else {
      // this.$router.push({
      // path: "/userInfo",
      // query: { username: this.user.username, nickName: this.user.nickName }
      // });
      // }
    },

    jump2048() {
      this.$router.push({ path: "/gameBoard" });
    },
    jumpBill() {
      if (this.isBill == false) {
        this.toast("您没有权限");
      } else {
        this.$router.push({ path: "/billList" });
      }
    }
  },
  created() {},
  mounted() {
    this.nickName = sessionStorage.getItem("nickName");
    console.log(this.nickName);
    if (this.nickName != null) {
      this.verifyLogin = false;
    }
    console.log(this.verifyLogin);

    var _this = this;
    this.axios.post("user/getUserDetail", {}).then(function(response) {
      if (response.data.code == 0) {
        // _this.verifyLogin = true;
        _this.user.username = response.data.data.username;
        _this.user.nickName = response.data.data.nickName;
        if (response.data.data.userId == 1 || response.data.data.userId == 2) {
          _this.isBill = true;
        }
      }
    });
  }
};
</script>
<style>
.title {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.titleContent {
  align-content: center;
  text-align: center;
}
.el-button {
  margin: 10px;
  width: 200px;
}
.welcome {
  height: 200px;
  color: #409eff;
}
</style>
