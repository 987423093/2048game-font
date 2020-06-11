<template>
  <el-container>
    <el-header>登录</el-header>
    <el-main>
      <p> 登录成功,即将返回游戏界面</p>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      nickName: ''
    }
  },
  methods: {
    jumpLogin () {
      this.nickName = this.$route.query.nickName
      setTimeout(() => {
        this.$router.push({ path: '/gameBoard', query: { nickName: this.nickName } })
      }, 1000);
    }
  },
  mounted () {
    this.jumpLogin()
  }
}
</script>
<style>
</style>