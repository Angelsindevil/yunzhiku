<template>
  <div id="app">
    <pageHeader></pageHeader>
    <pageMiddle></pageMiddle>
    <pageBottom></pageBottom>
    <needsBox></needsBox>
    <errorsBox></errorsBox>
    <loginBox></loginBox>
    <maskShow></maskShow>
    <hello></hello>
    <!-- <leftTopBtn></leftTopBtn> -->
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
import PageHeader from './components/pageHeader.vue'
import PageMiddle from './components/pageMiddle.vue'
import PageBottom from './components/pageBottom.vue'
import needsBox from './components/needsBox.vue'
import errorsBox from './components/errorsBox.vue'
import maskShow from './components/maskShow.vue'
import hello from './components/Hello.vue'
import loginBox from './components/loginBox.vue'
// import store from './vuex/store'
export default {
  name: 'app',
  components: {PageMiddle, PageHeader, PageBottom, needsBox, errorsBox, maskShow, hello, loginBox},
  // store,
  data(){
    return{
    }
  }
}
</script>

<style lang="less">
  @import '../static/less/init.less';
  @import '../static/less/top_footer.less';
</style>
