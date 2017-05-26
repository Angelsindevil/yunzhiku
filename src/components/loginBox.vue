<template>
	<div class="loginInfo" :class="{ 'hide': isHideLogin }">
		<div class="alertHeader">
			<p>账号密码登录<img src="../../static/img/delete.png" alt="" @click="hideLogin"></p>
		</div>
		<div class="loginContent">
			<div class="loginEnter">
				<input type="text" placeholder="账号信息">
				<input type="text" placeholder="密码">
			</div>
			<span><label for="rememberMe"><input type="checkbox" id="rememberMe">记住我</label></span>
			<p>登录</p>
		</div>
		<div class="bottomBox">
			<span>没有账号？联系我们</span>	
			<span>申请试用</span>	
		</div>
	</div>
</template>
<script>
/* eslint-disable*/
import { mapGetters, mapActions }  from 'vuex'
export default {
  name: 'pageHeader',
  data () {
    return {
    }
  },
  computed:mapGetters([
    'isHideLogin'
  ]),
  methods:mapActions([
    'hideLogin'
  ]),  
  mounted:function(){
  }
}
</script>
<style lang="less" scoped>
 @import '../../static/less/login.less';
</style>