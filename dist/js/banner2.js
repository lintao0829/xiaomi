define(["jquery"],function($){
    function banner2(){
        var aBtns = $(".bannerR").find(".bannerol").find("li");
        var oUl = $(".bannerR").find(".imgul");
        var aLis = oUl.find("li");
        var iNow = 0;//代表图片的下标
        var timer = null;

        aBtns.eq(0).attr("class","active3");
        aBtns.click(function(){
            iNow = $(this).index();
            // alert(iNow);
            play();
        })
       

        timer = setInterval(function(){
            // iNow++;
            play();
        },3000)

        $(".bannerR").mouseenter(function(){
            clearInterval(timer);
            // $(".left").css("background","#848484");
        }).mouseleave(function(){
            // $(".left").css("background","");
            timer = setInterval(function(){
                // iNow++;
                play();
            },3000)
        })
        
        function play(){
            iNow++;
            iNow = iNow > 4 ? 0 : iNow;
            aBtns.attr("class","").eq(iNow).attr("class","active3");
            aLis.eq(iNow).fadeIn(500).siblings().fadeOut(500);
        }

        // function play2(){
        //     // iNow--;
        //     iNow = iNow < 0? 4 : iNow;
        //     aBtns.attr("class","").eq(iNow).attr("class","active3");
        //     aLis.eq(iNow).fadeIn(500).siblings().fadeOut(500);
        // }


        //小耳朵切换图片
        $(".bannerR .ear .left").mouseenter(function(){
            $(".left").css("background","#848484");
        }).mouseleave(function(){
            $(".left").css("background","");
        })

        $(".bannerR .ear .right").mouseenter(function(){
            $(".right").css("background","#848484");
        }).mouseleave(function(){
            $(".right").css("background","");
        })

        $(".bannerR .ear .left").click(function(){
            iNow--;
            // play2();
            iNow = iNow < 0? 4 : iNow;
            aBtns.attr("class","").eq(iNow).attr("class","active3");
            aLis.eq(iNow).fadeIn(500).siblings().fadeOut(500);
        })
        $(".bannerR .ear .right").click(function(){
            iNow++;
            // play();
            iNow = iNow > 4 ? 0 : iNow;
            aBtns.attr("class","").eq(iNow).attr("class","active3");
            aLis.eq(iNow).fadeIn(500).siblings().fadeOut(500);
        })


    }
    return{
        banner2:banner2
    }
})