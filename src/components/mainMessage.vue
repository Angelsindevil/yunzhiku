<template>
	<div class="mainMessage">
		<div class="leftBar">
			<p>
				<span><img src="../../static/img/user_blue.png" alt=""></span>
				<span>wm_406262049@163.com</span>
			</p>
			<div>
				<ul>
					<router-link to='/mainMessage/accountInfo'><li><img src="../../static/img/home.png" alt=""><span>账号信息</span></li></router-link>
					<li>
						<img src="../../static/img/document.png" alt=""><span>我的文档</span>
						<ul>
							<router-link to='/mainMessage/collectPage'><li class="blueShow" @click="liClick">我的收藏</li></router-link>
							<router-link to='/mainMessage/downloadPage'><li class="blueShow" @click="liClick">我的下载</li></router-link>
						</ul>	
					</li>
					<li>
						<img src="../../static/img/message_blue.png" alt=""><span>我的消息</span>
						<ul>
							<router-link to='/mainMessage/announcementPage'><li class="blueShow" @click="liClick">公告消息</li></router-link>
							<router-link to='/mainMessage/feedbackPage'><li class="blueShow" @click="liClick">需求反馈</li></router-link>
						</ul>	
					</li>
					<router-link to='/mainMessage/editPassword'><li><img src="../../static/img/password.png" alt=""><span>修改密码</span></li></router-link>
				</ul>
			</div>
		</div>
		<div class="rightBar">
			<router-view></router-view>
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
  	liClick:function(){
  		var el=event.currentTarget;
  		$(".blueShow").removeClass("li_blue");
  		$(el).addClass("li_blue");
  	}
  },
  mounted:function(){
  	// var height = $(".rightBar").height();
  	// console.log(height);
  	// $(".leftBar").css('height',height+2);
  	// console.log($(".leftBar").height());
  }
}
</script>
<style lang="less">
  @import '../../static/less/init.less';
  @import '../../static/less/userCenter.less';
</style>

