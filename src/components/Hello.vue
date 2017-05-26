<template>
  <div class="leftBtn">
    <span  @mouseover="btnMouseOver" @mouseout="btnMouseOut"><img class="btn_show" src="../../static/img/article.png" alt=""><span>正文</span></span>
    <span  @mouseover="btnMouseOver" @mouseout="btnMouseOut"><img class="btn_show" src="../../static/img/attachment.png" alt=""><span>附件</span></span>
    <span  @mouseover="btnMouseOver" @mouseout="btnMouseOut"><img class="btn_show" src="../../static/img/relative.png" alt="" style="width:22px;height:22px;"><span>相关</span></span>
  </div>
</template>

<script>
import {btnMouseTarget} from '../../static/js/common.js'
// import {mapGetters} from 'vuex'
/* eslint-disable*/
export default {
  name: 'leftBtn',
  data () {
    return {
    }
  },
  // computed:mapGetters([
  //   'isHideBtn'
  // ]),
  methods:{
    // paraShowAll:function(){
    //   var el = event.currentTarget;
    //   var eq_index=$(el).index();
    //   var text;
    //   var src=''
    //   if(eq_index==0){
    //     text='正文';
    //     src='../../static/img/article.png';
    //   }
    //   else if(eq_index==1){
    //     text='附件';
    //     src='../../static/img/attachment.png';
    //   }
    //   else if(eq_index==2){
    //     text='相关';
    //     src='../../static/img/relative.png';
    //   }
    //   starClickTarget(el,'bg_blue',text,src,'4')
    // },
    btnMouseOver:function(e){
      event.preventDefault();
      var el = event.currentTarget;
      btnMouseTarget(el,'bg_blue','over');
    },
    btnMouseOut:function(e){
      var el = event.currentTarget;
      btnMouseTarget(el,'bg_blue','out');
    },

  }
}
</script>
<style lang="less" scoped>
  .leftBtn{
    display:none;
  }
</style>


