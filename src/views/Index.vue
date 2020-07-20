<!--
 * @Description: 首页
 -->

<template>
  <div class="index">
    <h1>{{ storename }}</h1>
    <h1>{{ storenameUser }}</h1>
    <el-button type="success" @click="handleClickBtn">{{
      $t('name')
    }}</el-button>
  </div>
</template>

<script>
import { Notification } from 'element-ui';
import MergeObject from 'webpack-merge';
import { mapState } from 'vuex';
// import userService from '../services/user/index.js';

export default {
  name: 'Index',

  data() {
    return {};
  },
  computed: {
    ...mapState({
      storename: (state) => state.name,
      globalNotification: (state) => state.globalNotification,
    }),
    ...mapState('userStore', {
      storenameUser: (state) => state.name,
    }),
  },
  watch: {
    // 监听全局提示对象
    globalNotification: {
      handler(newValue) {
        if (newValue.show) {
          // 显示提示消息
          Notification(this.globalNotification.options);
        }
      },
      deep: true, // 深度监听
    },
  },
  created() {},
  mounted() {},
  methods: {
    // 鼠标点击按钮事件
    handleClickBtn() {
      // 提交 改变全局提示框状态 配置
      this.$store.commit('setValue', {
        globalNotification: MergeObject({}, this.globalNotification, {
          show: true,
          options: {},
        }),
      });
      this.$i18n.locale = 'us';
    },
  },
};
</script>

<style lang="stylus" scoped>
h1 {
  font-size: 12px;
  color: red;
}
</style>
