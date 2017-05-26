<template>
	<div class="needsBox alert_box" :class="{ 'hide': isHideNeed }">
		<div class="alertHeader">
			<p class="insideHeader">提交新需求<img src="../../static/img/delete.png" alt="" @click="hideNeed"></p>
		</div>
		<div class="needs_content">
			<p><span>需求名称：</span><input type="text" placeholder="请输入反馈内容的名称"></p>
			<p><span class="left_top">需求描述：</span><textarea placeholder="请简略描述您的文档需求，尽量限制在100个字以内。"></textarea></p>
			<p><span>验证码：</span><input type="text" class="check_code"><span class="code_img">验证码图片</span></p>
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
  	'isHideNeed'
  ]),
  methods:mapActions([
  	'hideNeed'
  ])  
}
</script>
<style lang="less" scoped>
  @import '../../static/less/init.less';
  @import '../../static/less/alertStyle.less';
</style>
