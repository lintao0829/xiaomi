define(["jquery"],function($){
    function topxxk(){
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
        


    }

    return{
        topxxk:topxxk
    }
})