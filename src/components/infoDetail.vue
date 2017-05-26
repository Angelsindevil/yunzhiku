<template>
	<div class="infoDetail">
		<div class="info_top block_style">
			<div class="infoHeader">
				<p class="info_title">关于全国首批深化创新创业教育改革示范高校名单的公示</p>
				<p><span>类别<span class="font_blue border_right">各类名单</span></span><span>来源<span class="font_blue border_right">中华人民共和国科学技术部</span></span><span>发布时间<span class="date">2017-3-31</span></span></p>
				<span class="star_blue" @click="starBlueClick" @mouseover="starBlueMouseOver" @mouseout="starBlueMouseOut"><img src="../../static/img/star_edge_blue.png" alt=""><span>收藏</span></span>
			</div>
			<div class="infoContent">
				<p class="para_ellipsis">本年度报告是根据《中华人民共和国政府信息公开条例》（以下简称《政府信息公开条例》）要求，由中华人民共和国教育部编制。全文内容包括概述、政府信息主动公开情况、政府信息依申请公开情况、政府信息公开工作要点落实情况、建议提案办理结果公开情况、政府信息公开咨询情况、政府信息公开收费及减免情况、因政府信息公开申请行政复议和提起行政诉讼的情况、存在的主要问题及下一步工作等九个部分。本报告公告的Word和PDF版本可以从教育部门户网站（http://www.moe.gov.cn）下载。如对本报告公告有任何疑问，请联系教育部政务公开办公室（电话：010-66092060；邮箱：gongkai@moe.edu.cn）。
				本年度报告是根据《中华人民共和国政府信息公开条例》（以下简称《政府信息公开条例》）要求，由中华人民共和国教育部编制。全文内容包括概述、政府信息主动公开情况、政府信息依申请公开情况、政府信息公开工作要点落实情况、建议提案办理结果公开情况、政府信息公开咨询情况、政府信息公开收费及减免情况、因政府信息公开申请行政复议和提起行政诉讼的情况、存在的主要问题及下一步工作等九个部分。本报告公告的Word和PDF版本可以从教育部门户网站（http://www.moe.gov.cn）下载。如对本报告公告有任何疑问，请联系教育部政务公开办公室（电话：010-66092060；邮箱：gongkai@moe.edu.cn）。</p>
				<span class="right_btn font_blue" @click="paraShowAll"><img src="../../static/img/arrow_down_grey.png" alt=""><span>查看全文</span></span>	
			</div>
		</div>
		<div class="attach_box block_style">
			<p>附件：</p>
			<ul>
				<li class="font_blue">2004年-中联重科杯-华夏建设科学技术奖推荐授奖项目名单(公示).pdf</li>
				<li class="font_blue">2015年度何梁何利基金科学与技术奖获奖名单.docx</li>
			</ul>	
		</div>
		<div class="relative_document block_style">
			<div class="alertHeader">
				<p class="insideHeader">相关文档</p>
			</div>
			<div class="needs_content">
				<ul>
					<li>
						<p class="font_blue">
							2004年-中联重科杯-华夏建设科学技术奖推荐授奖项目名单(公示)
						</p>
						<p>各类名单 - 2004</p>
						<span>来源：<span>教育部科技司</span></span>
					</li>
					<li>
						<p class="font_blue">
							2015年度何梁何利基金科学与技术奖获奖名单
						</p>
						<p>各类名单 - 2004</p>
						<span>来源：<span>教育部科技司</span></span>
					</li>
					<li>
						<p class="font_blue">
							第十八届中国专利奖预获奖项目
						</p>
						<p>各类名单 - 2004</p>
						<span>来源：<span>教育部科技司</span></span>
					</li>
					<li>
						<p class="font_blue">
							第十八届中国专利奖预获奖项目
						</p>
						<p>各类名单 - 2004</p>
						<span>来源：<span>教育部科技司</span></span>
					</li>
					<li>
						<p class="font_blue">
							第十八届中国专利奖预获奖项目
						</p>
						<p>各类名单 - 2004</p>
						<span>来源：<span>教育部科技司</span></span>
					</li>
				</ul>
				<p class="load_more">点击加载更多...</p>
			</div>	
		</div>
		<div class="control_btn">
			<span @click="hideError"><img src="../../static/img/error.png" alt=""></span>
			<span @click="toTopPage"><img src="../../static/img/back_top.png" alt=""></span>
		</div>
	</div>
</template>
<script>
/* eslint-disable*/
import {starMouseTarget,starClickTarget} from '../../static/js/common.js'
import { mapGetters, mapActions }  from 'vuex'
export default {
  name: 'infoDetail',
  data () {
    return {

    }
  },
  methods:{
  	paraShowAll:function(){
  		var el = event.currentTarget;
  		var el_p=$(el).prev("p");	
  		starClickTarget(el_p,'para_ellipsis','./static/img/arrow_up_grey.png','./static/img/arrow_down_grey.png','3')
  	},
  	starBlueMouseOver:function(){
  		var el = event.currentTarget;
  		var el_img=$(el).children("img");
     	starMouseTarget(el_img,'starChangeColor','./static/img/star_full_blue.png');
  	},
  	starBlueMouseOut:function(){
  		var el = event.currentTarget;
  		var el_img=$(el).children("img");
     	starMouseTarget(el_img,'starChangeColor','./static/img/star_edge_blue.png');
  	},
  	starBlueClick:function(){
  		var el = event.currentTarget;
  		var el_img=$(el).children("img");
  		starClickTarget(el_img,'starChangeColor','./static/img/star_full_blue.png','./static/img/star_edge_blue.png','2')
  	},
  	toTopPage:function(){
  		$("html body").scrollTop(0);
  	},
  	...mapActions([
    	'hideError'
  	]),
  },
  mounted:function(){
  	$(".leftBtn").show();
  	$(".leftBtn>span").bind("click",function(){
  		var index=$(this).index();
  		if(index==0){
  			$("html body").scrollTop(0);
  		}
  		else if(index==1){
  			var height=$(".info_top").height();
  			$("html body").scrollTop(height+150);
  		}
  		else{
  			var height_1=$(".info_top").height();
  			var height_2=$(".attach_box").height();
  			$("html body").scrollTop(height_1+height_2+170);
  		}
  	})
  }
}
</script>
<style lang="less" scoped>
  @import '../../static/less/searchDetail.less';
</style>

