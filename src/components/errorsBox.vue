<template>
	<div class="errorsBox alert_box" :class="{ 'hide': isHideError }">
		<div class="alertHeader">
			<p class="insideHeader">报错<img src="../../static/img/delete.png" alt="" @click="hideError"></p>
		</div>
		<div class="needs_content">
			<p><span class="left_top">错误描述：</span><textarea placeholder="   请简略描述您所遇到的系统错误，请尽量限制在100个字以内。"></textarea></p>
			<a href="" class="submit_btn">提交</a>
		</div>
	</div>
</template>
<script>
/* eslint-disable */
import { mapGetters, mapActions }  from 'vuex'
export default {
  name: 'pageHeader',
  data () {
    return {
    }
  },
  computed:mapGetters([
    'isHideError'
  ]),
  methods:mapActions([
    'hideError'
  ])  
}
</script>
<style lang="less" scoped>
  @import '../../static/less/init.less';
  @import '../../static/less/alertStyle.less';
  .alert_box{
  	height:300px;
  }
  .alert_box .alertHeader .insideHeader{
  	border-color:#ff6600;
  }
  .alert_box .needs_content .submit_btn{
  	background-color: #ff6600;
  	width:100px;
  }
</style>

