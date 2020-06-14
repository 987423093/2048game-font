<template>
  <el-container>
    <el-header>2048</el-header>
    <el-main class="titleContent">
      <div @click="jump2048">2048</div>
      <div @click="jumpLogin">登录/注册</div>
      <div @click="jumpRank">排行榜</div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  methods: {
    jumpLogin () {
      this.$router.push({ path: '/login' })
    },
    jumpRank () {
      this.$router.push({ path: '/rank' })
    },
    jump2048 () {
      this.$router.push({ path: '/GameBoard' })
    }
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
  color: #409eff;
}
</style>
