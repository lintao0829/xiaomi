define(["jquery"],function($){
    function banner(){
        // alert(1)
        var aBtns = $(".bannerR").find(".bannerol").find("li");
        var oUl = $(".bannerR").find(".imgul");
        var iNow = 0;//代表现在是第几张图片在显示
        var timer = null;
        aBtns.eq(0).attr("class","active3");
        aBtns.click(function(){
            iNow = $(this).index();
            tab();
        })

        timer = setInterval(function(){
            iNow++;
            tab();
        },3000);

        $(".bannerR").mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer = setInterval(function(){
                iNow++;
                tab();
            },3000);
        })

        //封装一个函数切换图片和切换按钮
        function tab(){
            aBtns.attr("class","").eq(iNow).attr("class","active3");
            if(iNow == aBtns.size()){
                aBtns.eq(0).attr("class","active3");
            }

            oUl.animate({left:-iNow * 992},500,function(){
                //判断是否是最后一张图片
                if(iNow == aBtns.size()){
                    iNow = 0;
                    oUl.css("left",0);
                }
            })
        }

    }
    return {
        banner:banner
    }
})