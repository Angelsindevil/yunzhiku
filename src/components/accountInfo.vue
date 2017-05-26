<template>
	<div class="accountInfo">
		<div class="alertHeader">
			<p class="insideHeader" style="display:block">账号信息</p>
		</div>
		<div class="accountContent">
			<ul>
				<li>
					<span class="left_title">账号：</span>
					<span class="right_enter edit_show">wm_406262049@163.com</span>
				</li>
				<li>
					<span class="left_title">单位名称：</span>
					<span class="right_enter edit_show">浙江工商大学</span>
				</li>
				<li>
					<span class="left_title">真实姓名：</span>
					<span class="right_enter edit_show">翁敏</span>
					<span class="edit_btn edit_show" @click="editBoxShow"><img src="../../static/img/edit.png" alt="">修改</span>
					<span class="edit_box"><input type="text"><a @click="saveClick('0')">保存</a><a @click="saveClick('1')">取消</a></span>
				</li>
				<li>
					<span class="left_title">部门：</span><span class="right_enter edit_show">发展规划处</span>
					<span class="edit_btn edit_show" @click="editBoxShow"><img src="../../static/img/edit.png" alt="">修改</span>
					<span class="edit_box"><input type="text"><a @click="saveClick('0')">保存</a><a @click="saveClick('1')">取消</a></span>
				</li>
				<li>
					<span class="left_title">常用邮箱：</span>
					<span class="right_enter edit_show">wm_406262049@163.com</span>
					<span class="edit_btn edit_show" @click="editBoxShow"><img src="../../static/img/edit.png" alt="">修改</span>
					<span class="edit_box"><input type="text"><a @click="saveClick('0')">保存</a><a @click="saveClick('1')">取消</a></span>
				</li>
				<li>
					<span class="left_title">手机号码：</span>
					<span class="right_enter edit_show">137xxxxxxxxxx</span>
					<span class="edit_btn edit_show" @click="editBoxShow"><img src="../../static/img/edit.png" alt="">修改</span>
					<span class="edit_box"><input type="text"><a @click="saveClick('0')">保存</a><a @click="saveClick('1')">取消</a></span></li>
			</ul>
		</div>	
	</div>
</template>
<script>
	/* eslint-disable*/
	export default {
	  name: 'pageHeader',
	  data () {
	    return {
	    }
	  },
	  methods:{
	  	editBoxShow:function(){
	  		var el = event.currentTarget;
	  		$(el).removeClass('edit_show').next().addClass('edit_show');
	  		var text=$(el).siblings('.right_enter').removeClass('edit_show').text();
	  		$(el).siblings('.edit_box').children("input").val(text);
	  	},
	  	saveClick:function(index){
	  		var el = event.currentTarget;
	  		$(el).parent('.edit_box').removeClass('edit_show').siblings('span').addClass('edit_show');
	  		if(index=='0'){
	  			var text = $(el).siblings('input').val();
	  			$(el).parent('.edit_box').siblings('.right_enter').text(text);
	  		}
	  	}
	  },
	  mounted:function(){
	  	var height = $(".rightBar").height();
	  	console.log(height);
	  	$(".leftBar").css('height',height+2);
	  	console.log($(".leftBar").height());
	  }
	}
</script>
<style lang="less" scoped>
  @import '../../static/less/accountInfo.less';
</style>
