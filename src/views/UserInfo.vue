<template>
  <el-container>
    <!-- <el-header></el-header> -->
    <el-main>
      <div class="userInfo">
        <div>用户名：{{username}}</div>
        <div>昵称：{{nickName}}</div>
      </div>
      <el-button type="warning" @click="logout()">登出</el-button>
    </el-main>
    <div class="toast" v-show="toastShow">
      {{toastText}}
    </div>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      toastShow: false,
      toastText: '',
      username:'',
      nickName: '',
    }
  },
  methods: {
     toast (str) {
      let v = this
      v.toastText = str
      v.toastShow = true
      setTimeout(function () {
        v.toastShow = false
      }, 1500)
    },
    logout() {
      var _this = this
      this.axios
        .post('/user/logout', {})
        .then(function (response) {
            if (response.data.code == 0) {
              _this.toast("登出成功")
              setTimeout(() => {
                _this.$router.push({path: '/'})
              }, 1000);
            }
        })
    }
  },
  mounted() {
    var _this = this
    this.axios
      .post('/user/getUserDetail', {})
      .then(function (response) {
          if (response.data.code == 0) {
            _this.username = response.data.data.username
            _this.nickName = response.data.data.nickName
          } else {
            _this.toast("未登录，马上跳转到登录页面")       
            setTimeout(() => {
              _this.$router.push({path : '/login'})
            }, 1500);
          }
      })
  },
  created() {

    // eslint-disable-next-line no-debugger
    // debugger
    
    this.username = this.$route.query.username
    this.nickName = this.$route.query.nickName

  }
}
</script>
<style>
.userInfo {
  color: black;

}
</style>