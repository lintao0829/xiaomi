define(["jquery"],function($){
    function navXXK(){
        $(".bannerBox .bannerL").on("mouseenter",".ula li",function(){
            // alert(1) .siblings("li").attr("class","")
            $(".bannerL .ula li").attr("class","");
            $(this).attr("class","active2");
            $(this).parents(".ula").siblings("div").css("display","none").
            eq($(this).index()).css("display","block");

        })

        $(".bannerBox .bannerL").on("mouseleave","li",function(){
            $(this).attr("class","").parents("ul").siblings("div").css("display","none");
        })

        $(".bannerBox .bannerL div").mouseenter(function(){
           $(this).css("display","block");
        })
        $(".bannerBox .bannerL div").mouseleave(function(){
            $(this).css("display","none");
         })

        $.ajax({
            url:"../data/navXXK.json",
            success:function(arr){
                // console.log(arr);
                for(var i = 0 ;i < arr.length; i++){
                    $(` <li><a href="">${arr[i].title} <span>></span> </a></li>`).appendTo(".bannerL .ula")
                    var newArr = arr[i].child;
                    // console.log(newArr[1]);
                    // console.log(newArr)

                    for(var j = 0 ; j < newArr.length; j++){
                        var obj = newArr[j];
                        // console.log(obj);
                            $(`<li><a href=""><img src="${obj.img}" alt=""><span>${obj.title}</span></a></li>`)
                            .appendTo($(".bannerL div ul").eq(i)); 
                    }
                }
               
            },
            error:function(msg){
                alert(msg);
            }
            
        })



    }

    return{
        navXXK:navXXK
    }
})