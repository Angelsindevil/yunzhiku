<template>
  <div class="topBar">
    <div class="topInside">
      <div class="topLeft">
        <span class="left_top_img">
          <img src="../../static/img/logo.png" alt="">
        </span>
        <span>青塔·云智库</span> 
      </div>
      <div class="topRight">
        <span>咨询</span>
        <span>服务</span> 
        <span>帮助</span> 
        <router-link to="/mainMessage/announcementPage" ><img src="../../static/img/message.png" alt="" class="message_icon"></router-link> 
        <span  @click="loginClick" class="loginBox">
          <img src="../../static/img/user.png" alt="">
          <ul>
            <router-link to='/mainMessage/accountInfo'><li @click="hideClick">wm_406262049@163.com</li></router-link>
            <router-link to='/mainMessage/editPassword'><li @click="hideClick">修改密码</li></router-link>
            <a @click="hideLogin();hideClick($event)"><li><img src="../../static/img/loginout.png" alt="">退出登录</li></a>
          </ul>
        </span>
      </div>
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
  methods:{
    loginClick:function(e){
      var el=event.currentTarget;
      e.stopPropagation();
      $(el).children("ul").show();
      // if($(el).hasClass("showSth")){
      //   $(el).removeClass("showSth");
      //   $(el).children("ul").hide();
      // }
      // else{
      //   $(el).addClass("showSth");
      //   $(el).children("ul").show();
      // }   
    },
    // mouseOver:function(){
    //   var el=event.currentTarget;
    //   if(!$(el).hasClass("showSth")){
    //     $(el).children("ul").show();
    //   }
    // },
    // mouseOut:function(){
    //   var el=event.currentTarget;
    //   if(!$(el).hasClass("showSth")){
    //     $(el).children("ul").hide();
    //   }
    // },
    hideClick:function(e){
      e.stopPropagation();
      $(".loginBox").children("ul").hide();
    },
    ...mapActions([
      'hideLogin'
    ])
  },
  created:function(){
    $(document).bind("click",function(){
      $(".loginBox").children("ul").hide();
      $(".loginBox").removeClass("showSth");
    })
  }
}
</script>
<style lang="less">
  @import '../../static/less/init.less';
  @import '../../static/less/top_footer.less';
</style>
