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
          <el-button type="primary" @click="submitLogin(form)">提交</el-button>
        </el-form-item>
      </el-form>
    </el-main>
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
      user1: ''
    }
  },
  methods: {
    submitLogin (form) {
      let _this = this;
      console.log('开始登录')
      this.axios
        .post('/user/login', { username: form.username, password: form.password })
        .then(function (response) {
          if (response.data != null) {
            _this.user.username = response.data.data.username
            _this.user.nickName = response.data.data.nickName
          }
          console.log(response)
          console.log(_this.$cookies.set("token", response.data.data.token))
        })
        .catch(function (error) {
          console.log(error);
        })

      console.log(this.user)
    }
  }
}
</script>
<style>
</style>