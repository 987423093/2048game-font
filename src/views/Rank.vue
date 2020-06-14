<template>
  <el-container>
    <!-- <el-header>排行榜</el-header> -->
    <el-main>
      <div class="rankTitle">
        <div class="rankContent">排名</div>
        <div class="rankContent">玩家昵称</div>
        <div class="rankContent">得分</div>
        <div class="rankContent">游戏时间</div>
      </div>      
      <div class = "rankList" v-for="(item, index) in rankList" :key="index">
        <div class="valueContent">
          <div class="rankNo">{{index + 1}}</div>
          <div class="nickName">{{item.nickName}}</div>
          <div class="scoreValue">{{item.score}} </div>
          <div class="createTime">{{item.createTime}}</div>
          <br/>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      rankList: [],
      pageNum: 1,
      pageSize: 10
    }
  },
  mounted () {

    var _this = this
    this.axios
      .post('/rank/listHistoryRank', {pageNum: 1, pageSize: 10}, { withCredentials: true })
      .then(function (response) {
        // eslint-disable-next-line no-debugger
       // debugger
        if (response != null && response.data.data != null) {
          //console.log(response)
          _this.rankList = response.data.data;
          console.log(_this.rankList)
        }
      })
  },
  methods: {
    cellSize() {
      // console.log(column.columnIndex)
      return "font-size: 10px"
    }


  }
}
</script>

<style>
.rankList {
  /* align-content: center; */
}

.rankContent {
  float: left;
  margin: 15px;
  color: #409EFF;
}
.rankList {
  float: left;
  color: #409EFF;
  margin: 5px;
}
.rankNo {
  float: left;
  width: 60px;
  color:  black
}
.nickName {
  float: left;
  width: 80px;
  color:  black
}
.scoreValue {
  float: left;
  width: 80px;
  color:  black
}
.createTime {
  float: left;
  width: 80px;
  font-size: 10px;
  color:  black
}
.valueContent {
  height: 30px;
}

</style>