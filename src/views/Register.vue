<template>
  <el-container>
    <!-- <el-header>注册</el-header> -->
    <el-main>
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item prop="repeatPassword">
          <el-input v-model="form.repeatPassword" placeholder="请再次输入密码" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item prop="nickName">
          <el-input v-model="form.nickName" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRegister(form)">注册</el-button>
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
    var validateUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入用户名"))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入密码"))
      } else {
        if (this.form.repeatPassword != '') {
          this.$refs.form.validateField("repeatPassword")
        } else {
          callback()
        }
      }
    }
    var validateRepeatPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请再次输入密码"))
      } else if (value != this.form.password) {
        return callback(new Error("两次输入的密码不一致"))
      } else {
        callback()
      }
    }
    var validateNickName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入昵称"))
      } else {
        callback()
      }
    }

    return {
      form: {
        username: '',
        password: '',
        repeatPassword: '',
        nickName: ''
      },
      rules: {
        username: [
          { validator: validateUsername }
        ],
        password: [
          { validator: validatePassword }
        ],
        repeatPassword: [
          { validator: validateRepeatPassword }
        ],
        nickName: [
          { validator: validateNickName }
        ]
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
    submitRegister (form) {
      let _this = this;
      this.axios
        .post('/user/register', { username: form.username, password: form.password, nickName: form.nickName })
        .then(function (response) {
          if (0 == response.data.code) {
            _this.toast("注册成功")
            setTimeout(() => {
              _this.$router.push({ path: '/login' })
            }, 1000);

          } else {
            _this.toast(response.data.message)
          }
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