<template>
  <div id="app">
    <!-- <el-header> -->
    <div class="header">
      <span class="back" @click="back()" v-show="isShow">返回</span>
      <span class="pageName">{{this.$route.name}}</span>
    </div>
    <!-- </el-header> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      isHomeShow: false
    };
  },
  created() {
    this.$router.push({ path: "/" });
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    jumpHome() {
      this.$router.push({ path: "/" });
    }
  },
  watch: {
    $route(now) {
      //监控路由变换，控制返回按钮的显示
      // eslint-disable-next-line no-debugger
      // debugger
      if (now.path == "/") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  }
};
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

.header {
  color: #409eff;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  height: 40px;
  position: relative;
}
.el-header {
  color: #409eff;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.back {
  text-align: left;
  position: absolute;
  left: 5px;
}
.pageName {
  text-align: center;
}
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
