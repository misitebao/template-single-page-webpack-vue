<!--
 * @Description: 404页面
-->
<template>
  <div class="notfound">
    404
    <div class="tips">{{ delayDate }}秒后跳转</div>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data() {
    return {
      delayDate: 3, // 延迟退出时间
      timerTimeout: [], // 延迟定时器列表
      timerInterval: [], // 循环定时器列表
    };
  },
  created() {},
  mounted() {
    // 执行延时跳转
    this.delayRedirect();
  },
  beforeDestroy() {},
  destroyed() {
    const { timerTimeout } = this;
    const { timerInterval } = this;
    // 清楚延时定时器
    for (let i = 0, len = timerTimeout.length; i < len; i++) {
      clearTimeout(timerTimeout[i]);
    }
    // 清除循环定时器
    for (let i = 0, len = timerInterval.length; i < len; i++) {
      clearInterval(timerInterval[i]);
    }
    this.timerTimeout = [];
    this.timerInterval = [];
  },
  methods: {
    /**
     * @description: 延迟跳转
     */
    delayRedirect() {
      // 延迟跳转到首页
      this.timerTimeout.push(
        setTimeout(() => {
          this.$router.push({ name: 'index' });
        }, this.delayDate * 1000),
      );
      //  刷新显示秒数
      this.timerInterval.push(
        setInterval(() => {
          this.delayDate -= 1;
        }, 1000),
      );
    },
  },
};
</script>

<style lang="stylus" scoped>
.notfound {
  color: blue;
}
</style>
