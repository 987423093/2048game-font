<template>
  <div id="app">
    <div class="title">
      <div class="nagtiveIcon">
        <i class="el-icon-caret-left" @click="drawer = true"></i>
      </div>
    </div>
    <el-drawer title="主页" :visible.sync="drawer" :direction="direction" :show-close="false">
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
      direction: 'rtl'
    }
  },
  created () {
    this.$router.push({ "path": "/GameBoard" })
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
  text-align: right;
  font-size: 40px;
}
</style>
