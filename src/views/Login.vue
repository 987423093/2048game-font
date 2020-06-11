<template>
  <el-container>
    <el-header>登录</el-header>
    <el-main>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitLogin(form)">登录</el-button>
          <el-button @click="jumpToRegister()">注册</el-button>
        </el-form-item>
      </el-form>
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
      form: {
        username: '',
        password: ''
      },
      user: {
        username: '',
        nickName: ''
      },
      toastShow: false,
      toastText: ''
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
    submitLogin (form) {
      let _this = this;
      console.log('开始登录')
      this.axios
        .post('/user/login', { username: form.username, password: form.password })
        .then(function (response) {
          if (0 == response.data.code) {
            _this.user.username = response.data.data.username
            _this.user.nickName = response.data.data.nickName
            _this.toast("登录成功,准备跳转")
            sessionStorage.setItem("nickName", _this.user.nickName)
            setTimeout(() => {
              _this.$router.push({ path: '/gameBoard', query: { nickName: _this.user.nickName } })
            }, 1500);

          } else {
            _this.toast(response.data.message)
          }
          console.log(response)
          console.log(_this.$cookies.set("token", response.data.data.token))
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    jumpToRegister () {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>
<style>
.toast {
  position: fixed;
  z-index: 2000;
  left: 50%;
  top: 60%;
  transition: all 0.5s;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: rgba(17, 17, 17, 0.7);
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
}
</style>