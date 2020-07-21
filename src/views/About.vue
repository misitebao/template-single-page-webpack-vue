<!--
 * @Author       : MS
 * @LastEditors  : MS
 * @Description  : 关于页面
--> 
<template>
  <div class="about">
    <!-- 容器 -->
    <el-container style="height:100%;">
      <!-- 头部 -->
      <el-header height="60px">Header</el-header>
      <!-- 内部容器 -->
      <el-container>
        <el-container>
          <!-- 侧边栏 -->
          <el-aside width="200px">Aside</el-aside>
          <!-- 页面主体 -->
          <el-main>
            <div class="main"></div>
          </el-main>
        </el-container>
        <!-- 底部 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="stylus" scoped>
.about {
  width: 100%;
  height: 100%;
  .main {
    width: 600px;
  }
}
</style>
