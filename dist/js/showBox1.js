
define(["jquery"],function($){

    $.ajax({
        url:"../data/showBox1.json",
        success:function(arr){
            // console.log(arr);
            for(var i = 0 ; i < arr.length; i++){
                $(`<li><img src="${arr[i].img}" alt="">
                <span>${arr[i].span}</span>
                <i>${arr[i].i}</i>
                <em>${arr[i].em1}</em>
                <em>${arr[i].em2}</em></li>`).appendTo($(".showBox1 .showBox1R ul"))
            }
        },
        error:function(msg){
            alert(msg);
        }
    })    

    //秒表
    var timer = null;
    var i= 10800 ;
     
    timer = setInterval(function(){
        i--;
        $(".showBox1 .showBox1L .sec").html(doubleNum(i % 60));
        $(".showBox1 .showBox1L .min").html(doubleNum(parseInt(i / 60) % 60));
        $(".showBox1 .showBox1L .hour").html(doubleNum(parseInt(i / 3600)));
    },1000)
    if( i == 0){
        clearInterval(timer);
    }

//封装函数实现两位数显示
    function doubleNum(num){
        if(num < 10){
            return "0"+num;
        }else{
            return num;
        }
    }

    var oUl = $(".showBox1R").find("ul");
    function showBox1(){
        var oUl = $(".showBox1R").find("ul");

        if(oUl.position().left >= 0){
            // alert(1);
            $(".shangou .jiantou1").attr("disabled",true);//取消按钮点击
        }


        $(".jiantou1").click(function(){
            $(".shangou .jiantou2").css("background","");
            var oUl = $(".showBox1R").find("ul");
            
            var oUl = $(".showBox1R").find("ul")
            $(".showBox1R ul").stop(true,true).animate({left:oUl.position().left + 988},500,function(){
                if(oUl.position().left >= 0){
                    
                    // alert(oUl.position().left);
                    $(".shangou .jiantou1").attr("disabled",true);//取消按钮点击
                    $(".shangou .jiantou1").css("background","gray");
                    $(".shangou .jiantou2").attr("disabled",false);
                }
            });
        })

        
        $(".jiantou2").click(function(){
            var oUl = $(".showBox1R").find("ul")
            $(".shangou .jiantou1").css("background","");
            $(".showBox1R ul").stop(true,true).animate({left:oUl.position().left - 988},500,function(){
                $(".shangou .jiantou1").attr("disabled",false);
                // alert(oUl.position().left);
                if(oUl.position().left <= -1975.9){
                    // alert(1)
                    $(".shangou .jiantou2").attr("disabled",true);//取消按钮点击
                    $(".shangou .jiantou2").css("background","gray");
                    $(".shangou .jiantou1").attr("disabled",false);
                }
            });
        })

    }

    return{
        showBox1:showBox1
    }
})