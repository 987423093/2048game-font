<template>
  <el-container>
    <!-- <el-header>排行榜</el-header> -->
    <el-main>
      <div class="rankTitle">
        <div class="rankContent">排名</div>
        <div class="rankContent">玩家昵称</div>
        <div class="rankContent">得分</div>
        <!-- <div class="rankContent">游戏时间</div> -->
      </div>
      <el-divider></el-divider>
      <div class="rankList" v-for="(item, index) in rankList" :key="index">
        <div class="rankNo">{{index + 1}}</div>
        <div class="nickName">{{item.nickName}}</div>
        <div class="scoreValue">{{item.score}}</div>
        <!-- <div class="createTime">{{item.createTime}}</div> -->
        <br />
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      rankList: [],
      pageNum: 1,
      pageSize: 10
    };
  },
  mounted() {
    var _this = this;
    this.axios
      .post(
        "/rank/listHistoryRank",
        { pageNum: 1, pageSize: 10 },
        { withCredentials: true }
      )
      .then(function(response) {
        // eslint-disable-next-line no-debugger
        // debugger
        if (response != null && response.data.data != null) {
          //console.log(response)
          _this.rankList = response.data.data;
          console.log(_this.rankList);
        }
      });
  },
  methods: {
    cellSize() {
      // console.log(column.columnIndex)
      return "font-size: 10px";
    }
  }
};
</script>

<style>
.rankList {
  /* align-content: center; */
}

.rankTitle {
  /* float: left; */
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #409eff;
}
.rankList {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #409eff;
}
.rankNo {
  /* float: left; */
  width: 140px;
  height: 50px;
  color: black;
  text-align: left;
}
.nickName {
  /* float: left; */
  width: 150px;
  color: black;
  text-align: center;
}
.scoreValue {
  /* float: left; */
  width: 150px;
  color: black;
  text-align: right;
}
.createTime {
  /* float: left; */
  width: 90px;
  font-size: 10px;
  color: black;
}
.valueContent {
  height: 30px;
}
</style>