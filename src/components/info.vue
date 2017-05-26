<template>
  <div class="info">
    <div class="left_list">
      <p><span>查询到约<span>4，120，000</span>条相关结果</span><span class="type_top">类别：<span>国家级奖项</span></span></p>
      <ul class="results_list">
        <router-link to="/infoDetail">
          <li>
            <p class="list_title">2016年<span class="red_style">国家科学技术奖</span>获奖名单</p>
            <p class="list_type type_source">类别：<span>国家级奖项</span></p>
            <p class="list_info">2016年<span class="red_style">国家科学技术奖</span>通用项目名单，包括国家最高科学技术奖、国家自然科学奖、国家技术发明奖、国家科技进步奖全部等级获奖记录。</p>
            <p class="list_source type_source">来源：<span>中华人民共和国科学技术部</span></p>
            <p class="list_bottom">
              <span class="tag_box">
                <span>国家科技奖</span>
                <span>通用项目</span>
              </span>
              <span class="right_icon">
                <span @mouseover="starMouseOver" @mouseout="starMouseOut" @click="starClick"><img src="../../static/img/star_grey.png" alt="" ></span>
                <span><img src="../../static/img/download.png" alt=""></span>
              </span>
            </p>
          </li>        
        </router-link>
        <router-link to="/infoDetail">
          <li>
            <p class="list_title">2016年<span class="red_style">国家科学技术奖</span>获奖名单</p>
            <p class="list_type type_source">类别：<span>国家级奖项</span></p>
            <p class="list_info">2016年<span class="red_style">国家科学技术奖</span>通用项目名单，包括国家最高科学技术奖、国家自然科学奖、国家技术发明奖、国家科技进步奖全部等级获奖记录。</p>
            <p class="list_source type_source">来源：<span>中华人民共和国科学技术部</span></p>
            <p class="list_bottom">
              <span class="tag_box">
                <span>国家科技奖</span>
                <span>通用项目</span>
              </span>
              <span class="right_icon">
                <span><img src="../../static/img/star_grey.png" @mouseover="starMouseOver" @mouseout="starMouseOut" @click="starClick" alt=""></span>
                <span><img src="../../static/img/download.png" alt=""></span>
              </span>
            </p>
          </li>
        </router-link>
        <router-link to="/infoDetail">
          <li>
            <p class="list_title">2016年<span class="red_style">国家科学技术奖</span>获奖名单</p>
            <p class="list_type type_source">类别：<span>国家级奖项</span></p>
            <p class="list_info">2016年<span class="red_style">国家科学技术奖</span>通用项目名单，包括国家最高科学技术奖、国家自然科学奖、国家技术发明奖、国家科技进步奖全部等级获奖记录。</p>
            <p class="list_source type_source">来源：<span>中华人民共和国科学技术部</span></p>
            <p class="list_bottom">
              <span class="tag_box">
                <span>国家科技奖</span>
                <span>通用项目</span>
              </span>
              <span class="right_icon">
                <span><img src="../../static/img/star_grey.png" @mouseover="starMouseOver" @mouseout="starMouseOut" @click="starClick" alt=""></span>
                <span><img src="../../static/img/download.png" alt=""></span>
              </span>
            </p>
          </li>
        </router-link>
      </ul>
      <p class="load_more">点击加载更多...</p>
    </div>
    <div class="right_list">
      <div class="relative_search right_search_style">
        <p><img src="../../static/img/hot_blue.png" alt=""><span>相关搜索</span><span class="line_style"></span></p>
        <ul>
          <li>中国专利奖</li>
          <li>教育部科技奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
        </ul>
      </div>
      <div class="hot_search right_search_style">
        <p><img src="../../static/img/hot_red.png" alt=""><span>热门搜索</span><span class="line_style"></span></p>
        <ul>
          <li>中国专利奖</li>
          <li>教育部科技奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
          <li>专利奖</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable*/
import {starMouseTarget,starClickTarget} from '../../static/js/common.js'
export default {
  name: 'pageHeader',
  data () {
    return {
    }
  },
  methods:{
    starMouseOver:function(){
      var el = event.currentTarget;
      var el_img=$(el).children("img");
      starMouseTarget(el_img,'starChangeColor','./static/img/star_orange.png');
    },
    starMouseOut:function(){
      var el = event.currentTarget;
      var el_img=$(el).children("img");
      starMouseTarget(el_img,'starChangeColor','./static/img/star_grey.png');
    },
    starClick:function(e){
      // e.stopPropagation();
      e.preventDefault();
      var el = event.currentTarget;
      var el_img=$(el).children("img");
      starClickTarget(el_img,'starChangeColor','./static/img/star_white.png','./static/img/star_grey.png','1');
    }
  },
  mounted:function(){
    $(".leftBtn").hide();
  }
}
</script>
<style lang="less" scoped>
  @import '../../static/less/searchResults.less';
</style>
