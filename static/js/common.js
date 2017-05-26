    /* eslint-disable */
    export const starMouseTarget=(el,className,src) => {      
      if(!$(el).hasClass(className)){
        $(el).attr("src",src)
      }
    }
    export const btnMouseTarget=(el,className,flag) => {  
      if(flag=="over"){
        $(el).addClass(className);
        $(el).children("span").addClass("btn_show").siblings().removeClass("btn_show");
      }
      else if(flag=="out"){
        $(el).removeClass(className);
        $(el).children("img").addClass("btn_show").siblings().removeClass("btn_show");
      }
    }
    export const starClickTarget=(el,className,src1,src2,flag) => {
      if(!$(el).hasClass(className)){
        $(el).addClass(className);
        if(flag=='1'){
          $(el).parent('span').css("background-color","#ff9933");
        }
        else if(flag=='2'){
          $(el).next("span").text("已收藏");
        }
        else if(flag=='3'){
          $(el).next("span").children('img').attr("src",src2);
          $(el).next("span").children('span').text("查看全文");
        }
        else if(flag=='4'){
          $(el).html('<span>'+src1+'</span>');
        }
        $(el).attr("src",src1)
      }
      else{
        $(el).removeClass(className);
        if(flag=='1'){
          $(el).parent('span').css("background-color","#f2f2f2");
        }
        else if(flag=='2'){
          $(el).next("span").text("收藏");
        }
        else if(flag=='3'){
          $(el).next("span").children('img').attr("src",src1);
          $(el).next("span").children('span').text("收起全文");
        }
        else if(flag=='4'){
          $(el).html('<img src='+src2+'>');
        }
        $(el).attr("src",src2)
      }
    }
