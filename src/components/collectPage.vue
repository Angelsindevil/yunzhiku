<template>
	<div class="accountInfo">
		<div class="alertHeader">
			<p class="insideHeader">
				<span class="change_box">我的收藏</span>
				<span class="total_show">共<span class="change_text">收藏</span> 1,2306 篇文档</span>
			</p>
			<p class="switchHeader"><span class="border_blue" @click="addBorderBottom">需求列表</span><span @click="addBorderBottom">反馈消息</span></p>
		</div>
		<div class="accountContent">
			<p><span class="change_box2">收藏文档</span><span><span class="change_text">收藏</span>时间</span></p>
			<ul>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2017年国家自然科学基金立项名单公布，2011项获得立项...</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title read_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter read_style">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title read_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter read_style">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/infoDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/mainMessage/announceDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">2016年国家科技奖获奖名单发布！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
				<router-link to="/mainMessage/announceDetail">
					<li @mouseover='fontBlueOver' @mouseout='fontBlueOut'>
						<span class="left_title unread_style">青塔高教智库升级为V1.5版本！</span>
						<span class="right_enter">2017-03-24 11:30</span>
					</li>
				</router-link>
			</ul>
			<p class="load_more">点击加载更多...</p>
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
	  	addBorderBottom:function(){
	  		var el=event.currentTarget;
	  		$(el).addClass("border_blue").siblings("span").removeClass("border_blue")
	  		var index = $(el).index();
	  		if(index==0){
	  			$(".accountContent").find(".change_box2").text("需求名称");
	  			$(".insideHeader,.accountContent").find(".change_text").text("提交");
	  			$(".accountContent").find("li").removeClass("message_li");
	  		}
	  		else{
	  			$(".accountContent").find(".change_box2").text("消息标题");
	  			$(".insideHeader,.accountContent").find(".change_text").text("接收");
	  			$(".accountContent").find("li").addClass("message_li");
	  		}
	  		
	  	},
	  	fontBlueOver:function(){
	  		var el=event.currentTarget;
	  		$(el).find(".left_title").addClass("font_underline");
	  	},
	  	fontBlueOut:function(){
	  		var el=event.currentTarget;
	  		$(el).find(".left_title").removeClass("font_underline");
	  	},
	  },
	  mounted:function(){
	  	$(".leftBtn").hide();
	  	locationHashChanged();
	  	function locationHashChanged() {
	  		// var height = $(".rightBar").height();
		  	// $(".leftBar").css('height',height+2);
		  	// console.log($(".leftBar").height());
	  		var src=window.location.hash;
	        console.log(src);
		  	if(src.indexOf('collectPage')!=-1){
		  		changeText('我的收藏','收藏文档','收藏',true);
		  	}
		  	else if(src.indexOf('downloadPage')!=-1){
		  		changeText('我的下载','下载文档','下载',true);
		  	}
		  	else if(src.indexOf('announcementPage')!=-1){
		  		changeText('公告消息','消息名称','消息',false);
		  		$(".accountContent").find("li").addClass("message_li");

		  	}
		  	else if(src.indexOf('feedbackPage')!=-1){
		  		$(".switchHeader").show().siblings("p").hide();
		  		$(".accountContent").find("li").removeClass("message_li");
		  		$(".switchHeader").children("span").eq(0).addClass("border_blue").siblings("span").removeClass("border_blue");
		  		$(".accountContent").find(".change_box2").text("需求名称");
	  			$(".insideHeader,.accountContent").find(".change_text").text("提交");
		  	}
		}
		window.onhashchange = locationHashChanged;
		function changeText(str1,str2,str3,flag){
			$(".insideHeader").show().siblings("p").hide();
			$(".insideHeader").find(".change_box").text(str1);
	  		$(".accountContent").find(".change_box2").text(str2);
	  		$(".insideHeader,.accountContent").find(".change_text").text(str3);
	  		if(flag){
	  			$(".accountContent").find("li").removeClass("message_li");
				$(".insideHeader").find(".total_show").show();
			}
			else{
				$(".accountContent").find("li").addClass("message_li");
				$(".insideHeader").find(".total_show").hide();
			}
		}
	  }
	}
</script>
<style lang="less" scoped>
  @import '../../static/less/documentModule.less';
  .insideHeader{
	display:none;
  }
</style>
