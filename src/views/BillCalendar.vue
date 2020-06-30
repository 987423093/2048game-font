<template>
  <div id="demo">
    <!-- <calendar /> -->
    <inlineCalendar @change="onChange">
      <template v-slot:day="scope">
        <div v-if="changeDateTime(scope.date.dateTime)" class="point"></div>
      </template>
    </inlineCalendar>
  </div>
</template>

<script>
import dayjs from "dayjs";
// Vue.use(Calendar)后可直接使用`<calendar />`和`<inlineCalendar />`组件。calendar为底部弹窗显示，inlineCalendar为页面内联显示（可放置页面任意地方）
export default {
  methods: {
    onChange(date) {
      //   eslint-disable-next-line no-debugger
      //   debugger;
      console.log(date.format("YYYY-MM-DD"));
    },
    changeDateTime(date) {
      //   eslint-disable-next-line no-debugger
      //   debugger;
      console.log(date.format("YYYY-MM-DD"));
    }
  },
  mounted() {
    //根据当前天让后端返回五个月的数据，用数组是否包含去判断
    console.log(dayjs().format("YYYY-MM-DD"));
  }
};
</script>
<style>
/* .point {
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 20%;
  right: 20%;
} */
</style>