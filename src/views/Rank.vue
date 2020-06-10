<template>
  <el-container>
    <el-header>排行榜</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      rankList: []
    }
  },
  mounted () {

    this.axios
      .post('/rank/listHistoryRank', {}, { withCredentials: true })
      .then(function (response) {
        // eslint-disable-next-line no-debugger
        debugger
        if (response != null && response.data.data != null) {
          console.log(response)
          this.rankList = response.data.data;
          console.log(this.rankList)
        }
      })
  }
}
</script>

<style>
</style>