<template>
  <div id="app">
    <div class="title">
      <div class="nagtiveIcon">
        <i class="el-icon-caret-left" @click="jumpHome"></i>
      </div>
    </div>
    <el-drawer title="主页" :with-header="false" :visible.sync="drawer" :direction="direction" :show-close="false">

      <div class="titleContent">2048小游戏 </div>

      <!-- <el-divider></el-divider> -->
      <hr />
      <div class="block">
        <el-avatar :size="50" :src="circleUrl"></el-avatar>
      </div>
      <el-link class="content" type="primary" @click="jump2048">2048</el-link>
      <br />
      <el-link class="content" type="primary" @click="jumpLogin">登录/注册</el-link>
      <br />
      <el-link class="content" type="primary" @click="jumpRank">排行榜</el-link>
    </el-drawer>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/gameBoard">GameBoard</router-link> |
      <router-link to="/rank">Rank</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      direction: 'rtl',
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  created () {
    this.$router.push({ path: '/gameBoard' })
  },
  methods: {
    jumpLogin () {
      this.$router.push({ path: '/login' })
    },
    jumpRank () {
      this.$router.push({ path: '/rank' })
    },
    jump2048 () {
      this.$router.push({ path: '/GameBoard' })
    },
    jumpHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  font-size: 20px;
}

.nagtiveIcon {
  text-align: left;
  font-size: 40px;
}
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
