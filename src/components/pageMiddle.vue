
<template>
	<div class="middleBox">
      <div class="middleInside">
        <div class="searchBox">
          <div class="leftSearch">
            <a class='showItem'  @mouseover="mouseOver" @mouseout="mouseOut">
              <span>{{choose_res}}</span><img src="../../static/img/menu_new.png" alt="">
              <ul>
            	<li v-for="item in downarray" @click="rangeChange">{{item}}</li>
             </ul>
            </a>
            <input type="text" placeholder="输入关键词，搜索你想要的文档和数据">
            <a href="" class='search_btn'>
              <img src="../../static/img/search_new.png" alt="">
              <span>搜索</span>
            </a>
          </div>
          <p>超过<span>374,392份</span>精选高等教育数据和文档</p>
          <a class="add_btn" @click="hideNeed">提新需求</a>
        </div>
        <router-view></router-view>
        <!-- <info></info> -->
        <!-- <infoDetail></infoDetail> -->
      </div>
    </div>
</template>
<script>
/* eslint-disable */
import Info from './info'
import infoDetail from './infoDetail'
import $ from 'jquery'
import { mapGetters, mapActions }  from 'vuex'
export default {
  name: 'pageMiddle',
  components: {Info, infoDetail},
  data () {
    return {
    	downarray:['全部','标题','正文','关键词'],
    	choose_res:'全部'
    }
  },
  methods: {
	  	mouseOver:function(){
	  		$('.leftSearch').addClass('down_style');
	  	},
	  	mouseOut:function(){
	  		$('.leftSearch').removeClass('down_style');
	  	},
	  	rangeChange:function(e){
	  		e.stopPropagation();
	  		var el = event.currentTarget;
	  		var val=$(el).text();
	  		var self=this;
	  		self.choose_res=val;
	  	},
	  	...mapActions([
	    	'hideNeed'
	  	])
  	}
}
</script>

