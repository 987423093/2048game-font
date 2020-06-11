<template>
  <el-container>
    <el-header>注册</el-header>
    <el-main>
      <p> 恭喜你注册成功，马上跳转到登录页面...</p>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    jumpLogin () {
      setTimeout(() => {
        this.$router.push({ path: '/login' })
      }, 2000);
    }
  },
  mounted () {
    this.jumpLogin()
  }
}
</script>
<style>
</style>