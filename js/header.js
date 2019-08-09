define(["jquery"],function($){
    function header(){
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

    }
    return{
        header:header
    }
})