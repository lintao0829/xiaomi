define(["jquery"],function($){
    function fangdajing(){
        $(".headerL li:eq(10)").mouseenter(function(){
            $(".headerL ul img").css("display","block");
        })
        $(".headerL li:eq(10)").mouseleave(function(){
            $(".headerL ul img").css("display","none");
        })

        $(".headerL li a").mouseenter(function(){
            $(this).css("color","#ffffff");
        })
        $(".headerL li a").mouseleave(function(){
            $(this).css("color","#b0b0b0");
        })


        $(".headerR li a ").mouseenter(function(){
            $(this).css("color","#ffffff");
        })

        $(".headerR li a").mouseleave(function(){
            $(this).css("color","#b0b0b0");
        })

        $(".headerR  li a:eq(3)").mouseenter(function(){
            $(".headerR ul li a:eq(3)").css("color","orange");
            $(".headerR ul li a:eq(3)").css("border","0");
        })
        $(".headerR  li a:eq(3)").mouseleave(function(){
            $(".headerR ul li a:eq(3)").css("color","#b0b0b0");
            $(".headerR ul li a:eq(3)").css("border","1px");
        })
        

        $(".headerR  li:eq(3)").mouseenter(function(){
            $(".headerR ul li:eq(3)").css("background-color","white");
            $(".headerR ul li a:eq(3)").css("color","orange");
            $(".headerR ul div").stop().slideDown(300);
        })
        $(".headerR  li:eq(3)").mouseleave(function(){
            $(".headerR ul li:eq(3)").css("background-color","#424242");
            $(".headerR ul li a:eq(3)").css("color","#b0b0b0");
            $(".headerR ul div").stop().slideUp(300);
        })



        $(".header2 .header2box .header2boxL").on("mouseenter","ul a",function(){
            $(".xxkBox").stop().slideDown(300);
            $(".xxkBox ul").css("display","none").siblings("ul").eq($(this).index()).css("display","block");
            $(this).attr("class","active").siblings("ul li").attr("class","");
        })
        $(".header2 .header2box .header2boxL").on("mouseleave","ul a",function(){
            $(".xxkBox").stop().slideUp(300);
            $(this).attr("class","");
        })

        //hBox添加鼠标移入移出
        $(".xxkBox").on("mouseenter",".hBox",function(){
            $(".xxkBox").stop().slideDown(300);
        })
        $(".xxkBox").on("mouseleave",".hBox",function(){
            $(".xxkBox").stop().slideUp(300);
        })
        
        //服务和社区没有下边栏
        $(".header2 .header2box .header2boxL").on("mouseenter","ul a:eq(7)",function(){
            $(".xxkBox").css("display","none");
        })
        $(".header2 .header2box .header2boxL").on("mouseenter","ul a:eq(8)",function(){
            $(".xxkBox").css("display","none");
        })


        $.ajax({
            url:"../data/topxxk.json",
            success:function(arr){
                // console.log(arr);
                for(var i = 0 ; i < arr.length; i++){
                    var newArr = arr[i];
                    var oUl = $(`<ul class="ul${i+1}"></ul>`)
                    for(var j = 0; j < newArr.length; j++){
                        $(`<a class="a2" href="">
                        <li>
                            <span>${newArr[j].span}</span>
                            <a href=""><img src="${newArr[j].img}" alt=""></a>  
                            <a class="a3" href="">${newArr[j].a}</a>
                            <i>${newArr[j].i}</i>
                        </li>
                    </a> `).appendTo(oUl);
                    }
                    oUl.appendTo($(".xxkBox .hBox"));
                }
            },
            error:function(msg){
                alert(msg);
            }
            
        })

//ol选项卡切换图片


        $(".left ol li").mouseenter(function(){
            // alert(1)
            // $(".right .big").css("display","block");
            $(this).attr("class","active5").siblings("li").attr("class","")
            .parents("ol").siblings("ul").find("li").css("display","none").eq($(this).index()).css("display","block");
            $(this).parents(".left").siblings(".right").find("li").css("display","none").eq($(this).index()).css("display","block");
        })


        //移入移出显示放大镜    拖拽
        $(".left ul").mouseenter(function(){
            // alert(1);
            $(".mask").css("display","block");
            $(".big").css("display","block");
        }).mouseleave(function(){
            $(".mask").css("display","none");
            $(".big").css("display","none");
        })

        //拖拽
        $(".left ul").mousemove(function(ev){
            var l = ev.pageX - $(".left").offset().left -120;
            var t = ev.pageY - $(".left").offset().top -100 ;
            // alert(l)
            if(l < 0){
                l = 0;
            }
            if( l > 360){
                l = 360;
            }
            if(t < 0){
                t = 0;
            }
            if(t > 210){
                t = 210;
            }
            $(".mask").css({
                left:l,
                top:t
            })

            $(".big li img").css({
                left:-l*4,
                top:-t*4
            })


        })

        





    }
    return{
        fangdajing:fangdajing
    }
})