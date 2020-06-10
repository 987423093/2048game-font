<template>
  <el-container>
    <el-header>排行榜</el-header>
    <el-main>
      <!-- <el-table :data="rankList" style="width: 100%">
        <el-table-column  prop="score" label="得分">
        </el-table-column>
        <el-table-column prop="nickName" label="昵称">
        </el-table-column>
        <el-table-column prop="createTime" label="创建记录">
        </el-table-column>
      </el-table> -->
      <div class = "rankList" v-for="(item, index) in rankList" :key="index">
          {{index + 1}}  {{item.nickName}} {{item.score}}  {{item.createTime}}
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
  align-content: center;
}

</style>