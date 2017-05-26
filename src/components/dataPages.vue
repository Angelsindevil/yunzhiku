<template>
  <div class="rightContent_1">
    <div class="topRightBar">
      <span>
        <img src="../../static/img/list_circle.png" alt="">
        中国科学技术大学 · 学科动态分析平台
      </span>
      <span>
        <img src="../../static/img/message.png" alt="">
        <img src="../../static/img/user.png" alt="">
      </span>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightContent_1',
}
</script>

<style lang="less">
  @import '../../static/less/main.less';
</style>