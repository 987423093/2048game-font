<template>
  <el-container>
    <!-- <el-header>
      首页
    </el-header> -->
    <el-main class="titleContent">
      <div class="welcome">
          欢迎来到小周的前端学习的页面！登陆后完成游戏可以记录到排行榜哦！
      </div>
      <div>
      <el-button type="primary" round @click="jumpLogin">登录/注册</el-button>
      </div>
      <div>
        <el-button type="primary" round @click="jump2048">2048小游戏</el-button>
      </div>
      <el-button type="primary" round @click="jumpRank">排行榜</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.pexels.com/zh-cn/photo/4218701/',
      user: {
        username: '',
        nickName: ''
      },
      verifyLogin : false
    }
  },
  methods: {
    jumpLogin () {
      if (this.verifyLogin == false) {
      this.$router.push({ path: '/login' })
      } else {
        this.$router.push({ path: '/userInfo',
        query:{username:this.user.username, nickName:this.user.nickName}})
      }
    },
    jumpRank () {
      this.$router.push({ path: '/rank' })
    },
    jump2048 () {
      this.$router.push({ path: '/gameBoard' })
    }
  },
  created() {
    
  },
  mounted() {
    var _this = this
    this.axios
      .post('user/getUserDetail', {})
      .then(function (response) {
         if (response.data.code == 0) {
           _this.verifyLogin = true 
           _this.user.username = response.data.data.username
           _this.user.nickName = response.data.data.nickName
         }
      })
  }
}
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
  color:#409EFF;
 
}
</style>
