
define(["jquery"],function($){
    function showBox2(){
        var aBtns = $(".showBox2").find(".showBox2Top").find("i");
        
        aBtns.eq(0).attr("class","active4");
        $(".showBox2").on("mouseenter",".showBox2Top i",function(){
            var oUl = $(".showBox2 .showBox2C ul");
            aBtns.attr("class","");
            $(this).attr("class","active4");
            oUl.css("display","none").eq($(this).index()-1).css("display","block");
           
        })
        

        var aBtns3 = $(".showBox3").find(".showBox3Top").find("i");
        
        $(".showBox3").on("mouseenter",".showBox3Top i",function(){
            var oUl3 = $(".showBox3 .showBox3C ul");
            aBtns3.attr("class","");
            $(this).attr("class","active4");
            oUl3.css("display","none").eq($(this).index()-1).css("display","block");
           
        })
    
        var aBtns4 = $(".showBox4").find(".showBox4Top").find("i");
        
        $(".showBox4").on("mouseenter",".showBox4Top i",function(){
            var oUl4 = $(".showBox4 .showBox4C ul");
            aBtns4.attr("class","");
            $(this).attr("class","active4");
            oUl4.css("display","none").eq($(this).index()-1).css("display","block");
           
        })

        //添加移入移出li标签显示div
        $(".showBox2").on("mouseenter","ul li",function(){
            // alert(1)
            $(this).children("div").stop().animate({top:220},300);
            // console.log($(this));
        })
        $(".showBox2").on("mouseleave","ul li",function(){
            // alert(1)
            $(this).children("div").stop().animate({top:300},300);
        })

        $(".showBox3C").on("mouseenter","ul li",function(){
            $(this).children("div").stop().animate({top:220},300);
            // console.log($(this));
        })
        $(".showBox3C").on("mouseleave","ul li",function(){
            $(this).children("div").stop().animate({top:300},300);
        })

        $(".showBox4C").on("mouseenter","ul li",function(){
            $(this).children("div").stop().animate({top:220},300);
            // console.log($(this));
        })
        $(".showBox4C").on("mouseleave","ul li",function(){
            $(this).children("div").stop().animate({top:300},300);
        })


        //通过ajax加载数据
        $.ajax({
            url:"../data/showBox2.json",
            success:function(arr){
                console.log(arr);
                for(var i = 0; i < arr.length; i++){
                    var oDiv = $(`<div class="showBox2C"> <div class="showbox2CL">
                                    <img src="../images/ccc.jpg" alt="">
                                    <img src="../images/ccc2.jpg" alt="">
                                </div></div>`);
                    var newArr = arr[i];
                    for(var j = 0 ; j < newArr.length; j++){
                        var oUl = $(`<ul></ul>`);
                        var newArr2 = newArr[j];
                        for(var k = 0 ; k < newArr2.length; k++){
                            var obj = newArr2[k];
                            $(`<li>
                                    <img src="${obj.img}" alt="">
                                    <span>${obj.span}</span>
                                    <i>${obj.i}</i>
                                    <em>${obj.em}</em>
                                    <div>
                                        <span>很满意，非常喜欢，开心！</span>
                                        <i>来着与童童的评价</i>
                                    </div>
                                </li>` ).appendTo(oUl);
                        }
                        oUl.appendTo(oDiv);
                    }
                    oDiv.appendTo($(".showBox2"))
                }
            },
            error:function(msg){
                alert(msg)
            }
        })

        // $.ajax({
        //     url:"../data/showBox2.json",
        //     success:function(arr){
        //         console.log(arr);
        //         for(var i = 0; i < arr.length; i++){
        //             var newArr = arr[i];
        //             for(var j = 0 ; j < newArr.length; j++){
        //                 var newArr2 = newArr[j];
        //                 for(var k = 0 ; k < newArr2.length; k++){
        //                     var obj = newArr2[k];
        //                     $(`<li>
        //                             <img src="${obj.img}" alt="">
        //                             <span>${obj.span}</span>
        //                             <i>6${obj.i}</i>
        //                             <em>${obj.em}</em>
        //                             <div>
        //                                 <span>很满意，非常喜欢，开心！</span>
        //                                 <i>来着与童童的评价</i>
        //                             </div>
        //                         </li>` ).appendTo($(".showBox3C ul").eq(j));
        //                 }
        //             }
        //         }
        //     },
        //     error:function(msg){
        //         alert(msg)
        //     }
        // })


    }
    return{
        showBox2:showBox2
    }
})